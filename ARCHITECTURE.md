# AvantaSphere Architecture

## Folder Structure

```
├── data/                    # Static JSON data (replace with Prisma later)
│   ├── categories.json
│   ├── products.json
│   ├── certificates.json
│   ├── buyers.json
│   ├── orders.json
│   ├── inquiries.json
│   ├── homepage-sections.json
│   └── index.ts
│
├── public/
│   └── uploads/             # Category & product images (served at /uploads/...)
│       ├── categories/
│       ├── products/
│       └── certificates/
│
├── src/
│   ├── app/
│   │   ├── api/             # API routes
│   │   │   ├── categories/       # CRUD
│   │   │   ├── products/         # CRUD
│   │   │   ├── certificates/     # GET, visibility toggle
│   │   │   ├── homepage-sections/
│   │   │   ├── upload/           # Image upload (categories, products, certificates)
│   │   │   ├── auth/register/    # Buyer registration
│   │   │   ├── buyer/            # Buyer-protected APIs
│   │   │   │   ├── inquiries/
│   │   │   │   ├── orders/
│   │   │   │   └── profile/
│   │   │   └── admin/            # Admin-protected APIs
│   │   │       ├── auth/login/
│   │   │       ├── buyers/
│   │   │       ├── orders/
│   │   │       └── inquiries/
│   │   │
│   │   ├── (buyer)/         # Buyer portal routes
│   │   │   └── buyer/
│   │   │       ├── dashboard/
│   │   │       ├── inquiries/
│   │   │       ├── orders/
│   │   │       └── profile/
│   │   │
│   │   ├── (admin)/         # Admin panel routes
│   │   │   └── admin/
│   │   │       ├── login/
│   │   │       └── (dashboard, CRUD pages)
│   │   │
│   │   ├── categories/      # Public pages
│   │   ├── products/
│   │   ├── about/
│   │   ├── contact/
│   │   └── ...
│   │
│   ├── lib/
│   │   ├── api/response.ts      # JSON response helpers
│   │   ├── auth/session.ts      # Auth helpers (extend with NextAuth)
│   │   ├── constants/uploads.ts
│   │   ├── repositories/        # Repository pattern
│   │   ├── types/
│   │   └── validation/schemas.ts # Zod schemas
│   │
│   ├── components/
│   └── middleware.ts        # Role-based route protection
```

## Data Flow

- **Static data**: JSON files in `/data` are loaded via repositories.
- **Future Prisma**: Swap repository implementations to use Prisma; UI/API contracts remain unchanged.
- **Images**: Upload via `POST /api/upload` (type: categories | products | certificates). Files stored in `public/uploads/{type}/` and served at `/uploads/{type}/{filename}`.

## API Summary

| Route | Methods | Auth | Description |
|-------|---------|------|-------------|
| `/api/categories` | GET, POST | - | List/create categories |
| `/api/categories/[id]` | GET, PUT, DELETE | - | Category CRUD |
| `/api/products` | GET, POST | - | List/create (filter by categoryId) |
| `/api/products/[id]` | GET, PUT, DELETE | - | Product CRUD |
| `/api/certificates` | GET | - | List (visible=true for public) |
| `/api/certificates/[id]/visibility` | PATCH | Admin | Toggle visibility |
| `/api/homepage-sections` | GET, PATCH | Admin | Homepage section control |
| `/api/upload` | POST | Admin | Upload images |
| `/api/auth/register` | POST | - | Buyer registration |
| `/api/buyer/*` | - | Buyer | Inquiries, orders, profile |
| `/api/admin/*` | - | Admin | Auth, buyers, orders, inquiries |

## Role-Based Access

- **Middleware**: Protects `/buyer/*` (requires buyer) and `/admin/*` (requires admin, except login).
- **API routes**: Admin routes check `x-user-role: admin`; buyer routes check `x-user-id`.
- Replace with JWT/cookies and proper auth library for production.

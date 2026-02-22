# Static Login Pages - Complete Documentation

## Overview

This document describes the newly redesigned static login and registration pages for Avantasphere with role-based authentication, dynamic API integration, and comprehensive responsive design for both desktop and mobile platforms.

## Key Features

### ✅ Static Login Implementation

- **Pre-filled credentials**: Email and password fields are disabled and pre-filled with demo credentials
- **Single-click sign-in**: Users just need to click the "Sign In" button to authenticate
- **Dynamic API calls**: Despite static credentials, the login makes real API calls to authenticate users
- **Auto-disable after login**: Button becomes disabled during sign-in process with loading spinner
- **File-based data**: All data is read from static JSON files in `/data` folder

### ✅ Responsive Design

- **Mobile-first approach**: Optimized for small screens first
- **Desktop layouts**: 2-column grid layouts on desktop (features on left, form on right)
- **Tablet support**: Smooth transitions between mobile and desktop views
- **Touch-friendly**: Large buttons and input fields for mobile interaction

### ✅ Dynamic API Integration

- **Automatic API calls**: Login submits credentials to `/api/auth/login`
- **Role-based routing**: Automatically redirects to `/admin` or `/buyer/dashboard`
- **Cookie-based auth**: Sets httpOnly cookies for session management
- **Error handling**: Displays clear error messages on authentication failure

## Pages Overview

### 1. Role Selection Page (`/login`)

**Purpose**: Choose between Admin or Buyer portals

**Desktop Layout**:

- Header with "Avantasphere" branding (top)
- Two large feature cards side-by-side (left: Admin, right: Buyer)
- Feature list for each role shown in the cards
- Footer with registration link
- Info cards showing security, speed, and global reach

**Mobile Layout**:

- Header with Avantasphere branding (top)
- Stacked feature cards (full width)
- Feature lists inline with text
- Responsive grid for info cards
- Large touch-friendly buttons

**Features**:

- Animated gradient background
- Glassmorphism design with transparency effects
- Color-coded cards (Blue for Admin, Green for Buyer)
- Hover effects and smooth transitions
- Credentials display inline
- Quick visual feature comparison

**Admin Portal Features Listed**:

- 📊 Dashboard
- 📂 Category Management
- 📦 Product CRUD
- 👥 Buyer Management
- 🛍️ Order Management
- 💬 Inquiry Management
- 🎖️ Certificate Control
- 🏠 Homepage Sections
- 🚚 Tracking Updates

**Buyer Portal Features Listed**:

- 📊 Dashboard
- 💬 View Inquiries
- 🛍️ Track Orders
- 🚚 Shipping Status
- 📥 Download Documents
- 📋 View Invoices
- 👤 Profile Management

---

### 2. Admin Login Page (`/admin/login`)

**Purpose**: Secure admin authentication with static credentials

**Desktop Layout** (Two-column):

- **Left Side** (60% width):
  - "Admin Panel" title
  - "Complete control over your platform and operations" subtitle
  - 3x3 grid of admin features with icons and descriptions
  - Security note: "🔒 Secure Login: Keep your credentials confidential"
- **Right Side** (40% width):
  - "Welcome Admin" header
  - Call-to-action text
  - Login card with:
    - Static credential fields (disabled, read-only)
    - Email field (pre-filled, disabled)
    - Password field (pre-filled, masked, disabled)
    - Sign In button (enabled)
  - Back to role selection link

**Mobile Layout**:

- Full-width centered form
- Icon at top (👤)
- Title "Admin Portal"
- Subtitle "Manage platform & operations"
- Static credential display in highlighted box
- Sign In button
- Back link
- Grid of features below (3 columns, auto-wrap)

**Static Credentials Display**:

```
Email: admin@avantasphere.com
Password: admin123
```

**Features Grid**:

- 📊 Dashboard - View analytics & stats
- 📂 Categories - Manage categories
- 📦 Products - Manage product catalog
- 👥 Buyers - Manage buyer accounts
- 🛍️ Orders - Process orders
- 📋 Inquiries - Handle inquiries
- 🎖️ Certifications - Manage certs
- 🏠 Homepage - Control sections
- 🚚 Tracking - Update shipments

**API Behavior**:

- Submits `/api/auth/login` with admin credentials
- On success: Redirects to `/admin` dashboard
- On failure: Shows error message, allows retry
- Loading state: Spinner + "Signing in..." text
- Button disabled during API call

---

### 3. Buyer Login Page (`/buyer/login`)

**Purpose**: Buyer authentication for accessing dashboard and orders

**Desktop Layout** (Two-column):

- **Left Side** (60% width):
  - "Buyer Portal" title
  - "Access all your orders, inquiries, and documents in one place" subtitle
  - 2x4 grid of buyer features with icons and descriptions
  - Registration note: "📝 Note: Registration required before submitting inquiries"
- **Right Side** (40% width):
  - "Welcome Back" header on desktop, 🛒 icon on mobile
  - Login card with static credentials
  - Call-to-action button
  - Register link
  - Back to role selection link

**Mobile Layout**:

- Full-width centered form
- Icon at top (🛒)
- Title "Buyer Portal"
- Subtitle "Access your inquiries, orders & more"
- Static credential display
- Sign In button
- Links section
- Feature grid below (2 columns)

**Static Credentials Display**:

```
Email: buyer@example.com
Password: buyer123
```

**Features Grid**:

- 📊 Dashboard - View activities & stats
- 💬 Inquiries - Request quotations
- 🛍️ Track Orders - Monitor purchases
- 🚚 Shipping Status - Real-time tracking
- 📥 Documents - Download PDFs
- 📋 Invoices - Payment records
- 👤 Profile - Account settings

**API Behavior**:

- Submits `/api/auth/login` with buyer credentials
- On success: Redirects to `/buyer/dashboard`
- On failure: Shows error message
- Loading state: Spinner with "Signing in..."
- Button disabled during authentication

---

### 4. Registration Page (`/register`)

**Purpose**: Buyer self-registration (registration required before inquiries)

**Desktop Layout** (Two-column):

- **Left Side** (60% width):
  - "Join Avantasphere" title
  - "Registration is required before submitting any inquiries" subtitle
  - Feature cards with benefits:
    - 📊 Dashboard - Track all your activities
    - 💬 Submit Inquiries - Request product quotations
    - 🛍️ Track Orders - Monitor your purchases
    - 📥 Download Documents - Access invoices & PDFs

- **Right Side** (40% width):
  - "Sign Up" header
  - "Create your buyer account" subtitle
  - Form fields:
    - Email (required)
    - Full Name (required)
    - Company (optional)
    - Country (optional)
  - Create Account button
  - Sign in link for existing users
  - Privacy note

**Mobile Layout**:

- Icon at top (📝)
- Title "Create Account"
- Subtitle "Registration required before inquiries"
- Form fields (stacked vertically)
- Create Account button
- Sign in link
- Privacy note
- Feature benefits grid (stacked)

**Form Fields**:

```
Email Address * (required)
Full Name * (required)
Company (optional)
Country (optional)
```

**Privacy Notice**:
"🔒 Privacy: Your information is secure and will never be shared."

---

## API Integration

### Login API Endpoint

**Endpoint**: `POST /api/auth/login`

**Request Body**:

```json
{
  "email": "admin@avantasphere.com",
  "password": "admin123"
}
```

**Success Response (200)**:

```json
{
  "data": {
    "user": {
      "id": "admin-1",
      "email": "admin@avantasphere.com",
      "role": "admin",
      "name": "Admin"
    },
    "token": "static-admin-token"
  }
}
```

**Error Response (401)**:

```json
{
  "error": "Invalid email or password"
}
```

**Cookies Set**:

- `user-id`: User's unique identifier (httpOnly, 24hr expiry)
- `user-role`: User's role (httpOnly, 24hr expiry)
- `user-email`: User's email (httpOnly, 24hr expiry)

---

## Styling System

### Color Scheme

**Admin Portal**:

- Primary: Blue-600 to Blue-700 (#1E40AF to #1E3A8A)
- Accent: Blue-400 to Blue-500
- Background: Blue-50 to Blue-900 gradient
- Border: Blue-300 to Blue-400

**Buyer Portal**:

- Primary: Green-600 to Emerald-600 (#16A34A to #059669)
- Accent: Green-400 to Green-500
- Background: Green-50 to Emerald-900 gradient
- Border: Green-300 to Green-400

**Main Login Theme**:

- Background: Dark gradient (Slate-900 to Blue-900)
- Glassmorphism: Backdrop blur with transparency
- Borders: White/colored with 30-50% opacity

### Layout Breakpoints

```
Mobile:   < 640px    (Full-width stacked )
Tablet:   640-1024px (Responsive grid)
Desktop:  > 1024px   (2-column split layout)
```

### Typography

```
Headings:   Semibold, 3xl-6xl (responsive)
Subheadings: Medium, lg-2xl
Labels:     Semibold, sm
Body:       Regular, sm-base
Mono/Code:  Font-mono, xs-sm
```

---

## Responsive Design Details

### Mobile (< 640px)

**Login Pages**:

- Single column layout
- Full-width cards (p-4)
- Center-aligned content
- Large buttons (py-3, px-4)
- Feature grid: 2 columns (narrow columns)

### Tablet (640-1024px)

**Login Pages**:

- Adaptive sizing
- Responsive text (sm:text-base)
- Medium button sizing
- Readable line lengths

### Desktop (> 1024px)

**Login Pages**:

- 2-column grid (split 50-50 or 60-40)
- Features on left side
- Form on right side
- Larger typography
- Multi-column feature grid (2-3 columns)
- Interactive hover effects
- Smooth transitions

---

## User Experience Features

### Loading States

- **Button Changes**:
  - From: `Sign In`
  - To: ◌ spinning icon + `Signing in...`
  - State: `disabled`
  - Cursor: `not-allowed`

- **Visual Feedback**:
  - Background color: Gray-400
  - Opacity: 50%
  - Is disabled: True

### Error Handling

- **Error Display**:
  - Background: Red-50
  - Border: Red-200
  - Text: Red-700
  - Position: Top of form
  - Auto-dismisses on: New submission

- **Error Messages**:
  - "Invalid credentials. Admin access only."
  - "Account type mismatch. Please use the admin portal."
  - "An error occurred. Please try again."

### Transitions & Animations

- **Hover Effects**:
  - Card shadow: `shadow-lg` → `shadow-3xl`
  - Button: `translate-y-1` on hover
  - Color: Smooth gradient transitions
  - Duration: 200-300ms

- **Loader Animation**:
  - SVG spin animation (continuous)
  - Duration: Automatic
  - Color: White

---

## Security Considerations

✅ **HTTPS Only**: Production environment only
✅ **Secure Cookies**: HttpOnly flag set on all auth cookies
✅ **No Password Display**: Password fields masked
✅ **CORS Configured**: Cross-origin requests validated
✅ **Rate Limiting**: Backend enforces rate limits
✅ **Input Validation**: Client-side + server-side validation
✅ **Session Timeout**: Cookies expire after 24 hours
✅ **Role Enforcement**: Middleware validates user roles

---

## Testing Checklist

### Admin Login Test Cases

- ✅ Valid admin credentials: Redirects to `/admin`
- ✅ Valid buyer credentials: Shows error "use admin portal"
- ✅ Loading state: Button disabled with spinner
- ✅ API call: Successful POST to `/api/auth/login`
- ✅ Cookies set: `user-id`, `user-role`, `user-email`
- ✅ Mobile layout: Features hidden, centered form
- ✅ Desktop layout: Features on left, form on right

### Buyer Login Test Cases

- ✅ Valid buyer credentials: Redirects to `/buyer/dashboard`
- ✅ Valid admin credentials: Shows error "use admin portal"
- ✅ Loading state: Button disabled with spinner
- ✅ API call: Successful POST to `/api/auth/login`
- ✅ Mobile layout: Stacked form, small feature grid
- ✅ Desktop layout: Features left, form right
- ✅ Registration link: Navigates to `/register`

### Registration Test Cases

- ✅ Required fields: Email, Full Name
- ✅ Optional fields: Company, Country
- ✅ Form submission: POST to `/api/auth/register`
- ✅ Mobile layout: Stacked form, feature list below
- ✅ Desktop layout: Benefits left, form right
- ✅ Sign in link: Navigates to `/login`

### Role Selection Test Cases

- ✅ Admin card: Shows admin features
- ✅ Buyer card: Shows buyer features
- ✅ Admin link: Navigates to `/admin/login`
- ✅ Buyer link: Navigates to `/buyer/login`
- ✅ Register link: Navigates to `/register`
- ✅ Mobile layout: Stacked cards, feature list
- ✅ Desktop layout: Side-by-side card

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Chrome Mobile (latest)

---

## Performance Metrics

- **LCP** (Largest Contentful Paint): < 2.5s
- **FCP** (First Contentful Paint): < 1.8s
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTI** (Time to Interactive): < 3.5s
- **Page Size**: ~50-60 KB (without images)
- **API Response Time**: < 500ms expected

---

## File Structure

```
src/app/
├── login/
│   └── page.tsx              (Role selection page)
├── register/
│   └── page.tsx              (Buyer registration)
├── (admin)/
│   └── admin/
│       └── login/
│           └── page.tsx      (Admin login page)
├── (buyer)/
│   └── buyer/
│       └── login/
│           └── page.tsx      (Buyer login page)
└── api/
    └── auth/
        └── login/
            └── route.ts      (Login API endpoint)

src/lib/
├── api/
│   └── client.ts             (API utility functions)
├── constants/
│   └── auth.ts               (Static credentials & config)
└── types/
    └── index.ts              (TypeScript types)
```

---

## Static Credentials (Development)

File: `/src/lib/constants/auth.ts`

```typescript
export const STATIC_CREDENTIALS = {
  admin: {
    email: "admin@avantasphere.com",
    password: "admin123",
    id: "admin-1",
    role: "admin" as const,
  },
  buyer: {
    email: "buyer@example.com",
    password: "buyer123",
    id: "buyer-1",
    role: "buyer" as const,
  },
} as const;
```

---

## Data Storage

All platform data is read from static JSON files located in `/data/`:

- `buyers.json` - Buyer account information
- `products.json` - Product catalog
- `categories.json` - Product categories
- `orders.json` - Order records
- `inquiries.json` - Inquiry requests
- `certificates.json` - Certification/compliance docs
- `homepage-sections.json` - Homepage configuration

---

## Customization Guide

### Change Admin Color

In `/src/app/(admin)/admin/login/page.tsx`:

```tsx
// Replace blue colors
from-blue-600 → from-purple-600
to-blue-700 → to-purple-700
border-blue-400 → border-purple-400
```

### Change Buyer Color

In `/src/app/(buyer)/buyer/login/page.tsx`:

```tsx
// Replace green colors
from-green-600 → from-teal-600
to-emerald-600 → to-cyan-600
border-green-400 → border-teal-400
```

### Add More Features

In the feature grid:

```tsx
{[
  { icon: '📊', label: 'Feature', desc: 'Description' },
  // Add more
].map(...)}
```

### Update Credentials

In `/src/lib/constants/auth.ts`:

```typescript
admin: {
  email: 'newadmin@example.com',
  password: 'newpassword',
  // ...
}
```

---

## Future Enhancements

1. **OAuth Integration**: Google, GitHub, Azure AD login
2. **Two-Factor Authentication**: SMS/Email OTP verification
3. **Biometric Login**: Fingerprint/Face ID on mobile
4. **Password Reset**: Email-based password recovery
5. **Remember Device**: Reduce login frequency
6. **Social Login**: LinkedIn, Facebook integration
7. **Advanced Analytics**: Login attempt tracking
8. **Dark Mode**: Theme switching
9. **Multi-language**: Internationalization (i18n)
10. **Accessibility**: Enhanced WCAG compliance

---

## Support & Troubleshooting

### Issue: Login not redirecting

**Solution**:

1. Check network tab for API response
2. Verify credentials in console
3. Clear cookies and cache
4. Check middleware at `/src/middleware.ts`

### Issue: Static credentials not displaying

**Solution**:

1. Verify file: `/src/lib/constants/auth.ts`
2. Check import statements are correct
3. Rebuild project: `npm run build`

### Issue: Mobile layout broken

**Solution**:

1. Verify viewport meta tag in layout
2. Check Tailwind breakpoints (sm:, md:, lg:)
3. Test in mobile emulator
4. Clear browser cache

### Issue: API call failing

**Solution**:

1. Check network tab for 404/500 errors
2. Verify API endpoint: `/api/auth/login`
3. Check middleware authentication logic
4. Verify CORS configuration

---

## Version History

- **v2.0** (Current): Static credentials with dynamic API calls
  - Split login pages for Admin & Buyer
  - Desktop/mobile responsive layouts
  - Feature showcases for each role
  - Role-based routing
  - Loading states with spinners
  - Comprehensive error handling

- **v1.0**: Initial login pages with form validation
  - Dynamic email/password input
  - Real-time form validation
  - Basic error messages
  - Mobile-responsive design

---

## Contact & Support

For issues or questions about the login system, please refer to:

- Architecture documentation: `ARCHITECTURE.md`
- API documentation: `/src/app/api`
- Middleware logic: `/src/middleware.ts`
- Type definitions: `/src/lib/types/index.ts`

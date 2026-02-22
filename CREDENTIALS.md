# Static Login Credentials

Shared credentials for development/demo. Both Admin and Buyer use the same auth API (`/api/auth/login`); role is determined by email.

| Role  | Email                    | Password  |
|-------|--------------------------|-----------|
| Admin | admin@avantasphere.com   | admin123  |
| Buyer | buyer@example.com        | buyer123  |

- **Admin** → Redirects to `/admin` after login
- **Buyer** → Redirects to `/buyer/dashboard` after login

Login pages:
- `/login` – Main login (accepts both; redirects based on role)
- `/admin/login` – Admin-only login

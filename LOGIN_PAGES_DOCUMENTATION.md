# Login Pages Documentation

## Overview

This document describes the modern, responsive login system for Avantasphere. The system includes role-based login pages (Admin and Buyer) with dynamic API integration, comprehensive form validation, and mobile-first responsive design.

## Architecture

### Login Flow

```
1. User visits /login (Role Selection)
   ├─ Admin Portal → /admin/login (Admin Credentials)
   ├─ Buyer Portal → /buyer/login (Buyer Credentials)
   └─ Register → /register (New Buyer)

2. User submits credentials via API POST /api/auth/login
   ├─ Validates email & password
   ├─ Checks role (admin/buyer)
   └─ Sets cookies & redirects

3. Middleware checks cookies & restricts access
```

## Pages

### 1. Role Selection Page (`/login`)

- **Purpose**: Let users choose their role before logging in
- **Design**: Modern card-based layout with gradient background
- **Features**:
  - Role cards with icons (👤 Admin, 🛒 Buyer)
  - Direct links to respective login pages
  - Quick credential display for demos
  - Responsive grid (1 col mobile, 2 cols desktop)
  - Register link for new buyers

### 2. Admin Login Page (`/admin/login`)

- **Purpose**: Secure admin authentication
- **Design**: Blue-gradient background, professional appearance
- **Features**:
  - Email validation
  - Password fields with show/hide capability
  - Real-time error messages
  - Quick demo login button
  - Admin features showcase (6 icons)
  - Security notice
  - Back to role selection link

### 3. Buyer Login Page (`/buyer/login`)

- **Purpose**: Buyer authentication and dashboard access
- **Design**: Green-gradient background, friendly appearance
- **Features**:
  - Email & password validation
  - Inline error messages
  - Quick demo credentials button
  - Feature showcase (3 main features)
  - Register link
  - Back to role selection

### 4. Registration Page (`/register`)

- **Purpose**: Buyer self-registration
- **Design**: Green-gradient, consistent with buyer portal
- **Fields**:
  - Email (required)
  - Full Name (required)
  - Company (optional)
  - Country (optional)
- **Features**:
  - Sign in link for existing buyers
  - Benefits list
  - Professional styling

## Component Library

### Reusable Login Components

Located in `/src/components/LoginComponents.tsx`:

#### `LoginField`

- Email, password, or text input fields
- Real-time validation error display
- Disabled state handling
- Focus states with color change

```tsx
<LoginField
  id="email"
  label="Email Address"
  type="email"
  value={email}
  onChange={setEmail}
  error={errors.email}
  placeholder="user@example.com"
/>
```

#### `LoginButton`

- Variant support (admin/buyer)
- Loading state with spinner
- Disabled state handling
- Gradient backgrounds

```tsx
<LoginButton isLoading={loading} variant="buyer" disabled={!isFormValid}>
  Sign In
</LoginButton>
```

#### `LoginHeader`

- Icon display
- Title and subtitle
- Role-specific colors
- Responsive sizing

```tsx
<LoginHeader
  icon="👤"
  title="Admin Portal"
  subtitle="Sign in to manage the platform"
  variant="admin"
/>
```

#### `ErrorAlert`

- Error message display
- Red background styling
- Professional appearance

```tsx
<ErrorAlert message="Invalid email or password" />
```

#### `QuickLoginButton`

- Demo credential quick-fill
- Role-specific styling
- Email display below

```tsx
<QuickLoginButton
  email="admin@example.com"
  onClick={handleQuickLogin}
  variant="admin"
/>
```

## API Integration

### Login Endpoint

- **URL**: `POST /api/auth/login`
- **Request**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### Response (Success)

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

### Response (Error)

```json
{
  "error": "Invalid email or password"
}
```

### Cookies Set by API

- `user-id`: User's unique identifier
- `user-role`: User's role (admin/buyer)
- `user-email`: User's email address
- Duration: 24 hours

## Form Validation

Client-side validation includes:

### Email Validation

- Required field
- Must match email pattern: `^\S+@\S+\.\S+$`

### Password Validation

- Required field
- Minimum 3 characters

### Error Display

- Real-time validation feedback
- Clear error messages below fields
- Red border for invalid fields
- Red background for visual emphasis

## Responsive Design

### Mobile (< 640px)

- Single column layout
- Full-width cards
- Larger touch targets (48px+ height)
- Optimized padding (p-4)
- Smaller font sizes

### Tablet (640px - 1024px)

- Adjusted widget sizes
- Comfortable spacing

### Desktop (> 1024px)

- Two-column grid for role selection
- Full-featured layouts
- Enhanced hover effects
- Larger typography

## Styling System

### Color Scheme

- **Admin**: Blue gradient (#1E40AF - #1E3A8A)
- **Buyer**: Green gradient (#16A34A - #15803D)
- **Background**: Gradient (slate/green/blue blend)
- **Text**: Gray-900 (dark mode text)
- **Accent**: Traditional brand colors

### Typography

- **Headings**: Bold, responsive (3xl-5xl)
- **Labels**: Semibold, small size (sm)
- **Body**: Regular text (sm-base)
- **Code**: Monospace for credentials

### Shadows & Effects

- Shadow-xl on cards
- Hover shadow-3xl effects
- Blur backdrop effect (backdrop-blur-sm)
- Smooth transitions (200-300ms)
- Color transitions on focus

## API Client Usage

```typescript
import { api } from "@/lib/api/client";

const { data, error } = await api.post<LoginResponse>("/api/auth/login", {
  email,
  password,
});

if (error) {
  // Handle error
  setError(error);
} else if (data?.user?.role === "admin") {
  // Redirect to admin dashboard
  router.push("/admin");
}
```

## Static Credentials (Development)

Located in `/src/lib/constants/auth.ts`:

- **Admin**:
  - Email: `admin@avantasphere.com`
  - Password: `admin123`

- **Buyer**:
  - Email: `buyer@example.com`
  - Password: `buyer123`

## Customization Guide

### Change Admin Color Scheme

Replace `from-blue-600` with your color in `/admin/login/page.tsx`:

```tsx
// Change gradient
className="from-your-color-600 to-your-color-700"

// Update header variant
<LoginHeader variant="admin" /> // Currently uses blue
```

### Change Buyer Color Scheme

Replace `from-green-600` with your color in `/buyer/login/page.tsx`

### Update Features List

Edit the grid sections at the end of each login page:

```tsx
{[
  { icon: '📊', label: 'Dashboard' },
  // Add more features
].map(...)}
```

### Add Remember Me Functionality

1. Add checkbox in form
2. Store preference in localStorage
3. Pre-fill email on next visit

### Add Password Reset

1. Create `/forgot-password` page
2. Add link in login forms
3. Implement email-based reset flow

## Security Considerations

1. **HTTPS Only**: Always use HTTPS in production
2. **Secure Cookies**: HttpOnly flag set on auth cookies
3. **CORS**: Configure allowed origins
4. **Rate Limiting**: Implement on login endpoint
5. **Password**: Never log or display in console
6. **Session**: Cookies expire after 24 hours
7. **Middleware**: Protected routes enforced server-side

## Testing

### Test Cases

1. **Admin Login**
   - ✅ Valid credentials → redirect to /admin
   - ✅ Buyer credentials → error message
   - ❌ Invalid credentials → error

2. **Buyer Login**
   - ✅ Valid credentials → redirect to /buyer/dashboard
   - ✅ Admin credentials → error message
   - ❌ Invalid credentials → error

3. **Form Validation**
   - ❌ Empty email → error
   - ❌ Invalid email format → error
   - ❌ Empty password → error
   - ✅ Both valid → enable submit

4. **UI/UX**
   - ✅ Loading state shows spinner
   - ✅ Button disabled while loading
   - ✅ Errors display immediately
   - ✅ Mobile layout responsive

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+

## Performance

- Zero external fonts (uses system fonts)
- Minimal JavaScript (only validation)
- No heavy animations
- Optimized for LCP, FCP, CLS
- Tailwind CSS purged unused classes

## Troubleshooting

### Issue: Login not working

- Check API endpoint in `/lib/api/client.ts`
- Verify credentials in `/lib/constants/auth.ts`
- Check browser console for errors

### Issue: Styling looks off

- Clear cache: `npm run build`
- Rebuild Tailwind: `npm run dev`
- Check tailwind.config.ts for purge patterns

### Issue: Layout broken on mobile

- Verify viewport meta tag in layout
- Check responsive breakpoints (sm:, md:, lg:)
- Test in mobile device or emulator

## Future Enhancements

1. OAuth integration (Google, GitHub)
2. Two-factor authentication
3. Remember device option
4. Social login
5. Biometric authentication on mobile
6. Advanced password requirements
7. Login attempt history
8. Email verification

## Related Files

- Login pages: `/src/app/login/page.tsx`, `/src/app/(admin)/admin/login/page.tsx`, `/src/app/(buyer)/buyer/login/page.tsx`
- API route: `/src/app/api/auth/login/route.ts`
- Components: `/src/components/LoginComponents.tsx`
- Types: `/src/lib/types/index.ts`
- Constants: `/src/lib/constants/auth.ts`
- Middleware: `/src/middleware.ts`

import path from 'path';

// Uploads stored in public folder so they're served at /uploads/...
export const UPLOADS_BASE = path.join(process.cwd(), 'public', 'uploads');
export const UPLOADS_CATEGORIES = path.join(UPLOADS_BASE, 'categories');
export const UPLOADS_PRODUCTS = path.join(UPLOADS_BASE, 'products');
export const UPLOADS_CERTIFICATES = path.join(UPLOADS_BASE, 'certificates');

// Public URL base for serving
export const UPLOADS_PUBLIC_BASE = '/uploads';

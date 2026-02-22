/**
 * Static data re-exports.
 * Repositories use these; when switching to Prisma, repositories will use DB instead.
 */

import categoriesData from './categories.json';
import productsData from './products.json';
import certificatesData from './certificates.json';
import buyersData from './buyers.json';
import ordersData from './orders.json';
import inquiriesData from './inquiries.json';
import homepageSectionsData from './homepage-sections.json';

export const categories = categoriesData as import('@/lib/types').Category[];
export const products = productsData as import('@/lib/types').Product[];
export const certificates = certificatesData as import('@/lib/types').Certificate[];
export const buyers = buyersData as import('@/lib/types').Buyer[];
export const orders = ordersData as import('@/lib/types').Order[];
export const inquiries = inquiriesData as import('@/lib/types').Inquiry[];
export const homepageSections = homepageSectionsData as import('@/lib/types').HomepageSections;

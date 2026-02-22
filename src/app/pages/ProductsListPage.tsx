'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { GlassNavbar } from '../components/GlassNavbar';
import { GlassFooter } from '../components/GlassFooter';
import { useProducts } from '@/lib/hooks/use-api';

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400';

export function ProductsListPage() {
  const { data: products = [], error, loading } = useProducts();

  const list = Array.isArray(products) ? products : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
      <GlassNavbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-[#0B1F3F] mb-4">All Products</h1>
            <p className="text-xl text-gray-600">Browse our product catalog</p>
          </motion.div>
          {error && (
            <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">{error}</div>
          )}
          {loading && (
            <div className="text-center text-gray-600 py-12">Loading products...</div>
          )}
          {!loading && list.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {list.map((p: { id: string; name?: string; description?: string; images?: string[] }, i: number) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/products/${p.id}`}>
                    <div className="group backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={(p.images?.[0] && p.images[0].startsWith('http')) ? p.images[0] : (p.images?.[0] || PLACEHOLDER_IMG)}
                          alt={p.name ?? 'Product'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMG; }}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#0B1F3F] mb-2">{p.name ?? 'Product'}</h3>
                        <p className="text-gray-600 line-clamp-2">{p.description ?? ''}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
          {!loading && list.length === 0 && !error && (
            <div className="text-center py-16 text-gray-600">No products yet. Check categories for more.</div>
          )}
        </div>
      </div>
      <GlassFooter />
    </div>
  );
}

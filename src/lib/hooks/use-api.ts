"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api/client";
import { Category } from "../types";

export function useCategories() {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data || []);
        setLoading(false);
      });
  }, []);

  return { data, loading };
}

export function useCategory(id: string | null) {
  const [data, setData] =
    useState<Awaited<ReturnType<typeof api.get>>["data"]>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(!!id);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    setLoading(true);
    api.get<unknown>(`/api/categories/${id}`).then(({ data: d, error: e }) => {
      setData(d ?? null);
      setError(e ?? null);
      setLoading(false);
    });
  }, [id]);

  return { data, error, loading };
}

export function useProducts(categoryId?: string | null) {
  const [data, setData] =
    useState<Awaited<ReturnType<typeof api.get>>["data"]>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = categoryId
      ? `/api/products?categoryId=${encodeURIComponent(categoryId)}`
      : "/api/products";
    api.get<unknown[]>(url).then(({ data: d, error: e }) => {
      setData(d ?? null);
      setError(e ?? null);
      setLoading(false);
    });
  }, [categoryId]);

  return { data, error, loading };
}

export function useProduct(id: string | null) {
  const [data, setData] =
    useState<Awaited<ReturnType<typeof api.get>>["data"]>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(!!id);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    setLoading(true);
    api.get<unknown>(`/api/products/${id}`).then(({ data: d, error: e }) => {
      setData(d ?? null);
      setError(e ?? null);
      setLoading(false);
    });
  }, [id]);

  return { data, error, loading };
}

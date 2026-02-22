export const metadata = {
  title: 'Admin Panel | AvantaSphere',
  description: 'Manage categories, products, orders, and settings',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      {children}
    </div>
  );
}

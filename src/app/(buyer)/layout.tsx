export const metadata = {
  title: 'Buyer Portal | AvantaSphere',
  description: 'Manage your inquiries, orders, and profile',
};

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}

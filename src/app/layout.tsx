export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="w-full h-16 bg-gray-500">여기는 네비 영역으로 하려고</nav>
      {children}
    </section>
  );
}
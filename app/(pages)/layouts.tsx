export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav style={{ background: "#ddd", padding: 10 }}>🔗 Nav for Pages</nav>
      {children}
    </>
  );
}

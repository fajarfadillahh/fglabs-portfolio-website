export default function Layout({ children, className }) {
  return (
    <main
      className={`mx-auto min-h-screen max-w-[1440px] overflow-hidden bg-gray-950 ${className}`}
    >
      {children}
    </main>
  );
}

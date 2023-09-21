// import components
import Navbar from "@/components/Navbar";

export default function Layout({ children, className }) {
  return (
    <>
      <Navbar />

      <main
        className={`mx-auto min-h-screen max-w-[1440px] overflow-hidden bg-gray-950 ${className}`}
      >
        {children}
      </main>
    </>
  );
}

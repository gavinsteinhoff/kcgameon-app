import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="KCGameOn Logo"
              width={150}
              height={50}
            />
          </Link>
          <div className="flex space-x-4">
            <Link href="/about" className="text-gray-500 hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-gray-500 hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-primary">
              Contact
            </Link>
            <Link href="/events" className="text-gray-500 hover:text-primary">
              Events
            </Link>
          </div>
          <Link href="/login" className="text-primary font-bold">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

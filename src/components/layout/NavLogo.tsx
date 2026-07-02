import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logos/saadhana-logo.jpg"
        alt="Saadhana"
        width={180}
        height={60}
        priority
      />
    </Link>
  );
}
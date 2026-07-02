import Link from "next/link";
import { SITE } from "@/constants/site";

export default function NavMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-3">
      {SITE.navigation.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`rounded-full px-6 py-3 text-[16px] font-medium transition-all duration-300 ${
            item.label === "Home"
              ? "bg-violet-100 text-[#26124D]"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
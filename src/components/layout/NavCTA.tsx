import Link from "next/link";
import { SITE } from "@/constants/site";

export default function NavCTA() {
  return (
    <Link
      href={SITE.cta.href}
      className="
      rounded-full
      bg-[#26124D]
      px-8
      py-3.5
      text-sm
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:shadow-xl
      "
    >
      {SITE.cta.label}
    </Link>
  );
}
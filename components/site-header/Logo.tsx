import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label="Impact Health & Wellness — home"
    >
      <Image
        src="/images/impact-logo.png"
        alt="Impact Health & Wellness"
        width={620}
        height={199}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}

import Link from "next/link";

interface NavLinkProps {
  title: string;
  href: string;
  className?: string;
}

export default function NavLink({ title, href, className }: NavLinkProps) {
  return (
    <Link className={`navLink ${className}`} href={href ?? title}>
      {title}
    </Link>
  );
}

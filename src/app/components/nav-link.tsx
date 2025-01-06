import Link from "next/link";

interface NavLinkProps {
  title: string;
  href: string;
  className?: string;
}

export default function NavLink({ title, href }: NavLinkProps) {
  return (
    <Link className={"m-auto"} href={href ?? title}>
      {title}
    </Link>
  );
}

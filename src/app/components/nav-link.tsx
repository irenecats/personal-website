interface NavLinkProps {
  title: string;
  href?: string;
  className?: string;
}

export default function NavLink({ title, href }: NavLinkProps) {
  return (
    <a className={"m-auto"} href={href ?? title}>
      {title}
    </a>
  );
}

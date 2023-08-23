interface LinkButtonProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

export default function LinkButton({
  href,
  target = "_blank",
  children,
}: LinkButtonProps) {
  return (
    <li className="mx-2 my-1">
      <a
        href={href}
        target={target}
        className="rounded px-4 py-2 transition hover:bg-white hover:text-black"
      >
        {children}
      </a>
    </li>
  );
}

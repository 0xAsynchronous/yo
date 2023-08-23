import Link, { LinkProps } from "next/link";

interface CutLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function CutLink(props: CutLinkProps) {
  return (
    <Link
      {...props}
      className={`cut-shape cut-button mx-auto px-4 py-1 font-ambi uppercase text-white hover:bg-blue-700/80 active:bg-blue-700/70 ${props.className}`}
    >
      {props.children}
    </Link>
  );
}

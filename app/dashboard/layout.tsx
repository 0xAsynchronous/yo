import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="absolute inset-x-0 z-10 mx-auto w-full max-w-7xl space-y-8 px-4 uppercase">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

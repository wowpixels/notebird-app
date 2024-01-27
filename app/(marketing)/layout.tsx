import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40 dark:bg-[#1f1f1f]">{children}</main>
    </div>
  );
};

export default MarketingLayout;

import PoolCard from "./PoolCard";

export default function Dashboard() {
  return (
    <div className="space-y-16">
      <h1 className="text-center font-ambi text-2xl text-blue-700">
        Yield Pools
      </h1>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <PoolCard name="TOSHI/WETH" />
        <PoolCard name="TOSHI/WETH" />
        <PoolCard name="TOSHI/WETH" />
        <PoolCard name="TOSHI/WETH" />
        <PoolCard name="TOSHI/WETH" />
        <PoolCard name="TOSHI/WETH" />
        <PoolCard name="TOSHI/WETH" />
        <PoolCard name="TOSHI/WETH" />
      </div>
    </div>
  );
}

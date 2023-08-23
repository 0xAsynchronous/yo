import Image from "next/image";
import PoolCard from "./PoolCard";
import eth from "./eth.png";

interface SwapPageProps {
  name: string;
}

export default function SwapPage({ name }: SwapPageProps) {
  return (
    <div className="flex items-center space-x-8 font-sans">
      <section className="cut-shape cut-container space-y-12 p-12">
        <div className="flex items-center justify-between space-x-4">
          <label>
            <h1 className="flex items-center space-x-3 text-5xl font-bold">
              <Image
                src={eth}
                height={36}
                alt="Ethereum Logo"
                className="rounded-full"
              />
              <div>ETH</div>
            </h1>
            <Input type="number" placeholder="0.0" />
          </label>

          <div className="flex flex-col items-end space-y-4">
            <h3 className="text-2xl font-bold text-neutral-400">
              Balance: 0.1
            </h3>

            <div className="flex items-center space-x-2">
              <Button>25%</Button>
              <Button>50%</Button>
              <Button>75%</Button>
              <Button>100%</Button>
            </div>
          </div>
        </div>

        <div className="mx-auto h-0 w-4/5 border border-blue-700/50" />

        <div className="flex items-center justify-between space-x-4">
          <label>
            <h3 className="text-2xl font-bold text-neutral-400">
              Farm Duration
            </h3>
            <Input type="number" placeholder="0 h" />
          </label>

          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-2">
              <Button>1 h</Button>
              <Button>6 h</Button>
              <Button>12 h</Button>
              <Button>24 h</Button>
            </div>
            <Button className="w-full uppercase">Until I Cancel</Button>
          </div>
        </div>

        <div className="mx-auto h-0 w-4/5 border border-blue-700/50" />

        <div className="flex justify-center">
          <button className="cut-shape cut-button px-4 py-1 font-ambi uppercase hover:bg-blue-700/80 active:bg-blue-700/70">
            Confirm
          </button>
        </div>
      </section>

      <div className="w-72 space-y-8">
        <PoolCard name={name} disabled />

        <section className="cut-shape cut-container p-4 text-lg">
          <h4 className="text-center font-bold">Strategy Info</h4>
          <ol className="pl-6 text-neutral-200">
            <li>
              <span className="absolute -ml-4">1.</span>You deposit ETH
            </li>
            <li>
              <span className="absolute -ml-4">2.</span>We bridge it over to
              BASE chaine
            </li>
            <li>
              <span className="absolute -ml-4">3.</span>We convert half of the
              ETH into TOSHI and half into WETH
            </li>
            <li>
              <span className="absolute -ml-4">4.</span>We deposit TOSHI/ETH
              into the pool and collect yield for you
            </li>
            <li>
              <span className="absolute -ml-4">5.</span>When you withdraw, we
              bridge back to mainnet and you receiv mainnet ETH
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`cut-shape px-3 text-xl hover:opacity-80 active:opacity-70 ${props.className}`}
    >
      {props.children}
    </button>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`-ml-2 rounded bg-transparent px-2 text-4xl font-bold text-neutral-400 ${props.className}`}
    />
  );
}

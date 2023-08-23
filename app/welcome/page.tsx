import CutLink from "../reusable/CutLink";
import { IoMdArrowForward } from "react-icons/io";
import { BiKey, BiWallet } from "react-icons/bi";

export default function Welcome() {
  return (
    <main className="absolute left-1/2 top-1/2 z-10 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <h1 className="cut-shape cut-title absolute inset-x-0 -top-6 z-10 mx-auto w-min px-8 py-1 font-ambi text-3xl uppercase text-white">
          Welcome!
        </h1>

        <div className="cut-shape cut-container w-full space-y-6 bg-blue-800/50 pb-8 pt-16">
          <div className="relative grid grid-cols-2 gap-4 font-sans text-lg text-neutral-300">
            <section className="space-y-8 px-12">
              <p>We{"'"}ve created a wallet for you to get started.</p>

              <div>
                <h3 className="font-bold text-white">
                  <BiWallet className="mr-2 inline-block" />
                  <span>Wallet Address</span>
                </h3>
                <p>0x1234567890</p>
              </div>

              <div>
                <h3 className="font-bold text-white">
                  <BiKey className="mr-2 inline-block" />
                  <span>Private Key</span>
                </h3>
                <p>0x1234567890</p>
              </div>

              <div className="absolute bottom-0">
                <CutLink
                  href="/dashboard"
                  className="flex items-center space-x-3"
                >
                  <span>Next</span>
                  <IoMdArrowForward className="text-xl" />
                </CutLink>
              </div>
            </section>

            <div className="absolute inset-x-0 mx-auto h-full w-0 border-x border-blue-700/80" />

            <section className="px-12">
              <ol className="space-y-4">
                <li>
                  <span className="absolute -ml-4 text-white">1.</span>
                  <span className="font-bold text-white">
                    Security First:
                  </span>{" "}
                  Your private key is like the password to your bank account.
                  Never share it with anyone, and always keep it secure.
                </li>
                <li>
                  <span className="absolute -ml-4 text-white">2.</span>
                  <span className="font-bold text-white">
                    Trust but Verify:
                  </span>{" "}
                  Ensure you{"'"}re always on our official website and not a
                  phishing site. Always double-check the URL.
                </li>
                <li>
                  <span className="absolute -ml-4 text-white">3.</span>
                  <span className="font-bold text-white">
                    Automatic Transactions:
                  </span>{" "}
                  By using our service, you authorize us to execute transactions
                  on your behalf. We aim to optimize returns for you, but always
                  monitor your investments and be aware of the associated risks.
                </li>
                <li>
                  <span className="absolute -ml-4 text-white">4.</span>
                  <span className="font-bold text-white">
                    Risk Awareness:
                  </span>{" "}
                  Cryptocurrencies and yield farming come with inherent risks.
                  Ensure you understand these risks before depositing funds.
                </li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

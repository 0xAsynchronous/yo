import Image from "next/image";
import logo from "./logo.svg";
import LinkButton from "./LinkButton";
import CutLink from "./reusable/CutLink";

const TWITTER_URL = "https://www.twitter.com/yieldoptimizor/";
const TELEGRAM_URL = "https://www.t.me/yieldoptimizor/";
const WAITLIST_URL = "https://forms.gle/h6ujNbMH78SaJ8QbA/";

export default function Home() {
  return (
    <main className="absolute left-1/2 top-1/2 max-w-xl -translate-x-1/2 -translate-y-1/2 space-y-6 text-center uppercase text-blue-700">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="Logo"
        priority
        className="mx-auto"
      />

      <h2>人工知能</h2>

      <h1 className="text-3xl">Yield Optimizor</h1>

      <div className="py-8 text-sm md:text-base">
        Join the waitlist. New Bot.
        <br />
        Best Yields. One Click.
      </div>

      <ul className="flex flex-wrap justify-center text-xs md:text-sm">
        <LinkButton href={TWITTER_URL}>/Twitter</LinkButton>
        <LinkButton href={TELEGRAM_URL}>/Telegram</LinkButton>
        <LinkButton href={WAITLIST_URL}>/Waitlist</LinkButton>
        <LinkButton href="/" target="_self">
          /????????
        </LinkButton>
        <LinkButton href="/" target="_self">
          /????????
        </LinkButton>
      </ul>

      <div className="pt-8">
        <CutLink href="/welcome">Launch App</CutLink>
      </div>
    </main>
  );
}

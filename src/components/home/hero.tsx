import GradientText from "../common/GradientText";
import HeroBackground from "./hero-background";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">

      <HeroBackground />

      <div className="mx-auto max-w-6xl text-center">

        <div
          className="
          inline-flex
          rounded-full
          border
          border-violet-200
          px-6
          py-2
          text-sm
          font-medium
          text-violet-700
          "
        >
          ✨ LEARN • GROW • ACHIEVE • LEAD
        </div>

        <h1
          className="
          mt-10
          text-7xl
          font-extrabold
          leading-tight
          tracking-tight
          "
        >
          Building{" "}
          <GradientText>
            Future-Ready
          </GradientText>

          <br />

          Talent for an AI-Driven World
        </h1>

        <p
          className="
          mx-auto
          mt-8
          max-w-3xl
          text-xl
          leading-9
          text-gray-600
          "
        >
          We reimagine Human Capital Management through AI,
          helping institutions, enterprises and professionals
          prepare for tomorrow's workforce.
        </p>

        <div className="mt-12 flex justify-center gap-8">

          <button
            className="
            rounded-full
            bg-[#26124D]
            px-10
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
            "
          >
            Explore Solutions
          </button>

          <button
            className="
            rounded-full
            border
            px-10
            py-4
            font-semibold
            hover:bg-gray-100
            "
          >
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}
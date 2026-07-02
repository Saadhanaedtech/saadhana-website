export default function HeroBackground() {
  return (
    <>
      <div
        className="
        absolute
        left-1/2
        top-40
        -z-10
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-violet-300/40
        blur-[130px]
        "
      />

      <div
        className="
        absolute
        right-20
        top-64
        -z-10
        h-[250px]
        w-[250px]
        rounded-full
        bg-orange-300/30
        blur-[120px]
        "
      />
    </>
  );
}
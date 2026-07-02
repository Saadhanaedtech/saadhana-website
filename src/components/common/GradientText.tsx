interface GradientTextProps {
  children: React.ReactNode;
}

export default function GradientText({
  children,
}: GradientTextProps) {
  return (
    <span
      className="
      bg-gradient-to-r
      from-violet-700
      via-fuchsia-600
      to-orange-500
      bg-clip-text
      text-transparent
      "
    >
      {children}
    </span>
  );
}
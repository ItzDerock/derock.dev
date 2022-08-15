export function OutsideLink({
  to,
  children,
  color = "text-violet-500",
}: {
  to: string;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <a
      href={to}
      className={"underline decoration-dotted underline-offset-2 " + color}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

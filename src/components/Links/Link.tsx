import NextLink from 'next/link'

export function Link({
  to,
  children,
  color = "text-violet-400",
}: {
  to: string;
  children: React.ReactNode;
  color?: string;
}) {
  if(to.startsWith('/')) {
    return (
      <NextLink 
        href={to}
      >
        <a className={"underline decoration-dotted underline-offset-2 transition-colors " + color} >
          {children}
        </a>
      </NextLink>
    )
  }

  return (
    <a
      href={to}
      className={"underline decoration-dotted underline-offset-2 transition-colors " + color}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

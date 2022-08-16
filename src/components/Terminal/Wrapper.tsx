export function TerminalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-terminal m-5 text-sm overflow-x-auto sm:overflow-auto lg:max-w-screen-2xl mx-auto pb-4">
      {children}
    </main>
  );
}
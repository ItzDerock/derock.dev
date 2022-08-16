import { TerminalPrompt } from "./Prompt";

type CommandProps = {
  input: string;
  title?: string;
  children: React.ReactNode;
  animationIndex?: number;
}

export default function Command(props: CommandProps) {
  return (
    <article className="float-in" style={{ animationDelay: ((props.animationIndex ?? 1) * 150) + 'ms' }}>
      <TerminalPrompt command={props.input} title={props.title} />
      <div className="text-white ml-6 my-2">
        {props.children}
      </div>
    </article>
  )
}
import { TerminalPrompt } from "./Prompt";

type CommandProps = {
  input: string;
  title: string;
  children: React.ReactNode;
}

export default function Command(props: CommandProps) {
  return (
    <section>
      <TerminalPrompt command={props.input} title={props.title} />
      <div className="text-white ml-6 my-2">
        {props.children}
      </div>
    </section>
  )
}
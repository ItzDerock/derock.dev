import { Fragment, useEffect, useState } from "react";
import { useHover } from "../../hooks/Hover";
import useMobile from "../../hooks/Mobile";

export function TerminalPrompt(props: { command: string, title: string }) {
  const [dots, setDots] = useState(".");
  const [isHovering, hoverProps] = useHover();
  const [command, setCommand] = useState(props.command);

  console.log(hoverProps)
  
  const mobile = useMobile();

  useEffect(() => {
    const update = () => {
      setDots(".".repeat(window.innerWidth));
    };

    // create dots
    update();

    // listen for resize
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);

  }, [command.length]);

  useEffect(() => {
    if(isHovering) {
      setCommand(props.title);
    } else {
      setCommand(props.command);
    }
  }, [isHovering]);

  return (
    <div className="flex whitespace-nowrap gap-3">
      <div className="float-left w-fit">

        {
          mobile ? (
            <Fragment>
              <span className="text-prompt">$</span>{" "}
              <span className="text-white" {...hoverProps}>{command}</span> {"  "}
            </Fragment>
          ) : (
            <Fragment>
              <span className="text-prompt">[derock@derock.dev</span>{" "}
              <span className="text-white">~</span>
              <span className="text-prompt">]$</span>{" "}
              <span className="text-white">{command}</span> {"  "}
            </Fragment>
          )
        }

      </div>
        
      <div className="grow overflow-hidden">
        <span className="text-secondary">
          #{dots}
        </span>
      </div>
      
      <div className="float-right w-fit">
        <span className="text-gray-400">{props.title}</span>
      </div>
    </div>
  )
}
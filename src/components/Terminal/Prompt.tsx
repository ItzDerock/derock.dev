import { Fragment, useEffect, useState } from "react";
import useMobile from "../../hooks/Mobile";

export function TerminalPrompt({ command, title }: { command: string, title: string }) {
  const [dots, setDots] = useState(".");
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

  }, [command.length, title.length]);

  return (
    <div className="flex whitespace-nowrap gap-3">
      <div className="float-left w-fit">

        {
          mobile ? (
            <Fragment>
              <span className="text-prompt">$</span>{" "}
              <span className="text-white">{command}</span> {"  "}
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
        <span className="text-secondary">{title}</span>
      </div>
    </div>
  )
}
import { Fragment, useEffect, useRef, useState } from "react";
import { useHover } from "../../hooks/Hover";
import useMobile from "../../hooks/Mobile";

export function TerminalPrompt(props: { command: string, title: string }) {
  const [dots, setDots] = useState(".");
  const [isHovering, hoverProps] = useHover();
  const [command, setCommand] = useState(props.command);
  const [title, setTitle] = useState(props.title);
  const ref = useRef<HTMLDivElement>(null);
  
  const mobile = useMobile();

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash);
    
    if(hash === "#" + props.title) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [props.title]);

  useEffect(() => {
    if(title === "Link Copied!") {
      const timeout = setTimeout(() => {
        setTitle(props.title);
      }, 2000);

      return () => clearTimeout(timeout);
    };

  }, [title, props.title]);

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
  }, [isHovering, props.title, props.command]);

  return (
    <div className="flex whitespace-nowrap gap-3" ref={ref}>
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
        <span className="text-dots">
          #{dots}
        </span>
      </div>
      
      <div className="float-right w-fit">
        <span className="text-gray-400 hover:cursor-pointer" onClick={() => {
          window.location.hash = ("#" + props.title);

          // copy new url to clipboard
          navigator.clipboard.writeText(window.location.href);

          setTitle("Link Copied!");
        }}>
          {title}
        </span>
      </div>
    </div>
  )
}
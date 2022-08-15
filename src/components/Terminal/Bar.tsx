import { Fragment } from "react";

type TerminalBarProps = {
  data: {
    title: string,
    percent: number
  }[]
}

function createBar(outOfTwenty: number) {
  // [=======>............]
  const bar = Array(outOfTwenty).fill("=");
  const empty = Array(20 - outOfTwenty).fill(".");
  const fullBar = bar.concat(empty);

  if(outOfTwenty != 20) fullBar[outOfTwenty - 1] = ">";

  return fullBar.join("");
}

export function TerminalBars(props: TerminalBarProps) {
  const textPadding = Math.max(...props.data.map(d => d.title.length)) + 1;
  
  return (
    <Fragment>
      {
        props.data.map((d, i) => (
          <p key={i}>
            <span className="whitespace-pre">
              {d.title.padEnd(textPadding, " ")}
            </span>

            <span>[
              {createBar(d.percent * 2)}
            ]</span>

            {" "}
            
            {
              d.percent === 10 ?
                <span className="text-primary">Proficient</span>
              : d.percent > 6 ?
                <span className="text-prompt">Production Ready</span>
              : <span className="text-arch">Learning</span>
            }
          </p>
        ))
      }
    </Fragment>
  )
}
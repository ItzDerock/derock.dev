import { OutsideLink } from "../Links/OutsideLink";

export const Positions = {
  Founder: ["text-primary", 'Founder'],
  CoFounder: ["text-primary", "Co-Founder"],
  Intern: ["text-prompt", "Intern"],
} as const;


type TreeEntityProps = {
  title: string;
  link?: string;
  position: keyof typeof Positions;
  startDate: string;
  endDate?: string;
  children: React.ReactNode
}

function getFormattedDate(date: Date) {
  // return MM/DD/YYYY
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
}

export default function TreeEntity(props: TreeEntityProps) {
  const positionData = Positions[props.position];
  const startDate = new Date(props.startDate);

  return (
    <div className="h-fit">
      <p className="whitespace-pre">
        {
          props.link ? <OutsideLink to={props.link}>{props.title}</OutsideLink>
          : <span className="text-arch underline underline-offset-2">{props.title}</span>
        }
      </p>

      <ul className="tree-list ml-10">
        <li>
          {/* Position */}
          <span className={positionData[0]}>{positionData[1]}</span>
        </li>
        <li>
          {/* Date */}
          <span className="text-arch">{getFormattedDate(startDate)} -</span>{" "}
          <span className={props.endDate ? "text-arch" : "text-prompt"}>{
            props.endDate ? getFormattedDate(new Date(props.endDate)) : "Present"
          }</span>
        </li>
        <li>
          {/* Description */}
          {props.children}
        </li>
      </ul>
    </div>
  )
}
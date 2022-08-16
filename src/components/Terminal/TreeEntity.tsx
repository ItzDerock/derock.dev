import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../Links/Link";

export const Positions = {
  Founder: ["text-primary", 'Founder'],
  CoFounder: ["text-primary", "Co-Founder"],
  Intern: ["text-prompt", "Intern"],
} as const;


type TreeEntityProps = {
  title: string;
  link?: string;
  position?: keyof typeof Positions;
  startDate?: string;
  endDate?: string;
  children: React.ReactNode
  icon?: IconDefinition;
  stats?: React.ReactNode
}

function getFormattedDate(date: Date) {
  // return MM/DD/YYYY
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
}

export default function TreeEntity(props: TreeEntityProps) {
  const positionData = props.position ? Positions[props.position] : undefined;

  return (
    <div className="h-fit">
      <p className="whitespace-pre">
        {
          props.icon ? (
            <FontAwesomeIcon icon={props.icon} className="mr-2" size="sm" />
          ) : null
        }
        {
          props.link ?
            <Link to={props.link}>{props.title}</Link>
            : <span className="text-arch underline underline-offset-2">{props.title}</span>
        }
      </p>

      <ul className="tree-list ml-8">
        {
          props.position ? (
            <li>
              {/* Position */}
              <span className={positionData![0]}>{positionData![1]}</span>
            </li>
          ) : null
        }
        {
          props.stats ? (
            <li>{props.stats}</li>
          ) : null
        }
        {
          props.startDate ? (
            <li>
              {/* Date */}
              <span className="text-arch">{getFormattedDate(new Date(props.startDate))} -</span>{" "}
              <span className={props.endDate ? "text-arch" : "text-prompt"}>{
                props.endDate ? getFormattedDate(new Date(props.endDate)) : "Present"
              }</span>
            </li>
          ) : null
        }
        <li>
          {/* Description */}
          {props.children}
        </li>
      </ul>
    </div>
  )
}
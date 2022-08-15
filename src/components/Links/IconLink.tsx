import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type FontAwesomeLinkProps = {
    to: string;
    icon: IconProp;
    size?: SizeProp;
    className?: string;
    tooltip?: string;
}

export function FontAwesomeLink(props: FontAwesomeLinkProps) {
    return (
        <a href={props.to} title={props.tooltip}>
            <FontAwesomeIcon 
                icon={props.icon} 
                size={props.size} 
                className={props.className ?? "h-5 duration-100 hover:scale-105"}
            />
        </a>
    )
}
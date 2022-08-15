import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTime } from "../hooks/Time";
import { FontAwesomeLink } from "./Links/IconLink";

export function Header() {
  const time = useTime(5000);

  return (
    <header>
      <div className="grid grid-cols-3 gap-3 px-3 bg-secondary font-header">
        <div className="col-start-1 col-span-1 text-left text-white">
          <div className="flex items-center h-full gap-3">
            <FontAwesomeLink
              icon={faDiscord}
              to="https://discord.com"
              tooltip="Discord Server"
            />
            <FontAwesomeLink
              icon={faGithub}
              to="https://github.com/ItzDerock"
              tooltip="Github"
            />
            <FontAwesomeLink
              icon={faEnvelope}
              to="mailto:derock@derock.dev"
              tooltip="Email"
            />
          </div>
        </div>
        <div className="col-start-2 col-span-1 text-center text-white items-center">
          <p className="border-b-2 duration-200 hover:px-4 hover:cursor-pointer px-1 m-auto w-fit border-primary text-primary">
            <a href="https://derock.dev">derock.dev</a>
          </p>
        </div>
        <div className="col-start-3 col-span-1 text-right text-white">
          <h1>
            {
              // time in 24-hour format HH:MM
              time.getHours().toString().padStart(2, "0") + ":" + time.getMinutes().toString().padStart(2, "0")
            }
          </h1>
        </div>
      </div>
    </header>
  );
}

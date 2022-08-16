import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useTime } from "../hooks/Time";
import { FontAwesomeLink } from "./Links/IconLink";
import Navbar from "./Navbar/Navbar";

export function Header() {
  const time = useTime(5000);

  return (
    <header>
      <div className="grid grid-cols-3 gap-3 px-2 bg-header font-header">
        <div className="col-start-1 col-span-1 text-left text-white items-center">
          <Navbar />
        </div>
        <div className="col-start-2 col-span-1 text-center text-white items-center">
          <p className="border-b-2 duration-200 hover:px-4 hover:cursor-pointer px-1 m-auto w-fit border-primary text-primary box-content">
            <Link href="/">derock.dev</Link>
          </p>
        </div>
        <div className="col-start-3 col-span-1 text-right text-white">
          <div className="flex items-center gap-3 text-right h-full w-fit float-right ">
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

            <span className="text-dots hidden md:inline-block"> | </span>

            <h1 className="hidden md:inline-block">
              {
                // time in 24-hour format HH:MM
                time.getHours().toString().padStart(2, "0") + ":" + time.getMinutes().toString().padStart(2, "0")
              }
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Fragment } from "react";
import { useTime } from "../hooks/Time";
import { FontAwesomeLink } from "./Links/IconLink";
import { NavbarElement } from "./Navbar/NavbarElement";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Reviews",
    href: "/reviews",
  }
];

export function Header() {
  const time = useTime(5000);

  return (
    <header>
      <div className="grid grid-cols-3 gap-3 px-1 bg-header font-header">
        <div className="col-start-1 col-span-1 text-left text-white items-center">
          {/* navbar */}
          {
            pages.map(({ name, href }, i) => (
              i === pages.length - 1 ? (
                <NavbarElement key={i} name={name} link={href} />
              ) : (
                <Fragment>
                  <NavbarElement key={i} name={name} link={href} />
                  <span className="text-dots">|</span>
                </Fragment>
              )
            ))
          }

        </div>
        <div className="col-start-2 col-span-1 text-center text-white items-center">
          <p className="border-b-2 duration-200 hover:px-4 hover:cursor-pointer px-1 m-auto w-fit border-primary text-primary">
            <Link href="/">derock.dev</Link>
          </p>
        </div>
        <div className="col-start-3 col-span-1 text-right text-white">
          <div className="flex items-center h-full gap-3 text-right w-fit float-right pr-2">
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

            <span className="text-dots"> | </span>

            <h1>
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

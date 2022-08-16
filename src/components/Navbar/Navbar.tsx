import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import { NavbarElement } from "./NavbarElement";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Reviews",
    href: "/reviews",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {/* navbar desktop */}
      <div className="hidden md:inline-block">
        {pages.map(({ name, href }, i) =>
          i === pages.length - 1 ? (
            <NavbarElement key={i} name={name} link={href} />
          ) : (
            <Fragment key={i}>
              <NavbarElement key={i} name={name} link={href} />
              <span className="text-dots">|</span>
            </Fragment>
          )
        )}
      </div>

      {/* navbar mobile */}
      <div className="md:hidden inline-block align-middle h-full w-fit">
        <FontAwesomeIcon
          icon={faBars}
          className={
            "my-auto align-middle hover:cursor-pointer transition-transform" +
            (isOpen ? " rotate-90" : "")
          }
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-header z-10 bg-opacity-40 fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div className="grid grid-cols-1 gap-3 px-1 bg-header font-header py-2">
            {pages.map(({ name, href }, i) => (
              <NavbarElement key={i} name={name} link={href} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
}

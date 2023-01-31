import { createEffect, createSignal } from "solid-js";
import { A, useLocation } from "solid-start"

export default function Navbar() {
  return (
    <nav class="flex flex-row text-secondary-100 [&>*:hover]:text-white [&>*]:border-r-line [&>*]:cursor-pointer [&>*]:p-3 [&>*]:box-border [&>*]:border-r border-b border-line">
      <p class="hidden sm:block">
        derock.dev
      </p>
      
      <NavbarElement
        href="/"
        title="Home"
      />
      <NavbarElement
        href="/projects"
        title="Projects"
      />
      <a
        href="https://derock.blog"
      >
        Blog
      </a>

      <span class="flex-grow"></span>
      <A class="border-none" href="/contact">contact-me</A>
    </nav>
  )
}

const createClasses = (isActive: boolean) => isActive 
  ? "text-white border-b-2 border-b-accent-100"
  : "text-secondary-100"

function NavbarElement(props: {
  href: string,
  title: string,
  class?: string
}) {
  const location = useLocation();
  const [className, setClassName] = createSignal<string>(
    createClasses(location.pathname === props.href)
  );

  createEffect(() => {
    setClassName(
      createClasses(location.pathname === props.href)
    );
  });

  return (
    <A class={className()} href={props.href}>
      {props.title}
    </A>
  )
}
import { OutsideLink } from "../components/Links/OutsideLink";

export default function Discord() {
  if(typeof window !== "undefined") {
    window.location.href = "https://discord.gg/NqqtkS7ekj";
  }

  return (
    <p>Redirecting to discord... click <OutsideLink to="https://discord.gg/NqqtkS7ekj">here</OutsideLink> if you are not redirected automatically.</p>
  )
}
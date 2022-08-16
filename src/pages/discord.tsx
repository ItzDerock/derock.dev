import { Link } from "../components/Links/Link";

export default function Discord() {
  if(typeof window !== "undefined") {
    window.location.href = "https://discord.gg/NqqtkS7ekj";
  }

  return (
    <p>Redirecting to discord... click <Link to="https://discord.gg/NqqtkS7ekj">here</Link> if you are not redirected automatically.</p>
  )
}
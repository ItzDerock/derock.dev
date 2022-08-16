import Link from "next/link";
import { useRouter } from "next/router";

export function NavbarElement({ name, link }: { name: string, link: string }) {
  const router = useRouter();
  const isActive = router.pathname === link;
  
  return (
    <div className={
      (isActive ? "text-primary bg-slate-600 border-primary border-b-2" : "")
      + " inline-block px-2 md:px-5"
    }>
      <Link href={link}>{name}</Link>
    </div>
  )
}
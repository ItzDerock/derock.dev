// // solid icons doesnt like ssr for some reason, so gotta make these functions:
// import type { IconTypes } from "solid-icons";
// import { unstable_clientOnly } from "solid-start";

// export function importSiSolidIcons(icon: string): IconTypes {
//   return unstable_clientOnly(() => import("solid-icons/si").then((m) => ({ default: m[icon] }) as any));
// }

// export function importFaSolidIcons(icon: string): IconTypes {
//   return unstable_clientOnly(() => import("solid-icons/fa").then((m) => ({ default: m[icon] }) as any));
// }

// export function importIoSolidIcons(icon: string): IconTypes {
//   return unstable_clientOnly(() => import("solid-icons/io").then((m) => ({ default: m[icon] }) as any));
// }
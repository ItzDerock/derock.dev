import { onMount } from "solid-js";

/**
 * Circle with radial gradient background that follows the mouse cursor.
 */
export function MouseFollow() {
  let mouseDiv!: HTMLDivElement;

  onMount(() => {
    const onMouseMove = (e: MouseEvent) => {
      // center the circle on the mouse cursor
      mouseDiv.style.left = e.clientX - mouseDiv.offsetWidth / 2 + "px";
      mouseDiv.style.top = e.clientY - mouseDiv.offsetHeight / 2 + "px";
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  });

  return (
    <div
      ref={mouseDiv}
      class="fixed size-80 rounded-full pointer-events-none -z-20"
      style={{
        // center #1F2937 ----> radius #1F2937 at 0%
        background:
          "radial-gradient(circle at 50% 50%, rgba(31, 41, 55, 0.6) 0%, rgba(0, 188, 212, 0) 80%)",
      }}
    ></div>
  );
}

// import { unstable_clientOnly } from "solid-start";

import { SiArchlinux, SiCplusplus, SiCss3, SiDebian, SiDocker, SiHtml5, SiJavascript, SiLinux, SiMongodb, SiNextdotjs, SiNginx, SiPostgresql, SiPython, SiReact, SiSolid, SiTailwindcss, SiTypescript, SiUbuntu } from "solid-icons/si";
import { FaBrandsJava } from "solid-icons/fa";

import { Suspense, For, onMount, onCleanup } from "solid-js";
import styles from './language-slider.module.css';

// import using unstable_clientOnly to prevent the Swiper from being rendered on the server
// for some reason, swiper doesn't like solid-start's SSR
// const Swiper = unstable_clientOnly(() => import("swiper/solid").then((m) => ({ default: m.Swiper })));
// const SwiperSlide = unstable_clientOnly(() => import("swiper/solid").then((m) => ({ default: m.SwiperSlide })));
// import { Swiper, SwiperSlide } from "swiper/solid";

import { Swiper, Autoplay } from "swiper";
import type { IconTypes } from "solid-icons";

import 'swiper/css';
import 'swiper/css/autoplay';

export default function HomeLanguageSlider() {
  const SLIDER_ELEMENTS: [IconTypes, string][] = [
    [SiPython, "Python"], 
    [SiCplusplus, "C++"],
    [FaBrandsJava, "Java"],
    [SiHtml5, "HTML"],
    [SiCss3, "CSS"],
    [SiJavascript, "JavaScript"],
    [SiTypescript, "TypeScript"],
    [SiReact, "React"],
    [SiSolid, "Solid"],
    [SiTailwindcss, "TailwindCSS"],
    [SiNextdotjs, "NextJS"],
    [SiMongodb, "MongoDB"],
    [SiPostgresql, "PostgreSQL"],
    [SiDocker, "Docker"],
    [SiLinux, "Linux"],
    [SiArchlinux, "Arch Linux"],
    [SiDebian, "Debian"],
    [SiUbuntu, "Ubuntu"],
    [SiNginx, "Nginx"],
  ];

  onMount(() => {
    const swiper = new Swiper(".lang-swiper", {
      modules: [Autoplay],
            // class: "swiper",
      spaceBetween: 50,
      direction: "horizontal",
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      grabCursor: true,
      loop: true,
      speed: 2500,
      initialSlide: 0,
      centeredSlides: true,
      
      slidesPerView: 4,

      breakpoints: {
        768: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 8,
        },
        1280: {
          slidesPerView: 10,
        },
        1536: {
          slidesPerView: 12,
        },
        2048: {
          slidesPerView: 14,
        },
        2560: { // ultrawide
          slidesPerView: 18,
        }
      }
    });

    onCleanup(() => {
      swiper.destroy();
    });
  })

  return (
    <section>
      <div class="mx-auto min-h-[5rem] w-full bg-background bg-opacity-60 py-5 shadow-snakeGameWindow">
        <Suspense>
          <div class="lang-swiper swiper">
            <div class="swiper-wrapper">
              <For each={SLIDER_ELEMENTS}>
                {([Icon, text]) => (
                  <div class={styles["language-slider-element"] + " !w-20 !h-20 swiper-slide"}>
                    <div>
                      <h1 class="h-fit w-fit m-auto max-w-full break-words text-white font-bold">{text}</h1>
                    </div>
                    <Icon class="fill-slate-600 hover:fill-slate-500 transition-colors" />
                  </div>
                )}
              </For>
            </div>
          </div>
        </Suspense>
      </div>
    </section>
  )
}
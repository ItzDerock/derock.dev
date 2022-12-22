import { IoMail } from "solid-icons/io";
import { SiDevdotto, SiDiscord, SiGithub, SiTwitter } from "solid-icons/si";
import { createSignal } from "solid-js";

// import { importSiSolidIcons } from "~/utils/icons";
// const SiDevdotto = importSiSolidIcons("SiDevdotto");
// const SiDiscord = importSiSolidIcons("SiDiscord");
// const SiGithub = importSiSolidIcons("SiGithub");
// const SiTwitter = importSiSolidIcons("SiTwitter");
// const IoMail = importSiSolidIcons("IoMail");

export default function Contact() {
  const [subject, setSubject] = createSignal("");
  const [body, setBody] = createSignal("");

  return (
    <section class="m-4 xl:m-24">
      <h2 class="text-white text-2xl mt-4 text-center">
        {">"} Contact Me <span class="animate-phone-ring inline-block">📞</span>
      </h2>

      <div class="flex flex-row flex-wrap gap-6 mx-auto">
        <div class="flex-grow">
          {/* subject */}
          <div class="flex flex-col space-y-2 mt-4">
            <label class="text-accent-200" for="subject">
              Subject
            </label>
            <input
              class="bg-background text-white border-line border p-2 rounded-md"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              onInput={(e) => setSubject(e.currentTarget.value)}
            />
          </div>

          {/* body */}
          <div class="flex flex-col space-y-2 mt-4">
            <label class="text-accent-200" for="body">
              Body
            </label>
            <textarea
              class="bg-background border-line border text-white p-2 rounded-md"
              id="body"
              name="body"
              placeholder="Body"
              rows={8}
              onInput={(e) => setBody(e.currentTarget.value)}
            />
          </div>

          {/* submit */}
          <div class="flex flex-col space-y-2 mt-4">
            <a
              class="bg-accent-200 text-white p-2 rounded-md hover:-translate-y-1 duration-500 transition-all mx-auto"
              // type="submit"
              href={`mailto:derock@derock.dev?subject=${encodeURIComponent(subject())}&body=${encodeURIComponent(body())}`}
            >
              <IoMail class="inline-block" /> Email
            </a>
          </div>
        </div>

        {/* divider  */}
        <div class="flex flex-col w-fit p-4">
          <div class="mx-auto w-1 border-dotted border-r border-r-line flex-grow"></div>
          <p class="text-accent-200 text-center my-1">or</p>
          <div class="mx-auto w-1 border-dotted border-r border-r-line flex-grow"></div>
        </div>

        {/* social buttons */}
        <div class="flex flex-col space-y-2 mt-4 w-64 align-middle justify-center [&>*]:w-full text-center flex-grow">
          <a class="bg-background border-line border text-white p-2 rounded-md hover:-translate-y-1 duration-500 transition-all mx-auto" href="/discord">
            <SiDiscord class="inline-block" /> Discord
          </a>
          <a class="bg-background border-line border text-white p-2 rounded-md hover:-translate-y-1 duration-500 transition-all mx-auto" href="https://github.com/ItzDerock">
            <SiGithub class="inline-block" /> GitHub
          </a>
          <a class="bg-background border-line border text-white p-2 rounded-md hover:-translate-y-1 duration-500 transition-all mx-auto" href="https://twitter.com/DerockGamer">
            <SiTwitter class="inline-block" /> Twitter
          </a>
          <a class="bg-background border-line border text-white p-2 rounded-md hover:-translate-y-1 duration-500 transition-all mx-auto" href="https://dev.to/derock">
            <SiDevdotto class="inline-block" /> Dev.to
          </a>
        </div>
      </div>

    </section>
  )
}
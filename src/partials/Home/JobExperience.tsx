import { IoServer } from "solid-icons/io";
import {
  SiFiles,
  SiNodedotjs,
  SiOpenzfs,
  SiPython,
  SiPytorch,
  SiReact,
  SiTensorflow,
  SiUbuntu,
} from "solid-icons/si";

import JobExpEntry from "~/components/JobExpEntry";

export default function JobExperience() {
  return (
    <section class="m-4 xl:m-24">
      <h2 class="text-white text-2xl my-4 text-center">
        {">"} Job Experience <span class="animate-pulse inline-block">✨</span>
      </h2>

      {/* vertical timeline style */}
      <div class="flex flex-row">
        <div class="grid grid-cols-4">
          <JobExpEntry
            company="Freelance Developer"
            href="mailto:derock@derock.dev"
            description="I'm currently working as a freelance developer doing random projects for people. If you are interested in commissioning me, scroll down to the contact section."
            type="first"
          />

          <JobExpEntry
            company="InfoBeyond Technology LLC"
            position="Intern"
            date="05/15/2022 - 08/15/2022"
            href="https://infobeyondtech.com/"
            description="A summer internship I took where, with a team, we built, racked, and setup a multi-GPU 2U server for image processing. I then worked on adapting and traning different GAN (Generative Adversarial Network) and YOLO (You only look once) models for enhanced object detection."
            techUsed={[
              {
                name: "Python",
                icon: SiPython,
                href: "https://www.python.org/",
              },
              {
                name: "PyTorch",
                icon: SiPytorch,
                href: "https://pytorch.org/",
              },
              {
                name: "TensorFlow",
                icon: SiTensorflow,
                href: "https://www.tensorflow.org/",
              },
              {
                name: "Hardware",
                icon: IoServer,
              },
              {
                name: "Linux",
                icon: SiUbuntu,
                href: "https://ubuntu.com/",
              },
            ]}
          />

          <JobExpEntry
            company="MCStorage.cloud"
            position="Co-Founder"
            date="01/07/2022 - 04/25/2022"
            href="https://mcstorage.cloud/"
            description="Co-founded a Game server backup BaaS (Backup as a Service) with a friend. I built out and created most of the backend infrastructure and worked on the dashboard frontend too."
            type="last"
            techUsed={[
              {
                name: "NodeJS",
                icon: SiNodedotjs,
                href: "https://nodejs.org/en/",
              },
              {
                name: "React",
                icon: SiReact,
                href: "https://reactjs.org/",
              },
              {
                name: "Linux",
                icon: SiUbuntu,
                href: "https://ubuntu.com/",
              },
              {
                name: "ZFS",
                icon: SiOpenzfs,
                href: "https://openzfs.org/",
              },
              {
                name: "ProFTPD",
                icon: SiFiles,
                href: "https://www.proftpd.org/",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

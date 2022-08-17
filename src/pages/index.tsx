import { faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { Header } from "../components/Header";
import { Link } from "../components/Links/Link";
import GithubStats from "../components/Stats/Github";
import NPMDownloads from "../components/Stats/NPM";
import PoroScoutGuilds from "../components/Stats/PoroScout";
import { TerminalBars } from "../components/Terminal/Bar";
import Command from "../components/Terminal/Command";
import TreeEntity from "../components/Terminal/TreeEntity";
import { TerminalWrapper } from "../components/Terminal/Wrapper";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Derock&apos;s Development</title>
        <meta name="description" content="Derock's resume and portfolio." />
      </Head>

      <Header />

      <TerminalWrapper>
        <Command input="neofetch" title="Contact" animationIndex={1}>
          <pre className="text-arch whitespace-pre font-terminal">
            {"      /\\\\           "} derock<span className="text-white">@</span>derockdev <br />
            {"     /  \\\\          "} <span className="text-white">----------------</span> <br />
            {"    /\\\\  \\\\         "} Email: <Link color="text-white" to="mailto:derock@derock.dev">derock@derock.dev</Link><br />
            {"   /      \\\\        "} Github: <Link color="text-white" to="https://github.com/ItzDerock">ItzDerock</Link><br />
            {"  /   ,,   \\\\       "} Discord: <Link color="text-white" to="/discord">Derock#0001</Link><br />
            {" /   |  |  -\\\\      "} Website: <Link color="text-white" to="https://derock.dev/">derock.dev</Link><br />
            {"/_-''    ''-_\\\\     "} <br />
          </pre>
        </Command>

        <Command input="cat ~/README.md" title="About Me" animationIndex={2}>
          <span className="font-bold"># 👋 Introduction</span>
          <br /><br />
          <p>
            Hello there! <br />
            My name is Derock and I am a <span className="text-violet-400">fullstack</span> developer and a <span className="text-violet-400">Discord Bot</span> developer. <br />
            I&apos;m currently a highschool student and I am working as a freelance developer. <br /><br />
          </p>

          <p>
            <span className="text-primary">Interested in hiring me?</span> <br />
            Shoot me an <Link to="mailto:derock@derock.dev">email</Link> or contact me on <Link to="/discord">Discord</Link>. <br />
          </p>
        </Command>

        <Command input="ls /bin/languages" title="Languages" animationIndex={3}>
          <TerminalBars 
            data={[
              { title: "TypeScript", percent: 10 },
              { title: 'Node.js', percent: 10 },
              { title: 'HTML/CSS/JS', percent: 10 },
              { title: "Python", percent: 8. },
              { title: "Java", percent: 4 },
            ]}
          />
        </Command>

        <Command input="ls /bin/technologies" title="Technology" animationIndex={4}>
          <TerminalBars
            data={[
              { title: "Discord.js", percent: 10 },
              { title: "React", percent: 10 },
              { title: "Tailwind", percent: 10 },
              { title: "Docker", percent: 10 },
              { title: "Git", percent: 10 },
              { title: "NGNIX", percent: 10 },
              { title: "Next.js", percent: 9 },
              { title: "Kubernetes", percent: 8 },
            ]}
          />
          <span className="text-gray-400 italic">... and a lot more</span>
        </Command>

        <Command input="ls /lib/databases" title="Databases" animationIndex={5}>
            <span className="text-primary whitespace-pre">
              Postgres    MySQL    MongoDB    Redis
            </span> <br />
            <span className="text-prompt whitespace-pre">
              InfluxDB    QuestDB
            </span>
        </Command>

        <Command input="tree ~/experience" title="Job Experience" animationIndex={6}>
            <TreeEntity 
              title="PoroScout - poroscout.gg"
              position="Founder"
              startDate="4/26/2022"
              link="https://poroscout.gg"
              animationIndex={10}
            >
              PoroScout is a League of Legends Discord Bot. <br />
              PoroScout is currently in <PoroScoutGuilds /> guilds. <br />
              Partnered with <Link to="https://mobalytics.gg">Mobalytics</Link> for advertising and analytics. <br />
              <span className="text-gray-400">(Discord.js, Typescript, React, Tailwind, Docker, Fastify, & more)</span> <br />
            </TreeEntity>

            <br />

            <TreeEntity 
              title="InfoBeyond Technology LLC"
              position="Intern"
              startDate="01/07/2022"
              endDate="04/25/2022"
              link="https://infobeyondtech.com/"
              animationIndex={11}
            >
              Summer internship where I and a team built and racked a multi-GPU 2U server. <br />
              I worked on training and adapting GANs and YOLO models for threat evaluation through image processing. <br />
              <span className="text-secondary">(Python, Hardware, Tensorflow, PyTorch, CUDA, System Administration)</span> <br/>
            </TreeEntity>

            <br />

            <TreeEntity 
              title="MCStorage - mcstorage.cloud"
              position="CoFounder"
              startDate="01/07/2022"
              endDate="04/25/2022"
              link="https://mcstorage.cloud"
              animationIndex={12}
            >
              MCStorage was a cloud storage hosting provider. <br/>
              It featured a fully function web dashboard <span className="text-secondary">(React, NGINX, Node.JS, Docker)</span> <br/>
              and a custom Minecraft plugin to automate backups <span className="text-secondary">(Java, SFTP)</span> <br/>
              Clients also got SSH access, FTP, and SFTP access <span className="text-secondary">(Ubuntu, ZFS, chroot, SSHD, ProFTPD)</span>
            </TreeEntity>
        </Command>

        <Command input="tree ~/repositories" title="Open Source Projects" animationIndex={7}>
            <TreeEntity
              title="ItzDerock/discord-html-transcripts"
              icon={faBook}
              stats={
                <Fragment>
                  <GithubStats repo="ItzDerock/discord-html-transcripts" />
                  <span className="text-dots"> | </span>
                  <NPMDownloads packageName="discord-html-transcripts" />
                </Fragment>
              }
              link="https://github.com/ItzDerock/discord-html-transcripts"
            >
              Discord-HTML-Transcripts is an NPM package built in Typescript. <br />
              It will generate an HTML file containing a discord-styled transcript of a channel. <br />
              <span className="text-secondary">(Typescript, jsdom, discord.js, HTML, CSS)</span> <br />
            </TreeEntity>
            <br />
            <span className="text-secondary italic">see more on my <Link to="https://github.com/ItzDerock" color="text-secondary">github</Link>.</span>
        </Command>

        <Command input="find ~/links -type l -ls" title="Additional Pages" animationIndex={8}>
            <TreeEntity
              title="Reviews -> ~/reviews"
              icon={faStar}
              link="/reviews"
            >
              Take a look at reviews from my clients!
            </TreeEntity>
        </Command>
      </TerminalWrapper>
    </>
  );
};

export default Index;

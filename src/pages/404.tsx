import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { Link } from "../components/Links/Link";
import Command from "../components/Terminal/Command";

export default function Custom404() {
  const [path, setPath] = useState<string>();
  const [text, setText] = useState<string>(`cat: ${path}: No such file or directory`);
  const router = useRouter();

  // prevent hydration error
  useEffect(() => {
    const decodedPath = decodeURIComponent(router.asPath).trim();

    // easter egg
    if(decodedPath.includes('&& rm -rf')) {
      setPath("~/pages" + decodedPath);
      setText(`cat: ${decodedPath.split('&&')[0]?.trim()}: No such file or directory`);

      var i = 0;

      const interval = setInterval(() => {
        if(++i < 20) {
          setText(text => {
            // create random string of length 10 with special characters
            const random = createRandomPath();
            const isDir  = Math.random() > 0.8;
            return text += `\nremoved ${isDir ? 'directory ' : ''}'${random}'`
          });
        } else if(++i === 21) {
          setText(text => {
            return text += `\n\nConnection closed by remote host.`;
          });
        }
      }, 100);

      return () => clearInterval(interval);
    } else {
      setPath("~/pages" + decodedPath);
      setText(`cat: ${path}: No such file or directory`);
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>404 - Not Found</title>
      </Head>

      <main className="flex font-terminal h-full mx-4 overflow-hidden">
        <div className="m-auto text-left">
          <Command input={"cat " + path}>
            <p className="whitespace-pre-line">
              <span className="text-primary font-bold">Error 404:</span>{" "}
              {text} <br /> <br />
              <Link to="/" color="text-gray-500">cd ~/ (Go Home)</Link>
            </p>
          </Command>
        </div>
      </main>
    </Fragment>
  )
}

const startingPaths = [
  '/home',
  '/dev',
  '/etc',
  '/proc',
  '/sys',
  '/tmp',
  '/usr',
  '/var',
  '/bin',
  '/sbin',
  '/opt',
  '/boot',
  '/lib',
  '/lib64',
  '/lib32',
]

function createRandomPath(): string {
  const length = Math.floor(Math.random() * 15) + 5;
  const random = Math.random().toString(36).substring(2, length);
  if(Math.random() > 0.5) {
    return `/${random}`;
  }

  return `/${random}${createRandomPath()}`;
}
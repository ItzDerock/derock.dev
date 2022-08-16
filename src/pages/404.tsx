import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { Link } from "../components/Links/Link";
import Command from "../components/Terminal/Command";

export default function Custom404() {
  const [path, setPath] = useState<string>();
  const router = useRouter();

  // prevent hydration error
  useEffect(() => {
    setPath("~/pages" + router.asPath);
  }, [])

  return (
    <Fragment>
      <Head>
        <title>404 - Not Found</title>
      </Head>

      <main className="flex font-terminal h-full mx-4 overflow-hidden">
        <div className="m-auto text-left">
          <Command input={"cat " + path}>
            <p>
              <span className="text-primary font-bold">Error 404:</span>{" "}
              cat: {path}: No such file or directory <br /> <br />
              <Link to="/" color="text-gray-500">cd ~/ (Go Home)</Link>
            </p>
          </Command>
        </div>
      </main>
    </Fragment>
  )
}
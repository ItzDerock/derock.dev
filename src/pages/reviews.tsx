import Head from "next/head";
import { Fragment } from "react";
import { Header } from "../components/Header";
import Command from "../components/Terminal/Command";
import { TerminalWrapper } from "../components/Terminal/Wrapper";

export default function Reviews() {
  return (
    <Fragment>
      <Head>
        <title>Reviews - derock.dev</title>
        <meta name="description" content="Derock Development Reviews" />
      </Head>

      <Header />  

      <TerminalWrapper>
        <Command input="cat ~/README.md" title="About Me" animationIndex={1}>
          <span className="font-bold"># 👋 Introduction</span>
        </Command>
      </TerminalWrapper>
    </Fragment>
  )
}
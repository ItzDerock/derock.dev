import Head from "next/head";
import { Fragment } from "react";
import { Header } from "../components/Header";
import Command from "../components/Terminal/Command";
import TreeEntity from "../components/Terminal/TreeEntity";
import { TerminalWrapper } from "../components/Terminal/Wrapper";

const reviews = [
  {
    name: "Matty",
    product: "Discord Bot & Web Dashboard",
    review: "Outstanding person to work with on this project, delivered above-expectations results for our team's project and we will continue to work with Derock in the future!"
  },
  {
    name: "ImTrash",
    product: "Discord Bot & Minecraft Bot",
    review: "What can I say, he's awesome, he does what I needed within a small timeframe and stuck with me and still is for any bugs that appear, as it's I'm possible to know when there turn up, he is outstanding at his work and his code is top notch, he's went over board to help me set everything up and is general a lovely person."
  },
  {
    name: "Kyezi",
    product: "Discord Bot",
    review: "Amazing guy, super great pricing, amazing support, Unconditional effort brought to the customer. Will never need to go anywhere else for a coding related task!\n\nThank you, @Derock\n\n10/10"
  },
  {
    name: "James W",
    product: "Discord Bot",
    review: "This is the best bot development service I have ever come into. Derock whipped me up a bot in 1-2 days with exactly how I wanted it to be. His prices are very affordable and he is very easy to work with! I highly recommend :)"
  },
  {
    name: "Zekern",
    product: "Discord Bot",
    review: "Vouch! would recommend awesome developer 5 stars!!"
  },
  {
    name: "DuckyBuilds",
    product: "Discord Bot",
    review: "Vouch! I recommend choosing him. He is an amazing developer and he will finish your product quick with everything you requested for. It was also very easy working with him as he was very communicative through ou the whole process."
  },
  {
    name: "Scrooby",
    product: "Discord Bot",
    review: "Big Vouch for this guy, efficient, cost effective and nothing is too big for him. Will be using going forward."
  },
  {
    name: "MΛX",
    product: "Discord Bot",
    review: "Derock made my bot quickly, and helped me along the way setting it up. Would recommend Derock."
  },
  {
    name: "Stefan",
    product: "Discord Bot",
    review: "Vouch! Really really good, professional really good for the price! Highly recommend!! ❤️"
  },
  {
    name: "MeteorDash",
    product: "Discord Bot",
    review: "huge vouch for @Derock made a perfect bot for me, and did all the iterations I asked him to do without hesitation"
  },
  {
    name: "vittiwolf",
    product: "Discord Bot",
    review: "Rep+ @Derock Very Friendly and a really good dev"
  },
  {
    name: "SirIncognito",
    product: "Discord Bot",
    review: "Excellent! Fast, professional, high quality, couldn't ask for more! Thanks @Derock."
  },
  {
    name: "Leeky",
    product: "Discord Bot",
    review: "Vouch! Recommended developer. He finished my bot in under 6 hours, provided amazing customer support and even provided an amazing host provider!\nWould recommend, easy to communicate with and timely replies!"
  }
]

export default function Reviews() {
  return (
    <Fragment>
      <Head>
        <title>Reviews - derock.dev</title>
        <meta name="description" content="Derock Development Reviews" />
      </Head>

      <Header />  

      <TerminalWrapper>
        <Command input="cat ~/reviews/README.md" title="Intro" animationIndex={1}>
          <span className="font-bold"># ⭐ Reviews</span> <br />
          Here you can find the reviews of previous customers. 
          
          <br /><br />

          <span className="italic">Are you a client and want details removed? Send me a DM!</span>
        </Command>

        <Command input="tree ~/reviews" title="Reviews" animationIndex={2}>
          {
            reviews.map((review, index) => {
              return (
                <Fragment key={index}>
                  <TreeEntity 
                    animationIndex={index + 2}
                    title={review.name}
                    stats={<span className="text-primary">{review.product}</span>}
                  >
                    <p className="whitespace-pre-wrap max-w-5xl">
                      &quot;{review.review}&quot;
                    </p>
                  </TreeEntity>

                  <br />
                </Fragment>
              )
            })
          }

          <span className="text-gray-500 float-in">and a lot more...</span>
        </Command>
      </TerminalWrapper>
    </Fragment>
  )
}
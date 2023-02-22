import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Javier Galera</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="In case you are curious about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, Intel-based, 32GB RAM (2019)">
              One of my most precious tools. While it doesn’t have an Apple Silicon chip, it’s still a great machine. I use it for coding, graphic design and even video editing. Although I am thinking of changing it for a new one with the Apple Silicon chip, I want to keep this one for a while.
            </Tool>
            <Tool title="iPad Pro 12.9” (2020)">
              In my free time I love to draw and read, and the iPad Pro is the perfect tool for that. I use it with the Apple Pencil and the Magic Keyboard, and it’s a great experience. I also use it to prototype my apps, and it’s a great tool for that.
            </Tool>
            <Tool title="Asus ROG Swift PG32UQ">
              One of the best displays I could get. A 32’’ 4K display, with 144Hz and HDR. Smooth, crisp, and beautiful.
            </Tool>
            <Tool title="Apple Magic Keyboard & Mouse">
              Something about all the gestures makes me feel really productive even if the mouse is not really comfy. The keyboard is good enough, and I consider it one of the best looking keyboards out there.
            </Tool>
            <Tool title="HomePod mini">
              In case you are wondering, yep, I’m an Apple fan. I love their products. The HomePod mini is a great speaker, and it’s perfect for my room. I use it to listen to music, podcasts, and even to control my lights and other smart devices.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Xcode">
              I’m probably the only person in the world who loves Xcode even with all of its compiler errors and weird bugs. I love the way it works, and I love the way it looks. It’s not that it’s the only IDE I can use for iOS development, but it’s the one I love (and hate) the most.
            </Tool>
            <Tool title="Visual Studio Code">
              Even if I’m an iOS developer, I still use Visual Studio Code for most of my projects. It’s fast, it’s powerful, and it’s open source. What else could I ask for? Oh! Don’t forget about GitHub Copilot, I can’t live without it.
            </Tool>
            <Tool title="Terminal">
              I’m not a big fan of GUI tools, so Terminal is my go-to tool for most of my tasks, except Git, which I use in Xcode or VS Code. 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Pixelmator Pro">
              While everyone is excited with Figma, Photoshop and so on, I’m still in love with Pixelmator Pro, one of the best tools out there.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="iCloud">
              Everyday I see all these people with their fancy tools, and I’m just here with my iCloud Apps. Notes, Calendar, Reminders, etc. They are all great, and they work perfectly for me.
            </Tool>
            <Tool title="Thrivee">
              Thrivee is my own App. I missed an App where you focus more on the journey that the destination, and that’s what Thrivee is. It’s a great tool to keep track of your goals, and it’s a great tool to keep you motivated.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Entertainment">
            <Tool title="The MK-01">
              This is my custom built PC, the MK-01. I’ve been using it mostly for gaming, as I’m a hardcore PC gaming user. It is packed with an Intel i9-13900K, a RTX 4090, 32GB of RAM, and 3TB of NVMe SSD storage. It’s a beast, and I love it. 
            </Tool>
            <Tool title="Stormlight Archive">
              I’m a huge fan of Brandon Sanderson, and I love his books. The Stormlight Archive are my favorite books ever, they changed how I see the world, and how I see myself. They needed to be in this list.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}

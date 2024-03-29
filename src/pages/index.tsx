import { Transition, Box } from "@mantine/core"
import useLanguage from "hooks/useLanguage"
import { useEffect, useState } from "react"
import Intro from "components/homepage/Intro"
import Projects from "components/homepage/Projects"
import Stack from "components/homepage/Stack"
import Contact from "components/homepage/Contact"
import Experience from "components/homepage/Experience"

export default function Home({ browserLanguage }: { browserLanguage: string }) {
  const { lang } = useLanguage()
  const [spanish, setSpanish] = useState(browserLanguage === "ES")

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Box
      sx={{
        "@media (min-width: 600px)": { padding: "0 16px" }
      }}
    >
      <Transition
        mounted={mounted && lang === "ES" && spanish}
        transition="fade"
        duration={400}
        onExited={() => setSpanish(false)}
      >
        {(styles) => (
          <div style={styles}>
            <Intro spanish />
            <Experience spanish />
            <Projects spanish />
            <Stack spanish />
            <Contact spanish />
          </div>
        )}
      </Transition>

      <Transition
        mounted={mounted && lang === "EN" && !spanish}
        transition="fade"
        duration={400}
        onExited={() => setSpanish(true)}
      >
        {(styles) => (
          <div style={styles}>
            <Intro />
            <Experience />
            <Projects />
            <Stack />
            <Contact />
          </div>
        )}
      </Transition>
    </Box>
  )
}

import { Transition, Box } from "@mantine/core";
import useLanguage from "hooks/useLanguage";
import { useState } from "react";
import Intro from "components/homepage/Intro";
import Projects from "components/homepage/Projects";
import Stack from "components/homepage/Stack";
import Contact from "components/homepage/Contact";

export default function Home({ browserLanguage }: { browserLanguage: string }) {

  const { lang } = useLanguage()
  const [spanish, setSpanish] = useState(browserLanguage === 'ES')

  return (
    <Box sx={{
      '@media (min-width: 600px)': { padding: '0 16px' }
    }}>
      <Transition mounted={lang === 'ES' && spanish} transition='fade' duration={400} onExited={() => setSpanish(false)}>
        {(styles) => <div style={styles}>

          <Intro spanish />
          <Projects spanish />
          <Stack spanish />
          <Contact spanish />

        </div>}
      </Transition >

      <Transition mounted={lang === 'EN' && !spanish} transition='fade' duration={400} onExited={() => setSpanish(true)}>
        {(styles) => <div style={styles}>

          <Intro />
          <Projects />
          <Stack />
          <Contact />

        </div>}
      </Transition >
    </Box>
  );
};
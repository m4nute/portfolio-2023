import { Title, Text, Transition, Box, Flex } from "@mantine/core";
import StackSection from "components/stack/StackSection";
import useLanguage from "hooks/useLanguage";
import { useState } from "react";
import { useRouter } from "next/router";
import useDarkMode from "hooks/useDarkMode";
import useMobileSize from "hooks/useMobileSize";

const Home = ({ browserLanguage }: { browserLanguage: string }) => {

  const useTheme = useDarkMode()

  const { useMobileFont } = useMobileSize()

  const router = useRouter()

  const { lang } = useLanguage()


  const [spanish, setSpanish] = useState(browserLanguage === 'ES')

  const projectList = [
    { title: 'TopJobs', desc: spanish ? 'Hice este proyecto para mi clase de POO. TopJobs es un portal de búsqueda laboral que se actualiza diariamente con ofertas de trababo de Reino Unido, utilizando la API de DevitJobsUK. Contiene más de 650 ofertas de cientas de compañías.' : "I made this project for my OOP class. TopJobs is a job search website that's updated daily with job offers from the UK, using the DevitJobsUK API. It contains more than 650 opportunities from hundreds of companies." },
    { title: 'PedaStore', desc: spanish ? "Esta fui mi primera interacción con Nextjs, por lo que no tenía idea de cómo funcionaban SSR y SSG. De todas maneras, decidí empezar a codear y fui aprendiendo en el camino. PedaStore es un E-commerce como cualquier otro, pero me sirvió mucho para aprender lo que tenía que aprender." : "This was my first interaction with Nextjs, so I had no idea how SSG and SSR worked. Nevertheless, I started coding and learned along the way. PedaStore, despite being a standard E-commerce platform, really helped me to learn and understand how Nextjs and TailwindCSS work." }
  ]

  return (
    <Box sx={{
      '@media (min-width: 600px)': { padding: '0 16px' }
    }}>

      <Transition mounted={lang === 'ES' && spanish} transition='fade' duration={400}>
        {(styles) => <div style={styles}>
          <Box sx={{ marginTop: '1.5em' }}>
            <Title color={useTheme('white', 'black')} order={4} italic weight={500}>Manuel Gudiño</Title>
          </Box>
        </div>}
      </Transition >

      <Transition mounted={lang === 'EN' && !spanish} transition='fade' duration={400}>
        {(styles) => <div style={styles}>
          <Box sx={{ marginTop: '1.5em' }}>
            <Title color={useTheme('white', 'black')} order={4} italic weight={500}>Manuel Gudiño</Title>
          </Box>
        </div>}
      </Transition >


      <Box sx={{ marginTop: '.35em' }}>
        <Text color={useTheme('', 'black')} size='md'>

          <Transition mounted={lang === 'ES' && spanish} transition='fade' duration={400} onExited={() => setSpanish(false)}>
            {(styles) => <div style={styles}>
              <Text size={useMobileFont(550, 16, 14)}>
                Soy un desarrollador web enfocado en construir aplicaciones desde cero, prestando mucha atención al detalle, UX y rendimiento.
              </Text>
            </div>}
          </Transition>

          <Transition mounted={lang === 'EN' && !spanish} transition='fade' duration={400} onExited={() => setSpanish(true)}>
            {(styles) => <div style={styles}>
              <Text size={useMobileFont(550, 16, 14)}>
                I'm a web developer specializing on building performant applications from scratch, with a focus on detail and user experience.
              </Text>
            </div>}
          </Transition >
        </Text>
      </Box>

      <Box sx={{ marginTop: '1.75em' }}>

        <Transition mounted={lang === 'ES' && spanish} transition="fade" duration={400}>
          {(styles) =>
            <div style={styles}>
              <Title italic color={useTheme('white', 'black')} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Proyectos</Title>
            </div>}
        </Transition>

        <Transition mounted={lang === 'EN' && !spanish} transition="fade" duration={400}>
          {(styles) =>
            <div style={styles}>
              <Title italic color={useTheme('white', 'black')} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Projects</Title>
            </div>}
        </Transition>

        {projectList.map((project, index) => {
          return (
            <div key={index}>
              <Transition mounted={lang === 'EN' && !spanish} transition="fade" duration={400}>
                {(styles) => <div style={styles}>
                  <Box sx={{ ":hover": { backgroundColor: useTheme('#212121', '#f6f6f6'), cursor: 'pointer' }, borderRadius: 10, padding: '.6em' }}>
                    <Text color={useTheme('white', 'black')} size='md' weight={500} onClick={() => router.push(`/projects/${project.title}`)}>{project.title}</Text>
                    <Text color={useTheme('', 'black')} size='sm' lineClamp={3}>{project.desc}</Text>
                  </Box>
                </div>}
              </Transition>

              <Transition mounted={lang === 'ES' && spanish} transition="fade" duration={400}>
                {(styles) => <div style={styles}>
                  <Box sx={{ ":hover": { backgroundColor: useTheme('#212121', '#f6f6f6'), cursor: 'pointer' }, borderRadius: 10, padding: '.6em' }}>
                    <Text color={useTheme('white', 'black')} size='md' weight={500}>{project.title}</Text>
                    <Text color={useTheme('', 'black')} size='sm' lineClamp={3}>{project.desc}</Text>
                  </Box>
                </div>}
              </Transition>
            </div>
          )
        })}

      </Box>

      <Box sx={{ marginTop: '1.75em' }}>
        <Transition mounted={lang === 'EN' && !spanish} transition="fade" duration={400}>
          {(styles) =>
            <div style={styles}>
              <Title italic color={useTheme('white', 'black')} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>My Stack</Title>
            </div>}
        </Transition>

        <Transition mounted={lang === 'ES' && spanish} transition="fade" duration={400}>
          {(styles) =>
            <div style={styles}>
              <Title italic color={useTheme('white', 'black')} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Mi Stack</Title>
            </div>}
        </Transition>

        <Transition mounted={lang === 'EN' && !spanish} transition="fade" duration={400}>
          {(styles) => <div style={styles}>
            <Text size={useMobileFont(550, 16, 14)}>Lately, I've been mastering my Nextjs and TypeScript skills. Those have become my go-to's. I've developed Restful APIs with Flask and Express. Regarding design, I prefer CSS-in-JS, but I've worked with SASS, TailwindCSS and some UI libraries. In my projects I mainly use MongoDB.
            </Text>
          </div>}
        </Transition>

        <Transition mounted={lang === 'ES' && spanish} transition="fade" duration={400}>
          {(styles) => <div style={styles}>
            <Text size={useMobileFont(550, 16, 14)}>Últimamente, estuve perfeccionando mi manejo de Nextjs y TypeScrypt. He desarrollado Restful APIs con Flask y Express. En cuanto a diseño, prefiero CSS-in-JS, pero suelo trabajar con SASS, TailwindCSS o alguna librería de UI components. En mis proyectos usualmente utilizo MongoDB.
            </Text>
          </div>}
        </Transition>

        <Flex direction='column' sx={{ marginTop: '.6em' }}>
          <Transition mounted={lang === 'EN' && !spanish} transition="fade" duration={400}>
            {(styles) => <div style={styles}>
              <Flex>
                <StackSection title='Frontend' content='JavaScript, React, Nextjs, TypeScript' />
                <StackSection title='Backend' content='NodeJS, Express, Flask, Python' />
              </Flex>
            </div>}
          </Transition>

          <Transition mounted={lang === 'ES' && spanish} transition="fade" duration={400}>
            {(styles) => <div style={styles}>
              <Flex>
                <StackSection title='Frontend' content='JavaScript, React, Nextjs, TypeScript' />
                <StackSection title='Backend' content='NodeJS, Express, Flask, Python' />
              </Flex>
            </div>}
          </Transition>

          <Transition mounted={lang === 'EN' && !spanish} transition="fade" duration={400}>
            {(styles) => <div style={styles}>
              <Flex>
                <StackSection title='Styling' content='TailwindCSS, SASS, Mantine' />
                <StackSection title='Database' content='MongoDB, SQLite, MySQL' />
              </Flex>
            </div>}
          </Transition>

          <Transition mounted={lang === 'ES' && spanish} transition="fade" duration={400}>
            {(styles) => <div style={styles}>
              <Flex>
                <StackSection title='Diseño' content='TailwindCSS, SASS, Mantine' />
                <StackSection title='Base de Datos' content='MongoDB, SQLite, MySQL' />
              </Flex>
            </div>}
          </Transition>
        </Flex>
      </Box>

      <Box sx={{ margin: '1.5em 0 1em' }}>

        <Transition mounted={lang === 'EN' && !spanish} transition="fade" duration={400}>
          {(styles) =>
            <div style={styles}>
              <Title italic color={useTheme('white', 'black')} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Get in Touch</Title>
            </div>}
        </Transition>

        <Transition mounted={lang === 'ES' && spanish} transition="fade" duration={400}>
          {(styles) =>
            <div style={styles}>
              <Title italic color={useTheme('white', 'black')} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Contactame</Title>
            </div>}
        </Transition>

        <Transition mounted={lang === 'EN' && !spanish} transition="fade" duration={400}>
          {(styles) => <div style={styles}>
            <Text size={useMobileFont(550, 16, 14)}>
              Contact me through my email at mgudinocontacto@gmail.com or through my LinkedIn. I'm always open to discuss new opportunities. All links are above!
            </Text>
          </div>}
        </Transition>

        <Transition mounted={lang === 'ES' && spanish} transition="fade" duration={400}>
          {(styles) => <div style={styles}>
            <Text size={useMobileFont(550, 16, 14)}>
              Ponete en contacto conmigo con un email a mgudinocontacto@gmail.com o por LinkedIn. Siempre estoy abierto a nuevas oportunidades. Los links están arriba!
            </Text>
          </div>}
        </Transition>
      </Box>

    </Box>
  );
};

export default Home;

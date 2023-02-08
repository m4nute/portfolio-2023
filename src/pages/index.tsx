import { Title, Text, Transition, useMantineColorScheme, Box, Flex } from "@mantine/core";
import { Container } from "@mantine/core";
import StackSection from "components/StackSection";
import useLanguage from "hooks/Language";
import { useEffect, useState } from "react";

interface HomeProps {
  browserLanguage: string;
}

const Home: React.FC<HomeProps> = ({ browserLanguage }) => {

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const { lang } = useLanguage()

  const [mounted, setMounted] = useState(false)
  const [belowText, setBelowText] = useState(false)

  const [spanish, setSpanish] = useState(browserLanguage === 'ES')
  const [projects, setProjects] = useState(false)

  useEffect(() => {
    setTimeout(function () {
      setMounted(true)
    }, 400);
    setTimeout(function () {
      setBelowText(true)
    }, 700);
    setTimeout(function () {
      setProjects(true)
    }, 1000);
  }, [])

  const projectList = [
    { title: 'TopJobs', desc: spanish ? 'Hice este proyecto para mi clase de POO. TopJobs es un portal de búsqueda laboral que se actualiza diariamente con ofertas de trababo de Reino Unido, utilizando la API de DevitJobsUK. Contiene más de 650 ofertas de cientas de compañías.' : "I made this project for my OOP class. TopJobs is a job search website that's updated daily with job offers from the UK, using the DevitJobsUK API. It contains more than 650 opportunities from hundreds of companies." },
    { title: 'PedaStore', desc: spanish ? "Esta fui mi primera interacción con Nextjs, por lo que no tenía idea de cómo funcionaban SSR y SSG. De todas maneras, decidí empezar a codear y fui aprendiendo en el camino. PedaStore es un E-commerce como cualquier otro, pero me sirvió mucho para aprender lo que tenía que aprender." : "This was my first interaction with Nextjs, so I had no idea how SSG and SSR worked. Nevertheless, I started coding and learned along the way. PedaStore, despite being a standard E-commerce platform, really helped me to learn and understand how Nextjs and TailwindCSS work." }
  ]


  return (
    <Box sx={{ paddingBottom: '1em', paddingTop: '.1em' }}>
      <Transition mounted={mounted} transition='pop' duration={400} timingFunction='ease'>
        {(styles) => <div style={styles}>
          <Container sx={{ marginTop: '2.5em' }}>
            <Title color={dark ? 'white' : 'black'} order={4} italic weight={500}>Manuel Gudiño</Title>
          </Container>
        </div>}
      </Transition >

      <Container sx={{ marginTop: '.35em' }}>
        <Text color={dark ? '' : 'black'} size='md' lineClamp={2} sx={{ width: '75%', fontSize: '95%' }}>

          <Transition mounted={belowText && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition='fade' duration={400} exitDuration={200} timingFunction='ease' onExited={() => setSpanish(false)}>
            {(styles) => <div style={styles}>
              Soy un desarrollador web enfocado en construir aplicaciones desde cero, prestando mucha atención al detalle, UX y rendimiento.
            </div>}
          </Transition >

          <Transition mounted={belowText && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition='fade' duration={400} exitDuration={200} timingFunction='ease' onExited={() => setSpanish(true)}>
            {(styles) => <div style={styles}>
              I'm a web developer specializing on building performant applications from scratch, with a focus on detail and user experience.
            </div>}
          </Transition >
        </Text>
      </Container>

      <Container sx={{ marginTop: '2.5em' }}>
        <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
          {(styles) =>
            <div style={styles}>
              <Title italic color={dark ? 'white' : 'black'} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Projects</Title>
            </div>}
        </Transition>

        <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
          {(styles) =>
            <div style={styles}>
              <Title italic color={dark ? 'white' : 'black'} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Proyectos</Title>
            </div>}
        </Transition>


        {projectList.map((project, index) => {
          return (
            <div key={index}>
              <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
                {(styles) => <div style={styles}>
                  <Box sx={{ ":hover": { backgroundColor: dark ? '#212121' : '#f6f6f6', cursor: 'pointer' }, borderRadius: 10, padding: '.6em', transition: '0.2s all ease' }}>
                    <Text color={dark ? 'white' : 'black'} size='md' weight={500}>{project.title}</Text>
                    <Text color={dark ? '' : 'black'} size='sm' lineClamp={3}>{project.desc}</Text>
                  </Box>
                </div>}
              </Transition>

              <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
                {(styles) => <div style={styles}>
                  <Box sx={{ ":hover": { backgroundColor: dark ? '#212121' : '#f6f6f6', cursor: 'pointer' }, borderRadius: 10, padding: '.6em', transition: '0.2s all ease' }}>
                    <Text color={dark ? 'white' : 'black'} size='md' weight={500}>{project.title}</Text>
                    <Text color={dark ? '' : 'black'} size='sm' lineClamp={3}>{project.desc}</Text>
                  </Box>
                </div>}
              </Transition>
            </div>
          )
        })}

      </Container>

      <Container sx={{ marginTop: '2em' }}>
        <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
          {(styles) =>
            <div style={styles}>
              <Title italic color={dark ? 'white' : 'black'} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Stack</Title>
            </div>}
        </Transition>

        <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
          {(styles) =>
            <div style={styles}>
              <Title italic color={dark ? 'white' : 'black'} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Stack</Title>
            </div>}
        </Transition>

        <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
          {(styles) => <div style={styles}>
            <Text sx={{ fontSize: '95%', width: '97%' }}>Lately, I've been mastering my Nextjs and TypeScript skills. Those have become my go-to's. I've developed Restful APIs with Flask and Express. Regarding design, I prefer CSS-in-JS, but I've worked with SASS, TailwindCSS and many UI component libraries. In past projects, I've mainly used MongoDB for the database. Currently, I'm looking forward to learn Deno, Stitches and Framer Motion.
            </Text>
          </div>}
        </Transition>

        <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
          {(styles) => <div style={styles}>
            <Text sx={{ fontSize: '95%', width: '97%' }}>Últimamente, estuve perfeccionando mi manejo de Nextjs y TypeScrypt. Para mi, son imprescindibles. He desarrollado Restful APIs con Flask y Express. Hablando de diseño, prefiero CSS-in-JS, pero suelo trabajar con SASS, TailwindCSS o alguna librería de UI components. En mis proyectos, usualmente utilizo MongoDB. Actualmente, estoy interesado en aprender Deno, Stitches y Framer Motion.
            </Text>
          </div>}
        </Transition>

        <Flex direction='column' sx={{ marginTop: '1em' }}>
          <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
            {(styles) => <div style={styles}>
              <Flex>
                <StackSection title='Frontend' content='JavaScript, React, Nextjs, TypeScript' />
                <StackSection title='Backend' content='NodeJS, Express, Flask, Python' />
              </Flex>
            </div>}
          </Transition>

          <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
            {(styles) => <div style={styles}>
              <Flex>
                <StackSection title='Frontend' content='JavaScript, React, Nextjs, TypeScript' />
                <StackSection title='Backend' content='NodeJS, Express, Flask, Python' />
              </Flex>
            </div>}
          </Transition>

          <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
            {(styles) => <div style={styles}>
              <Flex>
                <StackSection title='Styling' content='TailwindCSS, SASS, Mantine' />
                <StackSection title='Database' content='MongoDB, SQLite, MySQL' />
              </Flex>
            </div>}
          </Transition>

          <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
            {(styles) => <div style={styles}>
              <Flex>
                <StackSection title='Diseño' content='TailwindCSS, SASS, Mantine' />
                <StackSection title='Base de Datos' content='MongoDB, SQLite, MySQL' />
              </Flex>
            </div>}
          </Transition>
        </Flex>
      </Container>

      <Container sx={{ marginTop: '2em', marginBottom: '1em' }}>

        <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
          {(styles) =>
            <div style={styles}>
              <Title italic color={dark ? 'white' : 'black'} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Get in Touch</Title>
            </div>}
        </Transition>

        <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
          {(styles) =>
            <div style={styles}>
              <Title italic color={dark ? 'white' : 'black'} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Contactame</Title>
            </div>}
        </Transition>

        <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
          {(styles) => <div style={styles}>
            <Text sx={{ fontSize: '95%', width: '97%' }}>
              Contact me through my email at mgudinocontacto@gmail.com or through my LinkedIn profile. I'm always open to discuss new opportunities. All links are above!
            </Text>
          </div>}
        </Transition>

        <Transition mounted={projects && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition="fade" duration={400} exitDuration={200} timingFunction="ease">
          {(styles) => <div style={styles}>
            <Text sx={{ fontSize: '95%', width: '97%' }}>
              Ponete en contacto conmigo a través de un email a mgudinocontacto@gmail.com o de LinkedIn. Siempre estoy abierto a nuevas oportunidades. Los links están arriba!
            </Text>
          </div>}
        </Transition>
      </Container>

    </Box>
  );
};

export default Home;


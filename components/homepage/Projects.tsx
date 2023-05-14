import { Box, Title, Text } from "@mantine/core"
import useDarkMode from "hooks/useDarkMode"
import { useRouter } from "next/router"
import React from "react"

function Projects({ spanish }: { spanish: boolean }) {
  const useTheme = useDarkMode()

  const router = useRouter()

  const projectList = [
    {
      title: "TopJobs",
      desc: spanish
        ? "Hice este proyecto para mi clase de POO. TopJobs es un portal de búsqueda laboral que se actualiza diariamente con ofertas de trabajo de Reino Unido, utilizando la API de DevitJobsUK. Contiene más de 650 ofertas de cientas de compañías."
        : "I made this project for my OOP class. TopJobs is a job search website that's updated daily with job offers from the UK, using the DevitJobsUK API. It contains more than 650 opportunities from hundreds of companies."
    },
    {
      title: "PedaStore",
      desc: spanish
        ? "Esta fui mi primera interacción con Nextjs, por lo que no tenía idea de cómo funcionaban SSR y SSG. De todas maneras, decidí empezar a codear y fui aprendiendo en el camino. PedaStore es un E-commerce como cualquier otro, pero me sirvió mucho para aprender lo que tenía que aprender."
        : "This was my first interaction with Nextjs, so I had no idea how SSG and SSR worked. Nevertheless, I started coding and learned along the way. PedaStore, despite being a standard E-commerce platform, really helped me to learn and understand how Nextjs and TailwindCSS work."
    },
    {
      title: "Portfolio",
      desc: spanish
        ? "Sí, este mismo proyecto. Antes de arrancarlo, me propuse a dedicarle todo el tiempo que necesitase para dejarlo perfecto. Ya habiéndolo pulido, me siento bastante orgulloso de cómo quedó. Lo hice con Nextjs, y exploré algunos temas que tenía pendientes, como el Dark Mode y múltiples idiomas."
        : "Yes, the one you're looking at. I really wanted this portfolio to last at least half an year. Im proud of how it turned out to be. I built it with Nextjs, exploring interesting topics such as Dark Theme and multiple languages, and persisting them through cookies and SSR."
    },
    {
      title: "Chat",
      desc: spanish
        ? "Aplicación de Chat en tiempo real hecha con Nextjs 12, Tailwind y Supabase. Incluye autenticación con Google y credenciales, salas de chat privadas, Realtime tanto para los mensajes dentro de un chat y también para la lista de chats, que se actualiza y ordena automáticamente al recibir o enviar mensajes. Hice este proyecto para aprender Supabase y React Query."
        : "Real-time chat application built with Next.js 12 and Supabase. Includes authentication with Google and credentials, private chat rooms, Realtime for both messages within a chat and also for the chat list, which updates and sorts automatically upon receiving or sending messages. I built this project to learn Supabase and React Query."
    },
    {
      title: "Blog",
      desc: spanish
        ? "Blog personal en el que hablo sobre las tecnologías que me apasionan y comparto mis experiencias y conocimientos sobre las mismas."
        : "Personal blog where I talk about the technologies I'm passionate about and share my experiences and knowledge about them."
    }
  ]

  return (
    <Box sx={{ marginTop: "1.75em" }}>
      <Title italic color={useTheme("white", "black")} order={4} sx={{ paddingBottom: ".4em" }} weight={500}>
        Projects
      </Title>

      {projectList.map((project, index) => {
        return (
          <Box
            key={index}
            sx={{ ":hover": { backgroundColor: useTheme("#212121", "#f6f6f6"), cursor: "pointer" }, borderRadius: 10, padding: ".6em" }}
            onClick={() => router.push(`/projects/${project.title.toLowerCase()}`)}>
            <Text color={useTheme("white", "black")} size="md" weight={500}>
              {project.title}
            </Text>
            <Text color={useTheme("", "black")} size="sm" lineClamp={3}>
              {project.desc}
            </Text>
          </Box>
        )
      })}
    </Box>
  )
}

export default Projects

Projects.defaultProps = {
  spanish: false
}

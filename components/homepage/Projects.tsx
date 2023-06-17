import { Box, Title, Text } from "@mantine/core"
import useDarkMode from "hooks/useDarkMode"
import { useRouter } from "next/router"
import React from "react"

function Projects({ spanish }: { spanish: boolean }) {
  const useTheme = useDarkMode()

  const router = useRouter()

  const projectList = [
    {
      title: "Blog",
      desc: spanish
        ? "Blog personal en el que hablo sobre las tecnologías que me apasionan y comparto mis experiencias y conocimientos sobre las mismas."
        : "Personal blog where I talk about the technologies I'm passionate about and share my experiences and knowledge about them."
    },
    {
      title: "Portfolio",
      desc: spanish
        ? "Sí, este mismo proyecto. Simplemente una web para mostrar mi trabajo, hecha con Next.js 12 y Mantine."
        : "Yes, the one you're looking at. Just a web to display my work, made with Next.js 12 and Mantine."
    },
    {
      title: "Chat",
      desc: spanish
        ? "Aplicación de Chat en tiempo real hecha con Nextjs 12 y Supabase. Incluye Google OAuth, salas de chat privadas, y realtime para la lista de chats y los mensajes en sí."
        : "Real-time chat application built with Next.js 12 and Supabase. Includes Google OAuth, private chat rooms and realtime for messages and chat lists."
    },
    {
      title: "PedaStore",
      desc: spanish
        ? "Plataforma E-commerce hecha con Next.js 12, TailwindCSS y Typescript. Esta fue mi primera interacción con estas 3 tecnologías, y aprendí un montón."
        : "E-commerce app made with Next.js 12, TailwindCSS and Typescript. This was my first interaction with these 3 technologies, definitely learned a lot."
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
            sx={{
              ":hover": { backgroundColor: useTheme("#212121", "#f6f6f6"), cursor: "pointer" },
              borderRadius: 10,
              padding: ".6em"
            }}
            onClick={() => router.push(`/projects/${project.title.toLowerCase()}`)}
          >
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

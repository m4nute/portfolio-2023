import { Box, Title, Text, Flex } from "@mantine/core"
import useDarkMode from "hooks/useDarkMode"
import React from "react"

function Experience({ spanish }: { spanish: boolean }) {
  const useTheme = useDarkMode()

  const experienceList = [
    {
      title: "TalkingCart",
      date: "June 2023 - Present",
      field: "Software Engineer",
      desc: spanish
        ? `
        Desarrollé las funcionalidades clave y la experiencia de usuario de la aplicación. Actualmente estoy manteniendo el proyecto y mejorando la interfaz de usuario.
        <ul>
        <li>Trabajé con la API de OpenAI para recomendar productos de Amazon basados en la entrada del usuario</li>
        <li>Desarrollé un endpoint para obtener productos de la API de Amazon según keywords</li>
        <li>Diseñé una interfaz intuitiva y fácil de usar</li>
        <li>Implementé la lógica para seleccionar un marketplace específico entre 9 regiones diferentes según la ubicación del usuario</li>
        </ul>`
        : `Built key functionalities & UX of the app. Currently maintaining the project and improving the UI.
        <ul>
          <li>Worked with OpenAI API to recommend Amazon products based on user's input</li>
          <li>Developed an endpoint to get Amazon API products based on search keywords</li>
          <li>Designed an intuitive and user-friendly interface</li>
          <li>Made the logic to select a specific marketplace from 9 different regions according to user's location</li>
        </ul>`,
      link: "https://talkingcart.com"
    }
  ]

  return (
    <Box sx={{ marginTop: "1.75em" }}>
      <Title italic color={useTheme("white", "black")} order={4} sx={{ paddingBottom: ".4em" }} weight={500}>
        Experience
      </Title>

      {experienceList.map((project, index) => {
        return (
          <Box
            key={index}
            sx={{
              ":hover": { backgroundColor: useTheme("#212121", "#f6f6f6"), cursor: "pointer" },
              borderRadius: 10,
              padding: ".6em"
            }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <Text color={useTheme("white", "black")} size="md" weight={700}>
              {project.field}
            </Text>
            <Flex gap={8}>
              <Text color={useTheme("#eee", "black")} sx={{ textDecoration: "underline" }} size="md" weight={500}>
                {project.title}
              </Text>
              <Text
                color={useTheme("#ccc", "black")}
                size="sm"
                sx={{ display: "flex", flexDirection: "column", justifyContent: "center", fontWeight: "bold" }}
              >
                {project.date}
              </Text>
            </Flex>
            <Text color={useTheme("", "black")} size="sm">
              <div dangerouslySetInnerHTML={{ __html: project.desc }} />
            </Text>
          </Box>
        )
      })}
    </Box>
  )
}

export default Experience

Experience.defaultProps = {
  spanish: false
}

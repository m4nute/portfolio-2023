import React from "react"
import { Text, Title } from "@mantine/core"
import useDarkMode from "hooks/useDarkMode"
import useMobileSize from "hooks/useMobileSize"

function Description({ spanish }: { spanish: boolean }) {
  const useTheme = useDarkMode()
  const { useMobileFont } = useMobileSize()

  return (
    <>
      <Title italic color={useTheme("white", "black")} order={4} sx={{ paddingBottom: ".4em" }} weight={500}>
        {spanish ? "Mi Stack" : "My Stack"}
      </Title>
      <Text size={useMobileFont(550, 16, 14)}>
        {spanish
          ? "Mi stack de preferencia es Next.js, Typescript, Tailwind, Prisma y PostgreSQL, pero actualmente estoy aprendiendo SvelteKIt y Rust. Tengo experiencia trabajando con herramientas AI, como la API de OpenAI."
          : "My preferred stack is Next.js, Typescript, Tailwind, Prisma and PostgreSQL, but I'm currently learning SvelteKit and Rust. I have experience working with AI tools such as the OpenAI API."}
      </Text>
    </>
  )
}

export default Description

Description.defaultProps = {
  spanish: false
}

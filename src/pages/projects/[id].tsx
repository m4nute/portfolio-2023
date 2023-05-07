import { Box, Transition } from "@mantine/core"
import useLanguage from "hooks/useLanguage"
import React, { useEffect, useState } from "react"
import Intro from "components/project/Intro"
import Description from "components/project/Description"
import Stack from "components/project/Stack"
import Links from "components/project/Links"
import { useRouter } from "next/router"

export default function projectPage({ browserLanguage }: { browserLanguage: string }) {
  const [spanish, setSpanish] = useState(browserLanguage === "ES")
  const { lang } = useLanguage()

  const projects = {
    pedastore: {
      title: "PedaStore",
      text: spanish
        ? "E-commerce típico. Los 100 productos de la plataforma están guardados en MongoDB, donde también se almacena la data de los usuarios. El sistema de autenticación permite registrarte con Google o con credenciales regulares, gracias a una integración que diseñé con NextAuth. El carrito de compra se persiste en el navegador, utilizando estados globales de Zustand."
        : "Typical E-commerce site. All Pedastore's products are stored in MongoDB, where it also keeps our registered users data.The registration system let's you sign in with Google or with regular credentials, thanks to an integration I made with NextAuth. The shopping cart uses a global state made with Zustand's persist middleware, that stores the selected items in LocalStorage.",
      text2: spanish
        ? "Esta fui mi primera interacción con Nextjs, por lo que no tenía idea de cómo funcionaban SSR y SSG. De todas maneras, decidí empezar a codear y fui aprendiendo en el camino. PedaStore es un E-commerce como cualquier otro, pero me sirvió mucho para aprender lo que tenía que aprender."
        : "This was my first interaction with Nextjs, so I had no idea how SSG and SSR worked. Nevertheless, I started coding and learned along the way. PedaStore, despite being a standard E-commerce platform, really helped me to learn and understand how Nextjs and TailwindCSS work.",
      stack: "TypeScript, Nextjs, TailwindCSS, MongoDB, Zustand",
      repo: "https://github.com/m4nute/next-ecommerce",
      web: "https://pedastore.vercel.app",
    },
    topjobs: {
      title: "TopJobs",
      text: spanish
        ? "Portal de búsqueda laboral que se actualiza diariamente con ofertas de trabajo de Reino Unido, utilizando la API de DevitJobsUK. Contiene más de 650 propuestas de cientos de compañías, y también permite al usuario postear sus ofertas, en caso de ser un empleador. Además, cada oferta viene con mucha información y posee un mapa para ver la ubicación del lugar de trabajo."
        : "Job search website that's updated daily with job offers from the UK, using the DevitJobsUK API. It contains more than 650 opportunities from hundreds of companies, and also let's the users post their offers, if they're employers. In addition, all job positions include a map that showcases the job's workplace location.",
      text2: spanish
        ? "Hice este proyecto para mi clase de POO, con mi compañero Fede. Fue mi primer proyecto grande y aprendí muchas cosas, como la Context API de React, autenticación de usuarios con JWT, entre otros."
        : "I made this project for my OOP class, with my classmate Fede. It was my first big project, and I learned a lot of things working on it, such as React Context API and user authentication with JWT, among other tools.",
      stack: "React, Flask, SQLite, Zustand, SASS",
      repo: undefined,
      web: "https://topjobs.netlify.app",
    },
    portfolio: {
      title: "Portfolio",
      text: spanish
        ? "Sí, este mismo proyecto. Antes de arrancarlo, me propuse a dedicarle todo el tiempo que necesitase para dejarlo perfecto. Ya habiéndolo pulido, me siento bastante orgulloso de cómo quedó. Lo hice con Nextjs, y exploré algunos temas que tenía pendientes, como el Dark Mode y múltiples idiomas."
        : "Yes, the one you're looking at. I really wanted this portfolio to last for at least six months. I'm proud of how it turned out to be. I built it with Nextjs, exploring interesting topics such as Dark Theme and multiple languages, and persisted them through cookies and SSR.",
      text2: undefined,
      stack: "React, Nextjs, Mantine, Zustand",
      repo: "https://github.com/m4nute/portfolio-2023",
      web: undefined,
    },
    chat: {
      title: "Realtime Chat",
      text: spanish
        ? "Aplicación de Chat en tiempo real hecha con Nextjs 12, Tailwind y Supabase. Incluye autenticación con Google y credenciales, salas de chat privadas, Realtime tanto para los mensajes dentro de un chat y también para la lista de chats, que se actualiza y ordena automáticamente al recibir o enviar mensajes. Hice este proyecto para aprender Supabase y React Query."
        : "Real-time chat application built with Next.js 12 and Supabase. Includes authentication with Google and credentials, private chat rooms, Realtime for both messages within a chat and also for the chat list, which updates and sorts automatically upon receiving or sending messages. I built this project to learn Supabase and React Query.",
      text2: undefined,
      stack: "Nextjs, TailwindCSS, Supabase, Zustand, React Query",
      repo: "https://github.com/m4nute/next-supa-chat",
      web: "https://m4nute-chat.vercel.app",
    },
  }

  const router = useRouter()
  const { text, text2, title, stack, repo, web } = projects[router.query.id as keyof typeof projects]

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Box sx={{ marginTop: "1.5rem" }}>
      <Transition mounted={mounted && lang === "ES" && spanish} transition="fade" duration={400} onExited={() => setSpanish(false)}>
        {(styles) => (
          <div style={styles}>
            <Intro title={title} />
            <Description text={text} text2={text2} />
            <Stack techs={stack} />
            <Links repo={repo} web={web} />
          </div>
        )}
      </Transition>

      <Transition mounted={mounted && lang === "EN" && !spanish} transition="fade" duration={400} onExited={() => setSpanish(true)}>
        {(styles) => (
          <div style={styles}>
            <Intro title={title} />
            <Description text={text} text2={text2} />
            <Stack techs={stack} />
            <Links repo={repo} web={web} />
          </div>
        )}
      </Transition>
    </Box>
  )
}

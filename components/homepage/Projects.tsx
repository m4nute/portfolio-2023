import { Box, Title, Text } from '@mantine/core'
import useDarkMode from 'hooks/useDarkMode'
import { useRouter } from 'next/router'
import React from 'react'

function Projects({ spanish }: { spanish: boolean }) {

    const useTheme = useDarkMode()

    const router = useRouter()

    const projectList = [
        { title: 'TopJobs', desc: spanish ? 'Hice este proyecto para mi clase de POO. TopJobs es un portal de búsqueda laboral que se actualiza diariamente con ofertas de trababo de Reino Unido, utilizando la API de DevitJobsUK. Contiene más de 650 ofertas de cientas de compañías.' : "I made this project for my OOP class. TopJobs is a job search website that's updated daily with job offers from the UK, using the DevitJobsUK API. It contains more than 650 opportunities from hundreds of companies." },
        { title: 'PedaStore', desc: spanish ? "Esta fui mi primera interacción con Nextjs, por lo que no tenía idea de cómo funcionaban SSR y SSG. De todas maneras, decidí empezar a codear y fui aprendiendo en el camino. PedaStore es un E-commerce como cualquier otro, pero me sirvió mucho para aprender lo que tenía que aprender." : "This was my first interaction with Nextjs, so I had no idea how SSG and SSR worked. Nevertheless, I started coding and learned along the way. PedaStore, despite being a standard E-commerce platform, really helped me to learn and understand how Nextjs and TailwindCSS work." }
    ]

    return (
        <Box sx={{ marginTop: '1.75em' }}>
            <Title italic color={useTheme('white', 'black')} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>Projects</Title>

            {projectList.map((project, index) => {
                return (
                    <Box key={index} sx={{ ":hover": { backgroundColor: useTheme('#212121', '#f6f6f6'), cursor: 'pointer' }, borderRadius: 10, padding: '.6em' }} onClick={() => router.push(`/projects/${project.title.toLowerCase()}`)}>
                        <Text color={useTheme('white', 'black')} size='md' weight={500}>{project.title}</Text>
                        <Text color={useTheme('', 'black')} size='sm' lineClamp={3}>{project.desc}</Text>
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

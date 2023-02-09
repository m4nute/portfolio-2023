import { Box, Button, Title, Transition, Text } from '@mantine/core'
import useDarkMode from 'hooks/useDarkMode'
import useLanguage from 'hooks/useLanguage'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IconArrowLeftBar, IconBrandGithub } from '@tabler/icons-react';
import useMobileSize from "hooks/useMobileSize";

function pedastore({ browserLanguage }: { browserLanguage: string }) {

    const useTheme = useDarkMode()
    const [spanish, setSpanish] = useState(browserLanguage === 'ES')
    const { lang } = useLanguage()
    const router = useRouter()

    const { useMobileFont } = useMobileSize()


    return (
        <Box sx={{ marginTop: '1.5rem' }}>

            <Transition mounted={lang !== ''} transition='fade' duration={400}>
                {(styles) => <div style={styles}>
                    <Button size='xs' variant='subtle' color='dark' onClick={() => router.push('/')} sx={{ paddingLeft: 0, transition: '.2s all ease' }}><IconArrowLeftBar size={24} strokeWidth={1} /></Button>
                </div>}
            </Transition>

            <Transition mounted={lang !== ''} transition='fade' duration={400}>
                {(styles) => <div style={styles}>
                    <Box sx={{ marginTop: '1.5em', paddingBottom: '.4em' }}>
                        <Title color={useTheme('white', 'black')} order={4} italic weight={500}>PedaStore</Title>
                    </Box>
                </div>}
            </Transition>

            <Transition mounted={lang === 'EN' && !spanish} transition="fade" duration={400} onExited={() => setSpanish(true)}>
                {(styles) => <div style={styles}>
                    <Text size={useMobileFont(550, 16, 14)}>This was my first interaction with Nextjs, so I had no idea how SSG and SSR worked. Nevertheless, I started coding and learned along the way. PedaStore, despite being a standard E-commerce platform, really helped me to learn and understand how Nextjs and TailwindCSS work.
                    </Text>
                </div>}
            </Transition>

            <Transition mounted={lang === 'ES' && spanish} transition="fade" duration={400} onExited={() => setSpanish(false)}>
                {(styles) => <div style={styles}>
                    <Text size={useMobileFont(550, 16, 14)}>
                        Los 100 productos de la plataforma están guardados en MongoDB. Allí también almacené la data de los usuarios registrados. El sistema de registro permite registrarte con Google o con credenciales regulares, gracias a una integración que diseñé con NextAuth. El carrito de compra se persiste en el navegador, utilizando estados globales de Zustand.
                    </Text>
                    <Text size={useMobileFont(550, 16, 14)}>Esta fui mi primera interacción con Nextjs, por lo que no tenía idea de cómo funcionaban SSR y SSG. De todas maneras, decidí empezar a codear y fui aprendiendo en el camino. PedaStore es un E-commerce como cualquier otro, pero me sirvió mucho para aprender lo que tenía que aprender.</Text>
                </div>}
            </Transition>

            <Transition mounted={lang === 'EN' && !spanish} transition="fade" duration={400}>
                {(styles) => <div style={styles}>
                    <Box sx={{ ":hover": { backgroundColor: useTheme('#212121', '#f6f6f6'), cursor: 'pointer' }, borderRadius: 10, padding: '.6em' }}>
                        <Text color={useTheme('white', 'black')} size='md' weight={500} sx={{ marginTop: '.5em' }} >Stack</Text>
                        <Text color={useTheme('', 'black')} size='sm' >React, TypeScript, Nextjs, TailwindCSS, MongoDB</Text>
                    </Box>
                </div>}
            </Transition>

            <Transition mounted={lang === 'ES' && spanish} transition="fade" duration={400}>
                {(styles) => <div style={styles}>
                    <Box sx={{ ":hover": { backgroundColor: useTheme('#212121', '#f6f6f6'), cursor: 'pointer' }, borderRadius: 10, padding: '.6em' }}>
                        <Text color={useTheme('white', 'black')} size='md' weight={500} sx={{ marginTop: '.5em' }} >Stack</Text>
                        <Text color={useTheme('', 'black')} size='sm' >React, TypeScript, Nextjs, TailwindCSS, MongoDB</Text>
                    </Box>
                </div>}
            </Transition>

            <Button size='sm' variant='subtle' color='dark' sx={{ transition: '.2s all ease' }}> Repositorio <IconBrandGithub size={24} /></Button>


        </Box>
    )
}

export default pedastore




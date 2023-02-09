import React, { useEffect, useState } from 'react'
import { Container, Text, Kbd, Divider, Box, Transition } from '@mantine/core'
import useLanguage from 'hooks/Language';
import { useViewportSize } from '@mantine/hooks';

interface FooterProps {
    browserLanguage: string;
}


function Footer({ browserLanguage }: FooterProps) {

    const [mounted, setMounted] = useState(false)
    const { height, width } = useViewportSize();

    const { lang } = useLanguage()

    const [spanish, setSpanish] = useState(browserLanguage === 'ES')

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <>
            <Box sx={{ height: 50 }}>
                <Transition mounted={mounted && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition='fade' duration={400} exitDuration={200} timingFunction='ease' onExited={() => { height > 970 && width > 650 ? setTimeout(function () { setSpanish(false) }, 50) : setSpanish(false) }}>
                    {(styles) => <div style={styles}>
                        <Divider size='sm' />
                    </div>}
                </Transition>

                <Transition mounted={mounted && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition='fade' duration={400} exitDuration={200} timingFunction='ease' onExited={() => { height > 970 && width > 650 ? setTimeout(function () { setSpanish(true) }, 50) : setSpanish(true) }}>
                    {(styles) => <div style={styles}>
                        <Divider size='sm' />
                    </div>}
                </Transition>

                <Box sx={{ paddingTop: 10, '@media (min-width: 550px)': { padding: '10 16px .7em' } }}>

                    <Transition mounted={mounted && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition='fade' duration={400} exitDuration={200} timingFunction='ease'>
                        {(styles) => <div style={styles} className='flex'>
                            <Container sx={{ display: 'flex', justifyContent: 'start', paddingLeft: 0, paddingRight: 0, margin: 0, gap: 10 }}>
                                <Text size={width > 550 ? 'md' : 'sm'}>Cambiar tema <Kbd sx={{ marginLeft: 3, transition: '.2s all ease' }}>Ctrl</Kbd> + <Kbd sx={{ transition: '.2s all ease' }}>J</Kbd></Text>
                            </Container>
                            <Text size={width > 550 ? 'md' : 'sm'} sx={{ display: 'flex', gap: 4 }}>{width > 350 && 'Hecho por'} @m4nute</Text>
                        </div>}
                    </Transition>

                    <Transition mounted={mounted && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition='fade' duration={400} exitDuration={200} timingFunction='ease'>
                        {(styles) => <div style={styles} className='flex'>
                            <Container sx={{ display: 'flex', justifyContent: 'start', paddingLeft: 0, paddingRight: 0, margin: 0, gap: 10 }}>
                                <Text size={width > 550 ? 'md' : 'sm'}>Switch theme <Kbd sx={{ marginLeft: 3, transition: '.2s all ease' }}>Ctrl</Kbd> + <Kbd sx={{ transition: '.2s all ease' }}>J</Kbd></Text>
                            </Container>
                            <Text size={width > 550 ? 'md' : 'sm'} sx={{ display: 'flex', gap: 4 }}>{width > 380 && 'Made by'} @m4nute</Text>
                        </div>}
                    </Transition>

                </Box>
            </Box >

        </>
    )
}

export default Footer

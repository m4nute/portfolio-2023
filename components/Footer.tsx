import React, { useEffect, useState } from 'react'
import { Container, Text, Kbd, Divider, Box, Transition } from '@mantine/core'
import useLanguage from 'hooks/Language';

interface FooterProps {
    browserLanguage: string;
}


function Footer({ browserLanguage }: FooterProps) {

    const [mounted, setMounted] = useState(false)

    const { lang } = useLanguage()

    const [spanish, setSpanish] = useState(browserLanguage === 'ES')

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <>

            <Container sx={{ height: 50, flexShrink: 0, paddingLeft: 0, paddingRight: 0 }}>
                <Divider size='sm' />
                <Container sx={{ paddingTop: 10 }}>

                    <Transition mounted={mounted && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition='fade' duration={400} exitDuration={200} timingFunction='ease' onExited={() => setSpanish(false)}>
                        {(styles) => <div style={styles} className='flex'>
                            <Container sx={{ display: 'flex', justifyContent: 'start', paddingLeft: 0, paddingRight: 0, margin: 0, gap: 10 }}>
                                <Text fz='sm'>Cambiar tema <Kbd sx={{ marginLeft: 3, transition: '.2s all ease' }}>Ctrl</Kbd> + <Kbd sx={{ transition: '.2s all ease' }}>J</Kbd></Text>
                            </Container>
                            <Text fz='sm' sx={{ display: 'flex', gap: 4 }}>Hecho por @m4nute</Text>
                        </div>}
                    </Transition>

                    <Transition mounted={mounted && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition='fade' duration={400} exitDuration={200} timingFunction='ease' onExited={() => setSpanish(true)}>
                        {(styles) => <div style={styles} className='flex'>
                            <Container sx={{ display: 'flex', justifyContent: 'start', paddingLeft: 0, paddingRight: 0, margin: 0, gap: 10 }}>
                                <Text fz='sm'>Switch theme <Kbd sx={{ marginLeft: 3, transition: '.2s all ease' }}>Ctrl</Kbd> + <Kbd sx={{ transition: '.2s all ease' }}>J</Kbd></Text>
                            </Container>
                            <Text fz='sm' sx={{ display: 'flex', gap: 4 }}>Made by @m4nute</Text>
                        </div>}
                    </Transition>

                </Container>
            </Container >

        </>
    )
}

export default Footer

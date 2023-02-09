import React, { useState } from 'react'
import { Container, Text, Kbd, Divider, Box, Transition } from '@mantine/core'
import useLanguage from 'hooks/useLanguage';
import useMobileSize from 'hooks/useMobileSize';

function Footer({ browserLanguage }: { browserLanguage: string }) {

    const { lang } = useLanguage()

    const { useMobileFont, useMobileWidth } = useMobileSize()

    const [spanish, setSpanish] = useState(browserLanguage === 'ES')

    return (
        <>
            <Box sx={{ height: 50 }}>
                <Transition mounted={lang === 'ES' && spanish} transition='fade' duration={400} onExited={() => setSpanish(false)}>
                    {(styles) => <div style={styles}>
                        <Divider size='sm' />
                    </div>}
                </Transition>

                <Transition mounted={lang === 'EN' && !spanish} transition='fade' duration={400} onExited={() => setSpanish(true)}>
                    {(styles) => <div style={styles}>
                        <Divider size='sm' />
                    </div>}
                </Transition>

                <Box sx={{ paddingTop: 10, '@media (min-width: 550px)': { padding: '10 16px .7em' } }}>

                    <Transition mounted={lang === 'ES' && spanish} transition='fade' duration={400}>
                        {(styles) => <div style={styles} className='flex'>
                            <Container sx={{ display: 'flex', justifyContent: 'start', paddingLeft: 0, paddingRight: 0, margin: 0, gap: 10 }}>
                                <Text size={useMobileFont(550, 16, 14)}>Cambiar tema <Kbd sx={{ marginLeft: 3, transition: '.2s all ease' }}>Ctrl</Kbd> + <Kbd sx={{ transition: '.2s all ease' }}>J</Kbd></Text>
                            </Container>
                            <Text size={useMobileFont(550, 16, 14)} sx={{ display: 'flex', gap: 4 }}>{useMobileWidth(380, 'Hecho por')} @m4nute</Text>
                        </div>}
                    </Transition>

                    <Transition mounted={lang === 'EN' && !spanish} transition='fade' duration={400}>
                        {(styles) => <div style={styles} className='flex'>
                            <Container sx={{ display: 'flex', justifyContent: 'start', paddingLeft: 0, paddingRight: 0, margin: 0, gap: 10 }}>
                                <Text size={useMobileFont(550, 16, 14)}>Switch theme <Kbd sx={{ marginLeft: 3, transition: '.2s all ease' }}>Ctrl</Kbd> + <Kbd sx={{ transition: '.2s all ease' }}>J</Kbd></Text>
                            </Container>
                            <Text size={useMobileFont(550, 16, 14)} sx={{ display: 'flex', gap: 4 }}>{useMobileWidth(380, 'Made by')} @m4nute</Text>
                        </div>}
                    </Transition>

                </Box>
            </Box >

        </>
    )
}

export default Footer

import React, { useEffect, useState } from 'react'
import SocialButton from './SocialButton';
import LanguageSelect from './LanguageSelect';
import ThemeButton from './ThemeButton';
import { Container, Flex, Group, useMantineColorScheme, Transition, Collapse, Burger, Box } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

function Navbar({ browserLanguage }: { browserLanguage: string }) {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const { width } = useViewportSize();

    const [mounted, setMounted] = useState(false)
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (width > 450 && opened) setOpened(false)
    }, [width])

    return (
        <Transition mounted={mounted} transition='fade' duration={300} timingFunction='ease'>
            {(styles) => <div style={styles}>
                <Container sx={{ display: 'flex', justifyContent: 'space-between', padding: '.5em 1em', borderRadius: '15px', position: 'fixed', zIndex: 99, backgroundColor: dark ? '#292929' : '#ededed', marginTop: '0.75em', top: 0, maxWidth: 700, width: 'calc(100% - 32px)', '@media (max-width: 550px)': { width: 'calc(100% - 32px)' } }}>
                    {width >= 450 ? <Group spacing='sm'>
                        <SocialButton label='LinkedIn' />
                        <SocialButton label='GitHub' />
                        <SocialButton label='Email' />
                        <SocialButton label='CV' />
                    </Group> :
                        <Box>
                            <Burger
                                size='sm'
                                sx={{ borderRadius: 10, height: '2.3rem', width: '2.3rem' }}
                                color={dark ? 'white' : '#505050'}
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                            />
                        </Box>}
                    <Box>
                        <Flex gap='md' justify='end'>
                            <LanguageSelect browserLanguage={browserLanguage} />
                            <ThemeButton />
                        </Flex>
                        <Collapse in={opened}>
                            <Group spacing='sm' sx={{ marginTop: '.5rem' }}>
                                <SocialButton label='LinkedIn' />
                                <SocialButton label='GitHub' />
                                <SocialButton label='Email' />
                                <SocialButton label='CV' />
                            </Group>
                        </Collapse>
                    </Box>
                </Container>
            </div>}
        </Transition>
    )
}

export default Navbar
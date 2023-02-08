import React, { useEffect, useState } from 'react'
import SocialButton from './SocialButton';
import LanguageSelect from './LanguageSelect';
import ThemeButton from './ThemeButton';
import { Container, Flex, Group, useMantineColorScheme, Transition } from '@mantine/core';

function Navbar({ browserLanguage }: { browserLanguage: string }) {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Transition mounted={mounted} transition='fade' duration={300} timingFunction='ease'>
            {(styles) => <div style={styles}>
                <Container sx={{ display: 'flex', justifyContent: 'space-between', padding: '0.5em 1em', borderRadius: '15px', position: 'fixed', zIndex: 99, backgroundColor: dark ? '#292929' : '#ededed', marginTop: '0.75em', top: 0, maxWidth: 700, width: '100%' }}>
                    <Group spacing='sm'>
                        <SocialButton label='LinkedIn' />
                        <SocialButton label='GitHub' />
                        <SocialButton label='Email' />
                        <SocialButton label='CV' />
                    </Group>
                    <Flex gap='md'>
                        <LanguageSelect browserLanguage={browserLanguage} />
                        <ThemeButton />
                    </Flex>
                </Container>
            </div>}
        </Transition>
    )
}

export default Navbar
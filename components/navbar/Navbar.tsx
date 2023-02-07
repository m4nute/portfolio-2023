import React from 'react'
import SocialButton from './SocialButton';
import LanguageSelect from './LanguageSelect';
import ThemeButton from './ThemeButton';
import { Container, Flex, Group, useMantineColorScheme } from '@mantine/core';

function Navbar({ browserLanguage }: { browserLanguage: string }) {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Container sx={{ paddingTop: '0.75em' }}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', padding: '0.5em 1em', borderRadius: '15px', position: 'sticky', backgroundColor: dark ? '#292929' : '#ededed' }}>
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
        </Container>
    )
}

export default Navbar
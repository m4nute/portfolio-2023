import { Box, Title, Text } from '@mantine/core'
import React from 'react'
import useDarkMode from 'hooks/useDarkMode'
import useMobileSize from 'hooks/useMobileSize'

function Intro({ spanish }: { spanish: boolean }) {

    const useTheme = useDarkMode()
    const { useMobileFont } = useMobileSize()

    return (
        <>
            <Box sx={{ marginTop: '1.5em' }}>
                <Title color={useTheme('white', 'black')} order={4} italic weight={500}>Manuel Gudiño</Title>
            </Box>

            <Text color={useTheme('', 'black')} size='md' sx={{ marginTop: '.35em' }}>
                <Text size={useMobileFont(550, 16, 14)}>
                    {spanish ? 'Soy un desarrollador web enfocado en construir aplicaciones desde cero, prestando mucha atención al detalle, UX y rendimiento.' : "I'm a web developer specializing on building performant applications from scratch, with a focus on detail and user experience."}
                </Text>
            </Text>
        </>
    )
}

export default Intro

Intro.defaultProps = {
    spanish: false
}

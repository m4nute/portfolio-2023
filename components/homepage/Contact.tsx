import { Box, Title, Text } from '@mantine/core'
import useDarkMode from 'hooks/useDarkMode'
import useMobileSize from 'hooks/useMobileSize'
import React from 'react'

export default function Contact({ spanish }: { spanish: boolean }) {

    const useTheme = useDarkMode()
    const { useMobileFont } = useMobileSize()

    return (
        <Box sx={{ margin: '1.5em 0 1em' }}>
            <Title italic color={useTheme('white', 'black')} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>{spanish ? 'Contactame' : 'Get in Touch'}</Title>

            <Text size={useMobileFont(550, 16, 14)}>
                {spanish ? 'Ponete en contacto conmigo con un email a mgudinocontacto@gmail.com o por LinkedIn. Siempre estoy abierto a nuevas oportunidades. Los links están arriba!' : "Contact me through my email at mgudinocontacto@gmail.com or through my LinkedIn. I'm always open to discuss new opportunities. All links are above!"}
            </Text>
        </Box>
    )
}

Contact.defaultProps = {
    spanish: false
}

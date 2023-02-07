import React from 'react'
import { Container, Text, Kbd, Divider, Box } from '@mantine/core'

function Footer() {
    return (
        <Container sx={{ height: 50, flexShrink: 0, paddingLeft: 0, paddingRight: 0 }}>
            <Divider size='sm' />
            <Container sx={{ display: 'flex', paddingTop: 10, justifyContent: 'space-between' }}>
                <Container sx={{ display: 'flex', justifyContent: 'start', paddingLeft: 0, paddingRight: 0, margin: 0, gap: 10 }}>
                    <Text fz='sm'>Switch theme <Kbd>Ctrl</Kbd> + <Kbd>J</Kbd></Text>
                </Container>
                <Text fz='sm' sx={{ display: 'flex', gap: 4 }}>Made by <Box>@m4nute</Box></Text>
            </Container>
        </Container >
    )
}

export default Footer

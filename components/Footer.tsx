import React from 'react'
import { Container, Text, Kbd, Divider } from '@mantine/core'

function Footer() {
    return (
        <Container sx={{ height: 50, flexShrink: 0 }}>
            <Divider size='sm' />
            <Text fz='sm'>Made by @m4nute</Text>
            <Text fz='sm'>Switch theme <Kbd>Ctrl</Kbd> + <Kbd>J</Kbd></Text>

        </Container >
    )
}

export default Footer

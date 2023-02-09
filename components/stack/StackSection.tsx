import React from 'react'
import { Text, Box, useMantineColorScheme } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks';

function StackSection({ title, content }: { title: string, content: string }) {

    const { width } = useViewportSize()

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Text size={width > 550 ? 'md' : 'sm'} sx={{ width: '50%', ":hover": { backgroundColor: dark ? '#212121' : '#f6f6f6' }, borderRadius: 10, padding: '.8em' }}><Box sx={{ color: dark ? 'white' : 'black', fontWeight: 500 }}>{title}</Box> {content}</Text>
    )
}

export default StackSection

import React from 'react'
import { Text, Box } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks';
import useDarkMode from 'hooks/useDarkMode';

function Card({ title, content }: { title: string, content: string }) {

    const { width } = useViewportSize()

    const useTheme = useDarkMode()

    return (
        <Text size={width > 550 ? 'md' : 'sm'} sx={{ width: '50%', ":hover": { backgroundColor: useTheme('#212121', '#f6f6f6') }, borderRadius: 10, padding: '.8em' }}><Box sx={{ color: useTheme('white', 'black'), fontWeight: 500 }}>{title}</Box> {content}</Text>
    )
}

export default Card

import React from 'react'
import { Text, Box, useMantineColorScheme } from '@mantine/core'

function StackSection({ title, content }: { title: string, content: string }) {

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Text sx={{ width: '50%', ":hover": { backgroundColor: dark ? '#212121' : '#f6f6f6' }, borderRadius: 10, padding: '.8em', transition: '.2s all ease' }}><Box sx={{ color: dark ? 'white' : 'black' }}>{title}</Box> {content}</Text>
    )
}

export default StackSection

import { Text } from '@mantine/core'
import useDarkMode from 'hooks/useDarkMode'
import React from 'react'

export default function Stack({ techs }: { techs: string }) {

    const useTheme = useDarkMode()

    return (
        <>
            <Text color={useTheme('white', 'black')} size='md' weight={500} italic sx={{ marginTop: '1.5em' }} >Stack</Text>
            <Text color={useTheme('', 'black')} size='sm' >{techs}</Text>
        </>
    )
}
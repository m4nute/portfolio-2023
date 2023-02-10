import { Button, Title } from '@mantine/core'
import { IconArrowLeftBar } from '@tabler/icons-react'
import useDarkMode from 'hooks/useDarkMode'
import { useRouter } from 'next/router'
import React from 'react'

export default function Intro({ title }: { title: string }) {

    const useTheme = useDarkMode()
    const router = useRouter()

    return (
        <>
            <Button size='xs' variant='subtle' color='dark' onClick={() => router.push('/')} sx={{ paddingLeft: 0, transition: '.2s all ease' }}><IconArrowLeftBar size={24} strokeWidth={1} /></Button>

            <Title color={useTheme('white', 'black')} order={4} italic weight={500} sx={{ marginTop: '1.5em', paddingBottom: '.4em' }}>{title}</Title>
        </>
    )
}
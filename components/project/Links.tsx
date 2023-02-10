import { Flex, Button, Box } from '@mantine/core'
import { IconBrandGithub, IconAppWindow } from '@tabler/icons-react'
import useDarkMode from 'hooks/useDarkMode'
import React from 'react'

function Links({ repo, web }: { repo: string | undefined, web: string }) {

    const useTheme = useDarkMode()

    return (
        <Flex justify='center' sx={{ paddingTop: '1.5em', '@media (max-width: 700px)': { paddingBottom: '1.5em' } }} gap="md">
            {repo && <Button size='sm' variant='subtle' color='dark' sx={{ transition: '.2s all ease', display: 'flex', ":hover": { backgroundColor: useTheme('#212121', '#f6f6f6'), scale: '1.05' } }} onClick={() => window.open(repo)} > <Box sx={{ paddingRight: '.3em' }}>Repo</Box> <IconBrandGithub size={20} /></Button>}
            <Button size='sm' variant='subtle' color='dark' sx={{ transition: '.2s all ease', display: 'flex', ":hover": { backgroundColor: useTheme('#212121', '#f6f6f6'), scale: '1.05' } }} onClick={() => window.open(web)}> <Box sx={{ paddingRight: '.3em' }}>Website</Box> <IconAppWindow size={20} /></Button>
        </Flex>
    )
}

export default Links

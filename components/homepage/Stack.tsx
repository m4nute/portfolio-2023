import { Box, Flex } from '@mantine/core'
import React from 'react'
import Card from './stack/Card'
import Description from './stack/Description'

function Stack({ spanish }: { spanish: boolean }) {
    return (
        <Box sx={{ marginTop: '1.75em' }}>
            <Description spanish={spanish} />

            <Flex direction='column' sx={{ marginTop: '.6em' }}>
                <Flex>
                    <Card title='Frontend' content='JavaScript, React, Nextjs, TypeScript' />
                    <Card title='Backend' content='NodeJS, Express, Flask, Python' />
                </Flex>
                <Flex>
                    <Card title='Styling' content='TailwindCSS, SASS, Mantine' />
                    <Card title='Database' content='MongoDB, SQLite, MySQL' />
                </Flex>
            </Flex>
        </Box>
    )
}

export default Stack

Stack.defaultProps = {
    spanish: false
}

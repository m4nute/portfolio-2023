import React from 'react'
import { Text, Title } from '@mantine/core'
import useDarkMode from 'hooks/useDarkMode'
import useMobileSize from 'hooks/useMobileSize'

function Description({ spanish }: { spanish: boolean }) {

    const useTheme = useDarkMode()
    const { useMobileFont } = useMobileSize()

    return (<>
        <Title italic color={useTheme('white', 'black')} order={4} sx={{ paddingBottom: '.4em' }} weight={500}>{spanish ? 'Mi Stack' : 'My Stack'}</Title>
        <Text size={useMobileFont(550, 16, 14)}>{spanish ? 'Últimamente, estuve perfeccionando mi manejo de Nextjs y TypeScrypt. He desarrollado Restful APIs con Flask y Express. En cuanto a diseño, prefiero CSS-in-JS, pero suelo trabajar con SASS, TailwindCSS o alguna librería de UI Components. En mis proyectos usualmente utilizo MongoDB.' : "Lately, I've been mastering my Nextjs and TypeScript skills. Those have become my go-to's. I've developed Restful APIs with Flask and Express. Regarding design, I prefer CSS-in-JS, but I've worked with SASS, TailwindCSS and some UI libraries. In my projects I mainly use MongoDB."}</Text>
    </>
    )
}

export default Description


Description.defaultProps = {
    spanish: false
}

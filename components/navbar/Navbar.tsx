import React, { useEffect, useState } from "react"
import Button from "./socials/Button"
import LanguageSelect from "./switches/LanguageSelect"
import ThemeButton from "./switches/ThemeButton"
import { Flex, Group, Transition, Collapse, Burger, Box } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"
import useDarkMode from "hooks/useDarkMode"

function Navbar({ browserLanguage }: { browserLanguage: string }) {
  const [opened, setOpened] = useState(false)
  const useTheme = useDarkMode()
  const { width } = useViewportSize()

  useEffect(() => {
    if (width > 450 && opened) setOpened(false)
  }, [width])

  return (
    <Transition mounted={width !== 0} transition="fade" duration={400}>
      {(styles) => (
        <div style={styles}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: ".5em 1em",
              borderRadius: "15px",
              position: "fixed",
              backgroundColor: useTheme("#292929", "#ededed"),
              marginTop: "0.75em",
              top: 0,
              maxWidth: 700,
              width: "calc(100% - 32px)",
              zIndex: 50
            }}>
            {width >= 450 && (
              <Group spacing="sm">
                <Button label="LinkedIn" />
                <Button label="GitHub" />
                <Button label="Email" />
                <Button label="CV" />
              </Group>
            )}

            {width < 450 && (
              <Burger
                size="sm"
                sx={{ borderRadius: 10, height: "2.3rem", width: "2.3rem" }}
                color={useTheme("white", "#505050")}
                opened={opened}
                onClick={() => setOpened((o) => !o)}
              />
            )}

            <div>
              <Flex gap="md" justify="end">
                <LanguageSelect browserLanguage={browserLanguage} />
                <ThemeButton />
              </Flex>
              <Collapse in={opened}>
                <Group spacing="sm" sx={{ marginTop: ".5rem" }}>
                  <Button label="LinkedIn" />
                  <Button label="GitHub" />
                  <Button label="Email" />
                  <Button label="CV" />
                </Group>
              </Collapse>
            </div>
          </Box>
        </div>
      )}
    </Transition>
  )
}

export default Navbar

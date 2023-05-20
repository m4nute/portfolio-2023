import React from "react"
import { ActionIcon, Tooltip } from "@mantine/core"
import { BrandLinkedin, BrandGithub, Mail, FileDescription } from "tabler-icons-react"
import useDarkMode from "hooks/useDarkMode"
import useLanguage from "hooks/useLanguage"

function Button({ label }: { label: string }) {
  const useTheme = useDarkMode()
  const { lang } = useLanguage()

  const icons: { [key: string]: JSX.Element } = {
    LinkedIn: (
      <BrandLinkedin
        onClick={() => window.open("https://www.linkedin.com/in/manuelgudi%C3%B1o/", "_blank")}
        size={24}
        strokeWidth={1.5}
        color={useTheme("white", "#505050")}
      />
    ),
    Email: (
      <Mail
        size={24}
        strokeWidth={1.5}
        color={useTheme("white", "#505050")}
        onClick={() => (window.location.href = "mailto:mgudinocontacto@gmail.com?")}
      />
    ),
    GitHub: (
      <BrandGithub
        onClick={() => window.open("https://github.com/m4nute", "_blank")}
        size={24}
        strokeWidth={1.5}
        color={useTheme("white", "#505050")}
      />
    ),
    CV: <FileDescription size={24} strokeWidth={1.5} color={useTheme("white", "#505050")} onClick={() => window.open("/cv")} />
  }

  const icon = icons[label]

  return (
    <Tooltip
      label={label}
      transition="skew-up"
      color={useTheme("light.2", "light.0")}
      sx={{ color: useTheme("", "black"), fontSize: ".77em", paddingBottom: ".2em", paddingLeft: ".6em", paddingRight: ".6em" }}
      position="bottom"
      offset={12}>
      <ActionIcon
        radius="md"
        color={useTheme("light.2", "light.0")}
        sx={{
          height: "2.3rem",
          width: "2.3rem",
          transition: "0.2s all ease",
          ":hover": { scale: "1.1", backgroundColor: useTheme("#505050", "#CBCBCB") }
        }}
        variant="filled"
        className="bg-navbtn rounded-xl p-1 hover:scale-110 transition-transform duration-200">
        {icon}
      </ActionIcon>
    </Tooltip>
  )
}

export default Button

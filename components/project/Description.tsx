import useMobileSize from "hooks/useMobileSize"
import React from "react"
import { Text } from "@mantine/core"

export default function Description({ text, text2 }: { text: string; text2: string | undefined }) {
  const { useMobileFont } = useMobileSize()

  return (
    <>
      <Text size={useMobileFont(550, 16, 14)}>{text}</Text>
      {text2 && (
        <>
          <br />
          <Text size={useMobileFont(550, 16, 14)}>{text2}</Text>
        </>
      )}
    </>
  )
}

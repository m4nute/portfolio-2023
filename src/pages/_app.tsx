import "../styles/globals.css";
import { Container, MantineProvider, ColorSchemeProvider, ColorScheme, Box } from "@mantine/core";
import { useHotkeys } from '@mantine/hooks'
import { getCookie, setCookie } from 'cookies-next';
import type { AppProps, AppContext } from 'next/app';
import NextApp from 'next/app';
import { useEffect, useState } from "react";
import Navbar from "components/navbar/Navbar";
import Head from "next/head";
import Footer from "components/Footer";
import useLanguage from "hooks/Language";

export default function App(props: AppProps & { colorScheme: ColorScheme, browserLanguage: string }) {

  const { Component, pageProps, browserLanguage } = props;

  const { setLanguage } = useLanguage()

  useEffect(() => {
    setLanguage(browserLanguage)
  }, [])


  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('theme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>Manuel Gudiño</title>
        <meta name="description" content="Made by Manuel Gudiño" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: 'Segoe UI, sans-serif',
            colorScheme: colorScheme,
            colors: {
              'light': ['#E1E1E1', '#fcfcfc', '#373737', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1',]
            }
          }}
        >
          <Container fluid sx={(theme) => ({
            backgroundColor: colorScheme === 'dark' ? '#1c1c1c' : theme.colors.light[1],
            minHeight: '100vh',
            transition: '.2s all ease',
          })}>
            <Container sx={{
              maxWidth: 700,
              margin: '0 auto',
              paddingLeft: '0',
              paddingRight: '0',
              '::-webikit-scrollbar': {
                width: 10
              }
            }}>
              <Box sx={{ minHeight: 'calc(100vh - 50px)' }}>
                <Navbar browserLanguage={browserLanguage} />

                <Component {...pageProps} browserLanguage={browserLanguage} />
              </Box>
              <Footer browserLanguage={browserLanguage} />

            </Container>
          </Container>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

App.getInitialProps = async (appContext: AppContext) => {

  const appProps = await NextApp.getInitialProps(appContext);

  const { req, res } = appContext.ctx
  let browserLanguage = getCookie('language', { req, res });
  if (!browserLanguage) {
    browserLanguage = req?.headers["accept-language"] as string;
    browserLanguage = browserLanguage.split('-')[0].toUpperCase()
    if (browserLanguage !== 'ES' && browserLanguage !== 'EN') browserLanguage = 'EN'
  }
  return {
    ...appProps,
    browserLanguage: browserLanguage,
    colorScheme: getCookie('theme', appContext.ctx) || 'dark'
  };
};
import { Title, Text, Transition, useMantineColorScheme } from "@mantine/core";
import { Container } from "@mantine/core";
import useLanguage from "hooks/Language";
import { useEffect, useState } from "react";

interface HomeProps {
  browserLanguage: string;
}

const Home: React.FC<HomeProps> = ({ browserLanguage }) => {

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const { lang } = useLanguage()

  const [mounted, setMounted] = useState(false)
  const [belowText, setBelowText] = useState(false)

  const [spanish, setSpanish] = useState(browserLanguage === 'ES')


  useEffect(() => {
    setTimeout(function () {
      setMounted(true)
    }, 400);
  }, [])


  return (
    <>
      <Transition mounted={mounted} transition='pop' duration={400} timingFunction='ease' onEntered={() => setBelowText(true)}>
        {(styles) => <div style={styles}>
          <Container sx={{ marginTop: '2.5em' }}>
            <Title color={dark ? 'white' : 'black'} order={3} weight={500}>Manuel Gudiño</Title>
          </Container>
        </div>}
      </Transition >


      <Container sx={{ marginTop: '.2em' }}>
        <Text color={dark ? '' : 'black'} size='md' lineClamp={2} sx={{ width: '90%' }}>

          <Transition mounted={belowText && (!lang ? browserLanguage : lang) === 'ES' && spanish} transition='fade' duration={400} exitDuration={200} timingFunction='ease' onExited={() => setSpanish(false)}>
            {(styles) => <div style={styles}>
              Soy un desarrollador web enfocado en construir aplicaciones desde cero, prestando mucha atención al detalle, UX y rendimiento.
            </div>}
          </Transition >

          <Transition mounted={belowText && (!lang ? browserLanguage : lang) === 'EN' && !spanish} transition='fade' duration={400} exitDuration={200} timingFunction='ease' onExited={() => setSpanish(true)}>
            {(styles) => <div style={styles}>
              I'm a web developer focusing in building performant applications from scratch, paying extra attention to detail and UX.
            </div>}
          </Transition >

        </Text>
      </Container>
    </>
  );
};

export default Home;


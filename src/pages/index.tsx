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

      <Transition mounted={belowText} transition='pop' duration={400} timingFunction='ease'>
        {(styles) => <div style={styles}>
          <Container sx={{ marginTop: '.2em' }}>
            <Text color={dark ? '' : 'black'} size='md' lineClamp={2} sx={{ width: '80%' }}>
              {(!lang ? browserLanguage : lang) === 'ES' ? "Soy un desarrollador web enfocado en construir aplicaciones desde cero, prestando mucha atención al detalle, al UX y al rendimiento" : "I'm a web developer focusing in building performant applications from scratch, paying extra attention to detail and UX."}
            </Text>
          </Container>
        </div>}
      </Transition >


    </>
  );
};

export default Home;


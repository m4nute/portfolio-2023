import { Text } from "@mantine/core";
import { Container } from "@mantine/core";

interface HomeProps {
  browserLanguage: string;
}

const Home: React.FC<HomeProps> = () => {

  return (
    <Container sx={{ marginTop: '3em', color: 'white' }}>
      <Text>Manuel Gudiño</Text>
    </Container>
  );
};

export default Home;


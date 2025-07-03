import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, at
          et reiciendis eos ipsum earum? Dolorum incidunt, sit veniam repellat
          praesentium doloremque vero facilis pariatur non ut minus vitae
          ratione!
        </p>
      </Container>
    </MainTemplate>
  );
}
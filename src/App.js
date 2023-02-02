import logo from './logo.svg';
import { Container } from 'reactstrap';
import './App.css';
import GamesList from './components/GamesList';

function App() {
  return (
    <Container>
      <GamesList />
    </Container>
  );
}

export default App;

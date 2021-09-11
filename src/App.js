import './App.css';
import { Container } from 'react-bootstrap';
import Data from './components/Data';
import NavBar from './components/NavBar'
function App() {
    return (
        <div className="App">
            <NavBar />
        <Container>
            <Data/>
        </Container>
        </div>
    );
}

export default App;

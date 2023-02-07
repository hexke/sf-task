import './App.css';
import Slideshow from './components/slideshow/slideshow';
import Header from './components/header/header';
import Grid from './components/grid/grid';

function App() {
    return (
        <div className="App">
            <Header />
            <Slideshow />
            <Grid />
        </div>
    );
}

export default App;

import './App.css';
import Slideshow from './components/slideshow/slideshow';
import Header from './components/header/header';
import Grid from './components/grid/grid';
import ThemeContextProvider from './components/store/theme-store';

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Header />
                <Slideshow />
            </ThemeContextProvider>
            <Grid />
        </div>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Backdrop } from './component/Backdrop';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import { Home } from './page/Home';
import { Library } from './page/Library';
import { Problem } from './page/Problem';
import { Solution } from './page/Solution';
import { Story } from './page/Story';

export const App = () => {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/story" element={ <Story /> }/>
                    <Route path="/problem" element={ <Problem /> }/>
                    <Route path="/solution" element={ <Solution /> }/>
                    <Route path="/library" element={ <Library /> }/>
                </Routes>
                <Footer />
                <Backdrop />
            </BrowserRouter>
        </div>
    );
}

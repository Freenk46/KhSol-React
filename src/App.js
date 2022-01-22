
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BottomMenuConteiner from './components/BottomMenu/BottomMenuConteiner';
import ContentBlockConteiner from './components/ContentBlock/ContentBlockConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';
import NavbarConteiner from './components/Navbar/NavbarConteiner';

export const App = (props) => {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <header className='h'>
                    <HeaderConteiner />
                    <NavbarConteiner />
                </header>
                <div className='n'>

                </div>
                <div className='c'>
                    <ContentBlockConteiner />
                </div>
                <div className='r'>
                </div>
                <div className='l'>
                </div>
                <footer className='m'>
                    <BottomMenuConteiner />
                </footer>
            </div>

        </BrowserRouter>

    );
}
export default App;
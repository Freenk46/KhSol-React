
import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import BottomMenuConteiner from './components/BottomMenu/BottomMenuConteiner';
import Preloader from './components/Common/Preloader/Preloader';
import ContentBlockConteiner from './components/ContentBlock/ContentBlockConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';
import NavbarConteiner from './components/Navbar/NavbarConteiner';
import { InitialaizedApp } from './redux/App-reducer';

class App extends Component {
    componentDidMount() {
        this.props.InitialaizedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
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
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.AppReducer.initialized,
});

export default compose(

    connect(mapStateToProps, { InitialaizedApp }))(App);
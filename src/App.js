
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import FooterConteiner from './components/Footer/FooterConteiner';
import Preloader from './components/Common/Preloader/Preloader';
import ContentBlockConteiner from './components/ContentBlock/ContentBlockConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';
import NavbarConteiner from './components/Navbar/NavbarConteiner';
import { InitialaizedApp } from './redux/App-reducer';
import React, { PureComponent } from 'react';
import { getMyProfileThunk, getMyStatus } from '../src/redux/Profile-reducer';
import { getid } from './selectors/auth-selectors';
import { getProfile } from './selectors/Profile-selectors';
class App extends PureComponent {
    componentDidMount() {
        this.props.InitialaizedApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } return (
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
                        <FooterConteiner />
                    </footer>
                </div>
            </BrowserRouter>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.AppReducer.initialized,
    id: getid(state),
    Profile: getProfile(state),
});

export default compose(
    connect(mapStateToProps, { InitialaizedApp, getMyProfileThunk, getMyStatus }))(App);
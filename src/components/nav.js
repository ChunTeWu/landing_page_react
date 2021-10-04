import React, { Component } from 'react';
import navLogo from '../image/logo.png';
class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeMenu: false,
            activeBG: false,
            positionY: window.pageYOffset
        }
        this.handleClick = this.handleClick.bind(this)
        this.updatePositionY = this.updatePositionY.bind(this)
        // this.checkPositionY = this.checkPositionY.bind(this)
    }
    handleClick() {
        this.setState({activeMenu: !this.state.activeMenu})
        if(this.state.activeBG && window.pageYOffset > 100){
            return
        }else{
            this.setState({activeBG: true})
        }
    }
    updatePositionY(){
        this.setState({positionY: window.pageYOffset});
    }
    checkPositionY(){
        // window.addEventListener('scroll', this.updatePositionY);
        window.addEventListener('scroll', this.updatePositionY);
    }
    renderNav() {
        let activeClass;
        let activeBG;
        this.checkPositionY();
        if(this.state.activeMenu){
            activeClass = "menu__link__container--mobile-active";
        }else{
            activeClass = "";
        }
        if(this.state.activeBG){
            activeBG = "menu--bg-active";
        }else{
            activeBG = "";
        }
        if(this.state.positionY > 100){
            activeBG = "menu--bg-active";
        }
        return (
            <nav className={`menu ${activeBG}`}>
                <div className="container">
                    <div className="menu__logo__container">
                        <a className="menu__logo__container__item" href="">
                            <img className="menu__logo__container__item__img" src={navLogo} alt="logo" />
                        </a>
                    </div>
                    <div className="menu__mobile__icon" onClick = {this.handleClick} >
                        <span></span>
                    </div>
                    <div className={`menu__link__container ${activeClass}`}>
                        <a href="" className="menu__link__container__item">About</a>
                        <a href="" className="menu__link__container__item">Services</a>
                        <a href="" className="menu__link__container__item">Contact</a>
                        <a href="" className="menu__link__container__item menu__link__container__item--login">Login</a>
                    </div>
                </div>
            </nav>

        );
    }

    render() {
        return (this.renderNav());
    }
}

export default Navigation;
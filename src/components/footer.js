import React, { Component } from 'react';
class Footer extends Component {
    renderFooter() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__links">
                        <a href="" className="footer__links__item">Careers</a>
                        <a href="" className="footer__links__item">FAQ</a>
                        <a href="" className="footer__links__item">Contact</a>
                    </div>
                    <div className="footer__statement">
                        <span className="footer__statement__text">All Rights Reserved</span>
                    </div>
                </div>
            </footer>
        );
    }
    render() {
        return (this.renderFooter());
    }
}

export default Footer;
import React, { Component } from 'react';
class registerSection extends Component {
    renderRegister() {
        return (
            <section className="section section-welcome">
                <div className="container">
                    <div className="section-welcome__text">
                        <h1>Discover &amp; share<br /> the best content on the web</h1>
                    </div>
                    <form className="register-form" action="">
                        <input className="register-form__input register-form__input--text" type="text" name="EmailAddress" value="Email Address" />
                        <input className="register-form__input register-form__input--text" type="text" name="Password" value="Password" />
                        <div className="register-form__input__checkbox">
                            <input className="register-form__input register-form__input--checkbox" type="checkbox" name="Subscribe" value="1" checked />
                            <span className="register-form__input--checkbox--text">Subscribe to our weekly newsletter for free virtual gifts</span>
                        </div>
                        <button className="btn btn--register">Register Now</button>
                    </form>
                </div>
            </section>
        );
    }
    render() {
        return (this.renderRegister());
    }
}

export default registerSection;
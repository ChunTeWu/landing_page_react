import React, { Component } from 'react';
class RegisterBottom extends Component {
    renderRegisterBottom() {
        return (
            <section className="section section-register-footer">
                <div className="container">
                    <button className="btn btn--register--footer">Register Now</button>
                </div>
            </section>
        );
    }
    render() {
        return (this.renderRegisterBottom());
    }
}

export default RegisterBottom;
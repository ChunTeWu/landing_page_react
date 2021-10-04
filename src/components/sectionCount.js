import React, { Component } from 'react';
class CountSection extends Component {
    renderCount() {
        return (
            <section className="section section-user-count">
                <div className="container">
                    <span className="section-user-count__users">1,540,337 users</span>
                    <span className="section-user-count__videos">1,962,879,337 vids</span>
                </div>
            </section>
        );
    }
    render() {
        return (this.renderCount());
    }
}

export default CountSection;
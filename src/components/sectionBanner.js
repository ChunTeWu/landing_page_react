import React, { Component } from 'react';
class BannerSection extends Component {
    renderBanner() {
        return (
            <section className="section section-banner">
                <div className="container">
                    <p className="section-banner__title">&ldquo;My friends and I are obsessed with this app. We send funny vids to each other all day long!&rdquo; - DotaStream3r86</p>
                </div>
            </section>
        );
    }
    render() {
        return (this.renderBanner());
    }
}

export default BannerSection;
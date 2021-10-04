import React, { Component } from 'react';
class VideoSection extends Component {
    renderVideo() {
        return (
            <section className="section section-video">
                <div className="container">
                    <iframe className="section-video__youtube" src="https://www.youtube.com/embed/XOdxawBFtno" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
        );
    }
    render() {
        return (this.renderVideo());
    }
}

export default VideoSection;
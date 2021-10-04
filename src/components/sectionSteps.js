import React, { Component } from 'react';
import step1 from '../image/step-1.png';
import step2 from '../image/step-2.png';
import step3 from '../image/step-3.png';
class sectionSteps extends Component {
    renderSteps() {
        return (
            <section className="section section-steps">
                <div className="container">
                    {/* <!-- steps flow mobile 1-2-3 indicator --> */}
                    <div className="steps-flow--mobile">
                        <div className="steps-flow--mobile__container">
                            <span className="steps-flow--mobile__container__number">1</span>
                            <span className="steps-flow--mobile__container__dot"></span>
                        </div>
                        <div className="steps-flow--mobile__container">
                            <span className="steps-flow--mobile__container__number">2</span>
                            <span className="steps-flow--mobile__container__dot"></span>
                        </div>
                        <div className="steps-flow--mobile__container">
                            <span className="steps-flow--mobile__container__number steps-flow--mobile__container__number--last-step">3</span>
                            <span className="steps-flow--mobile__container__dot"></span>
                        </div>
                    </div>
                    {/* <!-- steps flow desktop --> */}
                    <div className="steps-description">
                        <div className="steps-description__container">
                            <div className="steps-description__container__flow">
                                <span className="steps-description__container__flow__number">1</span>
                                <span className="steps-description__container__flow__dot"></span>
                            </div>
                            <div className="steps-description__container__items">
                                <div className="steps-description__container__items__image">
                                    <img src={step1} alt="Watch your favorite videos all from one place" />
                                </div>
                                <div className="steps-description__container__items__text">
                                    <h2 className="steps-description__container__items__text__title">Watch your favorite videos all from one place</h2>
                                    <p className="steps-description__container__items__text__content">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
                                </div>
                            </div>
                        </div>

                        <div className="steps-description__container">
                            <div className="steps-description__container__flow">
                                <span className="steps-description__container__flow__number">2</span>
                                <span className="steps-description__container__flow__dot"></span>
                            </div>
                            <div className="steps-description__container__items">
                                <div className="steps-description__container__items__image">
                                    <img src={step2} alt="Upvote your favorites to save them for later" />
                                </div>
                                <div className="steps-description__container__items__text">
                                    <h2 className="steps-description__container__items__text__title">Upvote your favorites to save them for later</h2>
                                    <p className="steps-description__container__items__text__content">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
                                </div>
                            </div>
                        </div>


                        <div className="steps-description__container">
                            <div className="steps-description__container__flow">
                                <span className="steps-description__container__flow__number">3</span>
                                <span className="steps-description__container__flow__dot steps-description__container__flow__dot--last-dot"></span>
                            </div>
                            <div className="steps-description__container__items">
                                <div className="steps-description__container__items__image">
                                    <img src={step3} alt="Share the best moments with your best friends" />
                                </div>
                                <div className="steps-description__container__items__text">
                                    <h2 className="steps-description__container__items__text__title">Share the best moments with your best friends</h2>
                                    <p className="steps-description__container__items__text__content">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    render() {
        return (this.renderSteps());
    }
}
export default sectionSteps;
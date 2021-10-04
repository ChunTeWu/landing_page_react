import React, { Component } from 'react';
import Article1 from '../image/the-press-1.png';
import Article2 from '../image/the-press-2.png';
import Article3 from '../image/the-press-3.png';
class ArticleSection extends Component {
    renderArticle() {
        return (
            <section className="section section-articles">
                <div className="container">
                    <h2 className="section-articles__title">In The Press</h2>
                    <arcitle className="article">
                        <div className="article__image">
                            <img className="article__image__logo" src={Article1} alt="Article about Techcrunch" />
                        </div>
                        <div className="article__text">
                            <h2 className="article__text__title">Techcrunch</h2>
                            <p className="article__text__content">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
                            <a href="" className="article__text__link">Read more</a>
                        </div>
                    </arcitle>
                    <arcitle className="article">
                        <div className="article__image">
                            <img className="article__image__logo" src={Article2} alt="Article about The Verge" />
                        </div>
                        <div className="article__text">
                            <h2 className="article__text__title">The Verge</h2>
                            <p className="article__text__content">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
                            <a href="" className="article__text__link">Read more</a>
                        </div>
                    </arcitle>
                    <arcitle className="article">
                        <div className="article__image">
                            <img className="article__image__logo" src={Article3} alt="Article about Wired" />
                        </div>
                        <div className="article__text">
                            <h2 className="article__text__title">Wired</h2>
                            <p className="article__text__content">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
                            <a href="" className="article__text__link">Read more</a>
                        </div>
                    </arcitle>
                </div>
            </section>
        );
    }
    render() {
        return (this.renderArticle());
    }
}

export default ArticleSection;
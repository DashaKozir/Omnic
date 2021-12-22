import React from 'react';

const ArticlesCard = ({content, description, source, title, url, urlToImage}) => {
    return (
        <>
            <section className='articleCard_section'>
                <div>
                    <img className='articleCard_img' src={urlToImage} alt="Image"/>
                </div>
                <div>
                    <span className="articleCard_title"><a href={url}>{title}. </a></span>
                    <span className='articleCard_description'>{description}</span>
                    <p>{content}</p>
                    <p><i>Source: {source}</i></p>
                </div>
            </section>
        </>
    );
};

export default ArticlesCard;
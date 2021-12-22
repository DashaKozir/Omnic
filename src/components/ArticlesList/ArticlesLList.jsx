import React from 'react';
import ArticlesCard from "./ArticlesCard";

const ArticlesLList = ({articles, loadMore}) => {
    return (
        <>
            <section className='articleList_container'>
                <h1 className="title">Last news</h1>
                {articles.map(article => (
                    <ArticlesCard
                    key={article.id}
                    content={article.content}
                    description={article.description}
                    source={article.source.name}
                    title={article.title}
                    url={article.url}
                    urlToImage={article.urlToImage}
                    />
                ))}
                <button className='button' onClick={loadMore}>Load More</button>
            </section>
        </>
    );
};

export default ArticlesLList;
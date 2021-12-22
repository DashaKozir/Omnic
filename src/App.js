import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import ArticlesLList from "./components/ArticlesList/ArticlesLList";

const App = () => {
    const [allNews, setAllNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)

  useEffect(() => {
      if (fetching) {
          setLoading(true)
          axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=${currentPage}&apiKey=e8cb1e2d520c419bbba5b3e9e8e9484d`)
              .then(res => {
                  setLoading(false)
                  setAllNews([...allNews, ...res.data.articles])
                  setCurrentPage(prevState => prevState + 1)
              })
              .catch(() => setError('Error. The list of articles does not available'))
              .finally(() => setFetching(false))
      }
  }, [fetching])

    const loadMore = () => {
        setFetching(true)
    }

    return (
        <>
            <ArticlesLList loadMore={loadMore} articles={allNews}/>
        </>
    );
};

export default App;
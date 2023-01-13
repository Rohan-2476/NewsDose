import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const title = document.title = `${props.category} - NewsDose`

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=41a1a197fdd340c1917f7f3ccaaedab0&page=${page}&pageSize=${props.pageSize}`
    setIsLoading(true); //show spinner before the data is fetched first time
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setIsLoading(false)
    // console.log(parsedData);  <--- this provides real-time API data in the console
  }

  //it fetch real-time data from the API with async-await! (refactored in updateNews())
  useEffect(() => {
    updateNews();
  }, [])

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=41a1a197fdd340c1917f7f3ccaaedab0&page=${page + 1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    setIsLoading(true); //show spinner before the data is fetched first time
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setIsLoading(false)
  }

  return (
    <div className='container my-3'>
      <h1 className='text-center' style={{ marginTop: '70px' }}> <span className='title'>NewsDose</span> - Top <span className='category'> {props.category} </span> Headlines</h1>
      <hr />
      {/* render spinner component only when isLoading state is true */}
      {isLoading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        endMessage={!isLoading &&
          <p style={{ textAlign: 'center' }}>
            <b>Excess Dose of News for today!</b>
          </p>
        }
      >
        <div className="container">
          <div className="row my-3">
            {/* render the news data only when the isLoading state is false, else show loading/spinner */}
            {articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    title={element.title}
                    desc={element.description}
                    img={element.urlToImage}
                    url={element.url}
                    time={element.publishedAt}
                    author={element.author}
                    name={element.source.name}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={handlePrevClick}> &larr; Previous</button>
        <button disabled={(page + 1) > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-primary" onClick={handleNextClick}>Next &rarr;</button>
      </div> */}
    </div >
  )
}

export default News;
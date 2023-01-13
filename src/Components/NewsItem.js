import React from 'react'

const NewsItem = (props) => {

    const { title, desc, img, url, time, author, name } = props
    return (
        <div className='my-3'>
            <div className="card news_card">
                <img src={!img ? "http://msmschool.in/wp-content/themes/msm/assets/img/noimage-420x273.jpg" : img} className="card-img-top card_img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 60)}...</h5>
                    <small className="fw-bold text-secondary">{name}</small>
                    <p className="card-text">{desc}</p>
                    <a rel="noreferrer" href={url} target='_blank' className="btn btn-sm btn-primary read_more_btn">Read more</a>
                </div>
                <p className="card-text m-2"><small className="text-muted">By {!author ? 'Unknown' : author} at {new Date(time).toGMTString()}</small></p>
            </div>
        </div>
    )
}


export default NewsItem
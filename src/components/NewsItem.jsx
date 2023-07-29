import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
  <img src={!imageUrl?"https://images.cnbctv18.com/wp-content/uploads/2023/03/AMD-Ryzen-2-1019x573.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
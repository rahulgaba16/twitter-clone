import React, {PropTypes} from 'react'
import * as feedData from './feed.json'
import './Feed.scss'
import FontAwesome from 'react-fontawesome'

const TOTAL_FEED_DATA = feedData.total

const FEED_DATA = feedData.feeds

const Feed = (props) => {
  return (
    <div className='feed-container py3'>
      <div className='card clearfix'>
        {TOTAL_FEED_DATA.map((total, i) => (
          <div className={'sm-col-3 left text-center total-data py2 ' + (i === 0
            ? 'active'
            : null)} key={i}>
            <p className='light-text color-light-grey'>{total.heading}</p>
            <p className='total-value bold'>{total.value}</p>
          </div>
        ))}
      </div>
      <div className='card mt3 clearfix'>
        {FEED_DATA.map((feed, i) => (<FeedDetails feed={feed} key={i}/>))}
      </div>
    </div>
  )
}

const FeedDetails = ({feed}) => {
  return (
    <div className='p3 clearfix feed'>
      <div className='sm-col-1 left'>
        <span className="circle-wrapper ">
          <img src={feed.imgUrl} alt={feed.userName}/>
        </span>
      </div>
      <div className='sm-col-11 left'>
        <p className=''>
          <span className='bold'>{feed.fullName}</span>
          <span className='color-light-grey light-text'>{' '}@{feed.userName}</span>
          <span className='color-light-grey light-text right'>{feed.timeAgo}</span>
        </p>
        {feed.type === 'text'
          ? <p className='py1 font-weight-light'>{feed.tweet}</p>
          : <video className='sm-col-12 py2' controls src={feed.tweet}/>}
        <div className='action-buttons'>
          <FontAwesome className=' cursor color-light-grey' name='share'/>
          <FontAwesome className=' cursor color-light-grey px2' name='star'/>
          <FontAwesome className=' cursor color-light-grey' name='refresh'/> {feed.syncVal > 0
            ? <span className='color-light-grey font-weight-light'>{feed.syncVal}</span>
            : null}
          <FontAwesome className=' cursor color-light-grey pl2' name='ellipsis-h'/>
          <FontAwesome className=' cursor color-light-grey right' name='arrows-alt'/>
        </div>
      </div>
    </div>
  )
}
FeedDetails.propTypes = {
  feed: PropTypes.object
}

export default Feed

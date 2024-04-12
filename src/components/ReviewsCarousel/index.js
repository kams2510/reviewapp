// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewCar extends Component {
  state = {currentReviewIndex: 0}

  leftBtn = () => {
    const {currentReviewIndex} = this.state

    if (currentReviewIndex > 0) {
      this.setState(prevState => ({
        currentReviewIndex: prevState.currentReviewIndex - 1,
      }))
    }
  }

  rightBtn = () => {
    const {reviewsList} = this.props
    const {currentReviewIndex} = this.state
    if (currentReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentReviewIndex: prevState.currentReviewIndex + 1,
      }))
    }
  }

  render() {
    const {currentReviewIndex} = this.state
    const {reviewsList} = this.props
    const currentReview = reviewsList[currentReviewIndex]
    return (
      <div className="container">
        <div className="review-card">
          <button type="button" onClick={this.leftBtn} testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="profile-container">
            <h1>Reviews</h1>
            <img src={currentReview.imgUrl} alt={currentReview.username} />
            <p>{currentReview.username}</p>
            <p>{currentReview.companyName}</p>
            <p>{currentReview.description}</p>
          </div>
          <button type="button" onClick={this.rightBtn} testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewCar

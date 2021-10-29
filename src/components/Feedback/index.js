// Write your React code here.
import {Component} from 'react'

import './index.css'

const FeedbackEmoji = props => {
  const {eachResource, showThanksFeedbackContainer} = props
  const {name, imageUrl} = eachResource

  const showThanksGreetings = () => {
    showThanksFeedbackContainer()
  }

  return (
    <li className="each-emoji">
      <img
        src={imageUrl}
        alt={name}
        className="each-emoji-img"
        onClick={showThanksGreetings}
      />
      <p className="each-emoji-name"> {name} </p>
    </li>
  )
}

class Feedback extends Component {
  state = {
    isFeedbackShown: false,
  }

  showThanksFeedbackContainer = () => {
    this.setState({isFeedbackShown: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackShown} = this.state
    let feedbackThanksContainer
    if (isFeedbackShown) {
      feedbackThanksContainer = (
        <div className="feedback-summary-container">
          <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
          <h1> Thank You </h1>
          <p className="feedback-response-text">
            {' '}
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      )
    } else {
      feedbackThanksContainer = (
        <div className="feedback-question-container">
          <h1 className="feedback-question-heading">
            {' '}
            How satisfied are you with our customer support performance?{' '}
          </h1>
          <ul className="feedback-emoji-container">
            {emojis.map(eachResource => (
              <FeedbackEmoji
                key={eachResource.id}
                eachResource={eachResource}
                showThanksFeedbackContainer={this.showThanksFeedbackContainer}
              />
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="feedback-bcg-container">{feedbackThanksContainer}</div>
    )
  }
}

export default Feedback

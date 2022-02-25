// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="even-odd-page-bg-container">
        <div className="even-odd-page-container">
          <div className="even-odd-count-card-container">
            <h1 className="count-heading">Count {count}</h1>
            <p className="count-sub-heading">Count is {displayText}</p>
            <button
              type="button"
              onClick={this.onClickIncrement}
              className="increment-button"
            >
              Increment
            </button>
            <p className="description">
              *Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

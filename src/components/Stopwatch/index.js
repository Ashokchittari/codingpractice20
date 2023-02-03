import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {count: 0, isTimerStarted: false}

  componentDidMount() {
    this.timerId = setInterval(this.updateCount, 1000)
  }

  updateCount = () => {
    const {isTimerStarted} = this.state
    if (isTimerStarted) {
      this.setState(prev => ({count: prev.count + 1}))
    }
  }

  startCount = () => {
    const {isTimerStarted} = this.state
    this.setState({isTimerStarted: true})
    if (isTimerStarted) {
      clearInterval(this.timerId)
    } else {
      clearInterval(this.timerId)
      this.componentDidMount()
    }
  }

  stopCount = () => {
    this.setState({isTimerStarted: false})
    clearInterval(this.timerId)
  }

  reset = () => {
    this.setState({count: 0, isTimerStarted: false})
    clearInterval(this.timerId)
  }

  render() {
    const {count, isTimerStarted} = this.state
    const seconds = Math.floor(count % 60)
    const minutes = Math.floor(count / 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div className="app-bg">
        <h1>StopWatch</h1>
        <div className="stopwatch-container">
          <p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            Timer
          </p>
          <h1>{`${stringifiedMinutes}:${stringifiedSeconds}`}</h1>
          <button
            className="button-1"
            type="button"
            onClick={this.startCount}
            disabled={isTimerStarted}
          >
            Start
          </button>
          <button className="button-2" type="button" onClick={this.stopCount}>
            Stop
          </button>
          <button className="button-3" type="button" onClick={this.reset}>
            Restart
          </button>
        </div>
      </div>
    )
  }
}
export default Stopwatch

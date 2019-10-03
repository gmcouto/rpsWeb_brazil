import React from 'react';

export class RPSApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      player1Throw: "rock",
      player2Throw: "rock"
    };
  }

  showInvalid() {
    this.setState({
      result: "Invalid Input"
    })
  }

  p1Wins() {
    this.setState({
      result: "Player 1 Wins"
    })
  }

  p2Wins() {
    this.setState({
      result: "Player 2 Wins"
    })
  }

  tie() {
    this.setState({
      result: "Tie"
    })
  }

  observer() {
    return {
      invalid: () => {
        this.showInvalid()
      },
      p1wins: () => {
        this.p1Wins()
      },
      p2wins: () => {
        this.p2Wins()
      },
      tie: () => {
        this.tie()
      }
    }
  };

  render() {
    return (
      <div>
        <p className='result'>{this.state.result}</p>
        <section>

          <input type="text" className='player1Throw'
                 value={this.state.player1Throw}
                 onChange={event => {
                   this.setState({player1Throw: event.target.value})
                 }}
          />

          <input type="text" className='player2Throw'
                 value={this.state.player2Throw}
                 onChange={event => {
                   console.log(event)
                   this.setState({player2Throw: event.target.value})
                 }}
          />
        </section>
        <button
          onClick={() => this.props.requests.play(this.state.player1Throw, this.state.player2Throw, this.observer())}>Play
        </button>
      </div>
    );
  }

  //        <div>Rock, Papers, Scissors</div>
}

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
        <section>
          <select value={this.state.player1Throw}
                  onChange={(e) => this.setState({player1Throw: e.target.value})}>
            <option value="rock">Rock</option>
            <option value="paper">Papers</option>
            <option value="scissors">Scissors</option>
          </select>

          <select value={this.state.player2Throw}
                  onChange={(e) => this.setState({player2Throw: e.target.value})}>
            <option value="rock">Rock</option>
            <option value="paper">Papers</option>
            <option value="scissors">Scissors</option>
          </select>
        </section>

        <div>{this.state.result}</div>
        <button
          onClick={() => this.props.requests.play(this.state.player1Throw, this.state.player2Throw, this.observer())}>Click
        </button>
      </div>
    );
  }

  //        <div>Rock, Papers, Scissors</div>
}

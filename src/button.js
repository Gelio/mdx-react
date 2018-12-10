import React from 'react';

export default class Button extends React.Component {
  state = {
    hasBeenClicked: false,
  };

  render() {
    const { hasBeenClicked } = this.state;

    return (
      <button
        onClick={this._onButtonClicked}
        disabled={hasBeenClicked}
        style={{ fontSize: 100 }}
      >
        Click me
      </button>
    );
  }

  _onButtonClicked = () => {
    this.setState({
      hasBeenClicked: true,
    });
  };
}

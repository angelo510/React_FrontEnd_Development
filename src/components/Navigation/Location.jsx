import React, { Component } from 'react';


class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(this.handleSuccess)
  }

  handleSuccess = response => {
    this.setState({ city: response.city });
  }

  render() {
    return (
      <button
        className={this.props.className}
        id={this.props.id} >
        <span className="icon-map" />
        <span>{this.state.city ? <a>{this.state.city}</a> : null} </span>
      </button>

    )
  }
}

export default Location

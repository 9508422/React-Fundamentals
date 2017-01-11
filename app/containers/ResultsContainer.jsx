import React, { Component, PropTypes } from 'react';
import Results from '../components/Results';
import { battle } from '../utils/githubHelpers';

class ResultsContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      scores: [],
    };
  }

  async componentDidMount() {
    try {
      const scores = await battle(this.props.location.state.playersInfo);
      this.setState({
        scores,
        isLoading: false,
      });
    } catch (error) {
      console.error('Error in ResultsContainer: ', error);
    }
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}
      />
    );
  }
}

ResultsContainer.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      playersInfo: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ResultsContainer;

import React, { Component, PropTypes } from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      scores: [],
    };
  }

  componentDidMount() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then((s) => {
        this.setState({
          scores: s,
          isLoading: false,
        });
      });
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

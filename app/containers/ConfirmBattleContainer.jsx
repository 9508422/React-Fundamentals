import React, { Component, PropTypes } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayersInfo } from '../utils/githubHelpers';

class ConfirmBattleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      playersInfo: [],
    };
  }

  async componentDidMount() {
    const { query } = this.props.location;
    try {
      const players = await getPlayersInfo([query.playerOne, query.playerTwo]);
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]],
      });
    } catch (error) {
      console.error('Error in ConfirmBattleContainer: ', error);
    }
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      },
    });
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={() => this.handleInitiateBattle()}
        playersInfo={this.state.playersInfo}
      />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

ConfirmBattleContainer.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({
      playerOne: PropTypes.string.isRequired,
      playerTwo: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ConfirmBattleContainer;

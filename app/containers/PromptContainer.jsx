import React, { Component, PropTypes } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  handleSubmitUser(event) {
    event.preventDefault();
    this.setState({
      username: '',
    });

    const { playerOne } = this.props.routeParams;
    if (playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne,
          playerTwo: this.state.username,
        },
      });
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`);
    }
  }

  handleUpdateUser(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      <Prompt
        onSubmitUser={event => this.handleSubmitUser(event)}
        onUpdateUser={event => this.handleUpdateUser(event)}
        header={this.props.route.header}
        username={this.state.username}
      />
    );
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

PromptContainer.defaultProps = {
  routeParams: {
    playerOne: '',
  },
};

PromptContainer.propTypes = {
  routeParams: PropTypes.shape({
    playerOne: PropTypes.string,
  }).isRequired,
  route: PropTypes.shape({
    header: PropTypes.string.isRequired,
  }).isRequired,
};

export default PromptContainer;

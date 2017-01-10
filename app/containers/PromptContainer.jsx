import React, { Component, PropTypes } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleSubmitUser = this.handleSubmitUser.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
  }

  handleSubmitUser(event) {
    event.preventDefault();
    this.setState({
      username: '',
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        },
      });
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`);
    }
  }

  handleUpdateUser(event) {
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
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

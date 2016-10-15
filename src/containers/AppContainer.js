import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavContainer from './NavContainer';
import DoctorsContainer from './DoctorsContainer';

import { initEnvironment } from '../actions/EnvironmentActions';
import { initAuth } from '../actions/AuthedActions';
import { initNavigator } from '../actions/NavigatorActions';

class AppContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initEnvironment());
    dispatch(initAuth());
    dispatch(initNavigator());
  }

  renderContent() {
    const { path } = this.props;
    switch (path[0]) {
      case 'listings':
        return <DoctorsContainer />;
      case 'me':
        return null;
        // return <MeContainer />;
      default:
        return null;
    }
  }
  render() {
    const { height, isMobile, width } = this.props;
    if (isMobile) {
      return (
        <div className="mobile" style={{ height: `${height}px`, width: `${width}px`}}>
          {this.renderContent()}
          <NavContainer />
        </div>
      );
    }

    return (
      <div>
        <NavContainer />
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { environment, navigator } = state;
  const { height, isMobile, width } = environment;
  const { path } = navigator.route;
  return {
    height,
    isMobile,
    path,
    width,
  };
}

export default connect(mapStateToProps)(AppContainer);

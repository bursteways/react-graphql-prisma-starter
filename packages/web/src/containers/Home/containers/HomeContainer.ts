import { compose } from 'redux';
import { connect } from 'react-redux';

import { Home } from '../components/Home';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const reduxData = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export const HomeContainer = compose(
  reduxData,
)(Home);

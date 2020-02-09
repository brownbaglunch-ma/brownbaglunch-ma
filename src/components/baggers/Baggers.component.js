import React, { Component } from 'react';
import fetchBaggers from '../../actions/baggersAction'
import { connect } from 'react-redux';

class Baggers extends Component {
  componentDidMount() {
    const p = this.props;
    p.fetchBaggers();
  }
  
  render() {
    return (
      <div>Baggers component</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    baggers: state.baggers
  }
};
export default connect(mapStateToProps, { fetchBaggers })(Baggers)

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
      <>
      <header className="masthead">
        
      </header>

      <footer className="bg-light py-5">
          <div className="container">
              <div className="small text-center text-muted">Copyright &copy; 2020 - Brown Bag Lunch Morocco</div>
          </div>
      </footer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    baggers: state.baggers
  }
};
export default connect(mapStateToProps, { fetchBaggers })(Baggers)

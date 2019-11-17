import React, { Component } from 'react';
import { getShelfItems } from '../redux/actions/shelf';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList'

class Item extends Component {

  componentDidMount() {
    let shelf_id = this.props.match.params.shelf_id
    this.props.getShelfItems(shelf_id);
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <ItemList items={this.props.items} />
    }
  }


  render() {
    return (
      <div>{this.handleLoading()}</div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state, 'state in Item')
  return {
    items: state.shelf.items,
    loading: state.shelf.loading
  }
}

export default connect(mapStateToProps, { getShelfItems })(Item)
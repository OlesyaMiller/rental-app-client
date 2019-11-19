import React, { Component } from 'react'
import RentItemForm from '../components/RentItemForm';
import { getItem, addItemToCart } from '../redux/actions/shelf';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class ItemCardDisplay extends Component {

  componentDidMount() {
    const { shelf_id, id } = this.props.match.params
    this.props.getItem(shelf_id, id)
  }

  // state = {
  //   redirect: false
  // }

  // redirectDisplayComponent = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     this.props.history.push('/cart')
  //   }
  // }

  rented = rented => {
    if (rented === false) {
      return (
        <>
          <h3>Available</h3>
          <RentItemForm item={this.props.item} redirectDisplayComponent={this.redirectDisplayComponent} addItemToCart={this.props.addItemToCart}/>
        </>
      )
    } else {
      return <>Unavailable</>
    }
  }


  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      let {name, price, rented} = this.props.item
      return (
        <>
          <h1>{name}</h1>
          <p>{price}</p>
          <>{this.rented(rented)}</>
        </>  
      )
    }
  }

  render() {
    return (
      <>
        <div id="shelf">Shelf is here</div>
        <div id="main-content">
          {this.handleLoading()}
          {/* {this.renderRedirect()} */}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    item: state.shelf.item,
    loading: state.shelf.loading
  }
}

export default connect(mapStateToProps, { addItemToCart, getItem })(ItemCardDisplay);
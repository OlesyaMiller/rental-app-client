const API_URL = process.env.REACT_APP_API_URL;

export function getShelves() {
  return (dispatch) => {
    dispatch({ type: 'LOADING'})
    fetch(`${API_URL}/shelves`)
      .then(response => response.json())
      .then(shelves => dispatch({ type: 'GET_SHELVES', payload: shelves }))
    }
  }

export const getShelfItems = shelf_id => {
  return (dispatch) => {
    dispatch({ type: 'LOADING'})
    fetch(`${API_URL}/shelves/${shelf_id}/items`)
      .then(response => response.json())
      .then(items => dispatch({ type: 'GET_SHELF_ITEMS', payload: items })
    )
  }
}

export function getItem(shelf_id, id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`${API_URL}/shelves/${shelf_id}/items/${id}`)
      .then(response => response.json())
      .then(item => dispatch({ type: 'GET_ITEM', payload: item })
    )
  }
}

export function addItemToCart(id, cart) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`${API_URL}/carts/${id}/items`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cart })
    })
      .then(response => response.json())
      .then(cart => dispatch({ type: 'ADD_ITEM_TO_CART', payload: cart })
      )
  }
}

export function getUserShelfItems(user_id, shelf_id) {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch(`${API_URL}/users/${user_id}/shelves/${shelf_id}/items`)
      .then(response => response.json())
      .then(items => dispatch({ type: 'GET_USER_SHELF_ITEMS', payload: items})
    )
  }
}

export function addItemToShelf(user_id, shelf_id, item) {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch(`${API_URL}/users/${user_id}/shelves/${shelf_id}/items`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item })
    })
      .then(response => response.json())
      .then(item => dispatch({ type: 'ADD_ITEM_TO_SHELF', payload: item })
    )}
  }

  export function updateItem(user_id, shelf_id, item) {
    return(dispatch) => {
      dispatch({type: 'LOADING'})
      fetch(`${API_URL}/users/${user_id}/shelves/${shelf_id}/items/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
      })
        .then(response => response.json())
        .then(item => dispatch({ type: 'UPDATE_ITEM', payload: item })
      )}
  }
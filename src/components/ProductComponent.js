import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProducts } from '../redux/ActionCreators';

function RenderProduct() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  const renderList = products.map((product) => {
    // const { id, title, image, price, category } = product;
    return (
        <div key={product.id} className="col-sm-3 col-md-3 four column wide">
          <Link to={`/productdetails/${product.id}`} style={{ textDecoration: "none", color: "#000" }}>
            <div className='ui link cards'>
              <div className='card mb-4'>
                <div className='image'>
                  <img src={product.image} alt={product.title} />
                </div><hr />
                <div className="content p-2">
                  <div className="header" style={{ fontSize: "14px", fontWeight: "bold" }}>{product.title}</div>
                  <div className="meta price">$ {product.price}</div>
                  <div className="meta">{product.category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
    )
  })

  return (
    <>
      {renderList}
    </>
  )
}

class Product extends Component {
  render() {
    return (
      <div>
        <div className='container py-3'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1>Product</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <RenderProduct />
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
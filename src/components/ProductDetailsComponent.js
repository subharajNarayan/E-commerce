import React, { Component, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { getSingleProduct,addItem, delItem } from '../redux/ActionCreators';

function RenderProductDetails() {

  const dispatch = useDispatch();

  //Now we need product id which is pass from the Productcomponent page
  let { id } = useParams();

  let { product } = useSelector((state) => state.products);
  const { image, title, price, category, description } = product;

  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [id]);

  // CART START Which we have to display in Cart icon
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product))
      setCartBtn("Remove from Cart")
    }else{
      dispatch(delItem(product))
      setCartBtn("Add to Cart")
    }
  }
  return (
    <>
      <div className='ui grid container'>
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href='/product' style={{ textDecoration: "none" }}>PRODUCT</a>
            </BreadcrumbItem>
            <BreadcrumbItem>{title}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        {Object.keys(product).length === 0 ? (
          <div className="spinner-grow spinner-grow-sm">&nbsp;</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="middle aligned row">
                <div className="column lp col-lg-5 product">
                  <img className="ui fluid image" src={image} alt={title} width='100%' />
                </div>
                <div className="column rp col-lg-6">
                  <div className='product-detail'>
                    <div className="social_icons">
                      <div className="cart-heart">
                        <span className="cart-heart-only">
                          <i className="fas fa-heart"></i>
                        </span>
                      </div>
                    </div>
                    <h2>{title}</h2>
                    <div className='d-flex pt-2 pb-3'>
                      <div className='tag-triangle'></div>
                      <div className='hole'></div>
                      <div className='tag-rectangle'>
                        <h3><a className="ui teal tag label">${price}</a></h3>
                      </div>
                    </div>
                    <h3 className="ui brown block header">{category}</h3>
                    <p>{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon"></i>
                      </div>
                      <div className="visible content">
                        <Button className='btn btn-outline-primary my-3' onClick={() => handleCart(product)}>{cartBtn}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

// class ProductDetails extends Component {
//   render() {
//     return (
//       <div className='main'>
//         <div className='container'>
//           <div className='breadcrumn-content'>
//             <Breadcrumb>
//               <BreadcrumbItem><a href='/product'>PRODUCT</a></BreadcrumbItem>
//               <BreadcrumbItem>{title}</BreadcrumbItem>
//             </Breadcrumb>
//           <div>
//         </div>
//       </div>
//     )
//   }
// }

class ProductDetails extends Component {
  render() {
    return (
      <div className='main'>
        <div className='container'>
          <RenderProductDetails />
        </div>
      </div>
    )
  }
}

export default ProductDetails;

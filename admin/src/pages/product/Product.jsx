import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { updateProduct } from "../../redux/apiCalls";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [updatedProduct, setUpdatedProduct] = useState({});

  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(productId, updatedProduct);
  };

  const handleUpdate = (id, product) => {
    updateProduct(id, product, dispatch);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: value,
    });
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price:</span>
              <span className="productInfoValue">{product.price}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Category:</span>
              <span className="productInfoValue">
                {product.categories.join(", ")}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">
                {product.inStock ? "Yes" : "No"}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Size:</span>
              <span className="productInfoValue">{product.size}</span>
            </div>
            <div className="">
              <span className="productInfoKey">Description: </span>
              <span className="productInfoValue">{product.desc}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm" onSubmit={handleSubmit}>
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder={product.title}
              name="title"
              onChange={handleChange}
              className="productInput"
            />
            <label>In Stock</label>
            <select name="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Price</label>
            <input
              type="text"
              placeholder={product.price}
              name="price"
              onChange={handleChange}
            />
            <label>Category</label>
            <input
              type="text"
              placeholder={product.categories}
              name="categories"
              onChange={handleChange}
            />
            <label>Size</label>
            <input
              type="text"
              placeholder={product.size}
              name="size"
              onChange={handleChange}
            />
            <label>Description</label>
            <textarea
              type="text"
              placeholder={product.desc}
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img className="productUploadImg" src={product.img} alt="" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" type="onSubmit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

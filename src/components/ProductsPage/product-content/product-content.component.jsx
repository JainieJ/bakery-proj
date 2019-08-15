import React, { Component } from "react";
import { connect } from "react-redux";
import { client } from "../../../context/contentful";
import ProductList from "../product-list/product-list.component";
import Title from "../../Title";
import ProductFilter from "../product-filter/product-filter.component";
import { updateProducts } from "./../../../redux/filter/filter.actions";

class ProductContent extends Component {
  state = {};
  componentDidMount() {
    const { updateProducts } = this.props;
    client
      .getEntries({
        content_type: "bakery"
      })
      .then(response => {
        const formatedData = response.items.map(product => ({
          id: product.sys.id,
          ...product.fields,
          image: product.fields.image.fields.file.url
        }));
        updateProducts(formatedData);
      })
      .catch(console.error);
  }
  render() {
    return (
      <div className="section py-5 grey-bcg">
        <div className="container">
          <div className="row">
            <div className="col mx-auto text-center">
              <Title text="our products" />
            </div>
          </div>
          <ProductFilter />
          <ProductList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateProducts: products => dispatch(updateProducts(products))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductContent);

import React, { Component } from "react";
import { connect } from "react-redux";
import { client } from "./../context/contentful";
import { updateProducts } from "./../redux/filter/filter.actions";
import productsBcg from "../img/productsBcg.jpg";
import Hero from "./../components/Hero";
import ProductContent from "../components/ProductsPage/product-content/product-content.component";
import WithSpinner from "./../components/with-spinner/with-spinner.component";

const ProductContentWithSpinner = WithSpinner(ProductContent);

class ProductsPage extends Component {
  state = {
    loading: true
  };
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
        this.setState({ loading: false });
      })
      .catch(console.error);
  }
  render() {
    const { loading } = this.state;
    return (
      <>
        <Hero img={productsBcg} />
        <ProductContentWithSpinner isLoading={loading} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateProducts: products => dispatch(updateProducts(products))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductsPage);

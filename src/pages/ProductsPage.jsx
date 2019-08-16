import React, { Component } from "react";
import { connect } from "react-redux";
import { client } from "./../context/contentful";
import { Route } from "react-router-dom";
import { updateProducts } from "./../redux/filter/filter.actions";
import { setProducts } from "./../redux/products/products.actions";
import productsBcg from "../img/productsBcg.jpg";
import Hero from "./../components/Hero";
import ProductContent from "../components/ProductsPage/product-content/product-content.component";
import WithSpinner from "./../components/with-spinner/with-spinner.component";
import SingleProductContent from "./../components/ProductsPage/single-product/single-product-content.component";

const ProductContentWithSpinner = WithSpinner(ProductContent);
const SingleProductContentWithSpinner = WithSpinner(SingleProductContent);

class ProductsPage extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    const { updateProducts, setProducts } = this.props;
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
        setProducts(formatedData);
        updateProducts(formatedData);
        this.setState({ loading: false });
      })
      .catch(console.error);
  }
  render() {
    const { loading } = this.state;
    const { match } = this.props;
    return (
      <>
        <Hero img={productsBcg} />
        <Route
          path={`${match.path}`}
          exact
          render={routeProps => (
            <ProductContentWithSpinner isLoading={loading} {...routeProps} />
          )}
        />
        <Route
          path={`${match.path}/:id`}
          exact
          render={routeProps => (
            <SingleProductContentWithSpinner
              isLoading={loading}
              {...routeProps}
            />
          )}
        />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateProducts: products => dispatch(updateProducts(products)),
  setProducts: products => dispatch(setProducts(products))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductsPage);

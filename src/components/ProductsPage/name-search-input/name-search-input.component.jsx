import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFilterSearch } from "../../../redux/filter/filter.selectors";
import { filterByName } from "../../../redux/filter/filter.actions";
import {
  NameSearchInputContainer,
  NameSearchLabelContainer
} from "./name-search-input.styles";

const NameSearchInput = ({ search, filterByName }) => {
  return (
    <div>
      <NameSearchLabelContainer htmlFor="search">
        search products
      </NameSearchLabelContainer>
      <NameSearchInputContainer
        type="text"
        id="search"
        name="search"
        value={search}
        onChange={e => filterByName(e.target)}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  search: selectFilterSearch
});

const mapDispatchToProps = dispatch => ({
  filterByName: eventTarget => dispatch(filterByName(eventTarget))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameSearchInput);

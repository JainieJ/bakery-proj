import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFilterGlutenFree } from "../../../redux/filter/filter.selectors";
import { filterByGluten } from "../../../redux/filter/filter.actions";
import {
  CheckBoxLabelContainer,
  CheckBoxInputContainer,
  CheckMarkContainer
} from "./checkbox-input.styles";

const CheckBoxInput = ({ glutenFree, filterByGluten }) => {
  console.log("CheckBoxInput is rerendering");
  return (
    <div>
      <CheckBoxLabelContainer htmlFor="glutenFree">
        gluten Free
        <CheckBoxInputContainer
          type="checkbox"
          name="glutenFree"
          id="glutenFree"
          checked={glutenFree && true}
          onChange={e => filterByGluten(e.target)}
        />
        <CheckMarkContainer />
      </CheckBoxLabelContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  glutenFree: selectFilterGlutenFree
});

const mapDispatchToProps = dispatch => ({
  filterByGluten: eventTarget => dispatch(filterByGluten(eventTarget))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckBoxInput);

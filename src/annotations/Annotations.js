import React, { Component } from "react";
import Annotationitem from "./Annotationitem.js";
import PropTypes from "prop-types";

export class Annotations extends Component {
  render() {
    return this.props.annotationlist.map(annotation => (
      <Annotationitem key={annotation.id} annotation={annotation} />
    ));
  }
}
Annotations.propTypes = {
  annotationlist: PropTypes.array.isRequired
};

export default Annotations;

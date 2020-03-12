import React from 'react';
import { BodyWrapper } from "../emotion/shared";
import { connect } from "react-redux";


const Owner = () => {
  return (
    <BodyWrapper>
      Owner
    </BodyWrapper>
  );
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Owner)

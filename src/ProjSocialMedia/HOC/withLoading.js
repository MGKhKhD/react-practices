import React from "react";

const isEmpty = propName => {
  const result =
    propName === null ||
    propName === undefined ||
    (propName.hasOwnProperty("length") && propName.length === 0) ||
    (propName.constructor === Object && Object.keys[propName].length === 0);
  return result;
};

const withLoading = propName => WC => {
  return class extends React.Component {
    render() {
      return isEmpty(this.props[propName]) ? (
        <div>
          <h2>loading....</h2>
        </div>
      ) : (
        <WC {...this.props} />
      );
    }
  };
};

export default withLoading;

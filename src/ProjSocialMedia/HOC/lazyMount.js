import React from "react";

const lazyMount = importComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { component: null };
    }

    componentDidMount() {
      importComponent().then(prop =>
        this.setState({
          component: prop.default
        })
      );
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default lazyMount;

import React from 'react';

const LazyMount = (importComponent) => {
    return (class extends React.Component{
        state={component: null};

        componentDidMount(){
            importComponent().then(prop=> this.setState({component: prop.default}))
        }

        render(){
            const C = this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    });
};

export default LazyMount;
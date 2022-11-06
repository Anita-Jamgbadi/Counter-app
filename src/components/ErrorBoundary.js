import React, { Component } from 'react'

//Catches Errors and displays a fallback UI
class ErrorBoundary extends Component {
    
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }

    static
    getDerivedStateFromError(error) {
        //Update state so that it can render
        //the fallback UI
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    } 

    render() {
        if (this.state.hasError) {
            return (
                <section>Error 404</section>
            )
        }
        return this.props.children;
    }

}

export default ErrorBoundary;
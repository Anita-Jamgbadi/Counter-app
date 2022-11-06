import React, { Component } from 'react'
import ErrorPage from './error';

//Catches Errors and displays a fallback UI
class ErrorBoundary extends Component {
    
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }

    
    static getDerivedStateFromError(error) {
        //Update state so that it can render
        //the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    } 

    render(error) {
        if (this.state.hasError) {
            return (
                <section>
                    <ErrorPage error={error}/>
                </section>
            )
        }
        return this.props.children;
    }

}

export default ErrorBoundary;
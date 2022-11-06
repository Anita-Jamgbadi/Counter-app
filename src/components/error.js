import React from "react";
import './error.css'

function ErrorPage(error) {
    return (
        <section>
            <div className="container">
                <h2>Error 404!</h2>
                <p>Sorry, there's been an error</p>
                <h3>Error: {error}</h3>
            </div>
        </section>
    )
}

export default ErrorPage;
import React from 'react'

import Footer from '../shared/Footer'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1> Welcome in App Starter</h1>
                <Footer footerCopy="By Luca Pulina" />
            </div>
        )
    }
}

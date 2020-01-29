import React, { Component } from 'react'
import TravelerContext from '../../context/TravlerContext'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

export default class ListItemDetails extends Component {
    state = {
        loading: false
    }
    static contextType = TravelerContext
    componentDidMount() {
        this.setState({ error: null, loading: true })
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1000)
    }
    render() {
        const { loading } = this.state
        return (
            <div>
                {loading ? <LoadingSpinner />: <h1>Hello From the List details</h1>}
            </div>
        )
    }
}
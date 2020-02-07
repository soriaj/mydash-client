import React, { Component } from 'react'
import TravelerContext from '../../context/TravlerContext'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import config from '../../config'

export default class ListItemDetails extends Component {
    state = {
        loading: false,
        error: null,
        items: []
    }

    static contextType = TravelerContext

    loadAllData = async (listId) => {
        try {
            let response = await fetch(`${config.API_ENDPOINT}/lists_items`)
            let data = await response.json()
            this.setState({ items: data.filter(list => list.list_id === parseInt(listId) ? list : '') })
        }
        catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        const { list_id } = this.props.match.params
        this.loadAllData(list_id)
    }
 
    componentDidUpdate(prevProps) {
        const { list_id } = this.props.match.params
        if(prevProps.match.params.list_id !== list_id) {
            this.loadAllData(list_id)
        }
    }

    renderListsItemDetails() {
        const { loading, items } = this.state
        return (
            <>
            {loading 
                ? <LoadingSpinner /> 
                : (
                    <ul>
                        {items.map(cur => (
                            <li key={cur.id}>{cur.name}</li>
                        ))}
                    </ul>
                )
            }
            </>
        )
    }

    renderError() {
        return (
            <div className='error'>Error, page could not load. Try again later.</div>
        )
    }
    render() {
        // const { loading, error, items } = this.state
        const { error } = this.state
        return (
            <article>
                {error ? this.renderError() : this.renderListsItemDetails() }
            </article>
        )
    }
}
import React, { Component } from 'react'
import { FaPlus, FaPencilAlt, FaRegCheckSquare, FaRegSquare } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import config from '../../config'
import './ListItemDetails.css'

export default class ListItemDetails extends Component {
    state = {
        loading: false,
        error: null,
        items: [],
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

    // Update List Item if it has been completed or not
    completedListItem = (todo) => {
        const udpateTask = {
            ...todo,
            isComplete: !todo.isComplete
        }
        // Make API call to update id with update tasks
        this.callItemAPI(todo.id, udpateTask)
        this.setState({ items: this.state.items.map(item => (item.id !== todo.id) ? item : udpateTask ) })
    }

    callItemAPI = async (listId, udpateTask) => {
        try {
            await fetch(`${config.API_ENDPOINT}/lists_items/${listId}`, {
                method: 'PATCH',
                body: JSON.stringify(udpateTask),
                headers: {
                    'content-type': 'application/json',
                }
            })
            .then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
    }

    addListItem() {
        alert('add item clicked')
    }
    editListItemDetailsPage = ev => {
        // console.log(ev)
        // this.props.history.push(`/edit/${this.props.match.params.list_id}`)
        // console.log(`You clicked: `, this.props.list_id)
    }

    getListsTitle() {
        const { lists } = this.context
        const { list_id } = this.props.match.params
        const listName = lists.filter(list => list.id === parseInt(list_id)).map(item => item.name)
        return listName
    }
    renderListsItemDetails() {
        const { loading, items } = this.state

        return (
            <>
            {loading 
                ? <LoadingSpinner /> 
                : (
                    <>
                    <div className='list-details-title'>
                        <h3>{this.getListsTitle()}</h3>
                    </div>
                    <div className='list-container'>
                        <div className='add-list-item'>
                            <FaPlus className='fa-plus-list' onClick={this.addListItem}/><span className='fa-plus-title'>{'Add Item'}</span>
                        </div>
                        <ul>
                            {items.map((todo, idx) => (
                                <li key={todo.id} id={todo.id} className={`list-items-container`}>
                                    <div className={`check-box`} onClick={() => this.completedListItem(todo)}>{todo.isComplete ? <FaRegCheckSquare className='fa-reg-check'/> : <FaRegSquare className='fa-reg-square'/>}</div>
                                    <div className={`list-items-content`}>
                                        <p className={`${todo.isComplete ? 'complete' : ''}`}>{todo.name}</p>
                                    </div>
                                    <div className='control-bar' onClick={this.editListItemDetailsPage}><FaPencilAlt className='fa-pencil-title'/><span>{'Edit'}</span></div>
                                </li>
                            ))}
                        </ul>
                    </div> 
                    </>
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
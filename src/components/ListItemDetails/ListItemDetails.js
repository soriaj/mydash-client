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
            this.setState({ 
                items: data.filter(list => list.list_id === parseInt(listId) ? list : '')
            })
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
        const markItem = {
            ...todo,
            isComplete: !todo.isComplete
        }
        // Make API call to update id with update tasks
        this.patchItemAPI(todo.id, markItem)
        this.setState({ items: this.state.items.map(item => (item.id !== todo.id) ? item : markItem ) })
    }

    patchItemAPI = async (listId, markItem) => {
        try {
            await fetch(`${config.API_ENDPOINT}/lists_items/${listId}`, {
                method: 'PATCH',
                body: JSON.stringify(markItem),
                headers: {
                    'content-type': 'application/json',
                }
            })
            // .then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
    }

    handleAddListItem = ev => {
        ev.preventDefault();
        // Get current lists items
        const { list_id } = this.props.match.params
        // Create new item object with list_id equal to params id
        const { new_item } = ev.target
        const newItem = {
            id: Math.floor(Math.random() * 100),
            name: new_item.value,
            list_id: Number(list_id),
            isComplete: false
        }
        // Make API call to PUT new item into items
        this.postItemAPI(newItem)
        // Update state
        this.setState({ items: [...this.state.items, newItem] })
    }

    postItemAPI = async (newItem) => {
        try {
            await fetch(`${config.API_ENDPOINT}/lists_items`, {
                method: 'POST',
                body: JSON.stringify(newItem),
                headers: {
                    'content-type': 'application/json',
                }
            })
            // .then(result => console.log(result))
        } catch(error) {
            console.log(error)
        }
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
                    <div className='add-list-item'>
                        <form className='form-field' onSubmit={this.handleAddListItem}>
                            <div className='input-wrapper'>
                                <FaPlus className="fa-plus icon"></FaPlus>
                                <label htmlFor="new_item" className='no-view'>Add Item</label>
                                <input 
                                    type="text" 
                                    name="new_item" 
                                    id="new_item" 
                                    placeholder='Add item to list' 
                                    className='input-field'
                                    />
                                <span className="focus-input-field"></span>
                                <button className='add-item-btn'>Submit</button>
                            </div>
                        </form>
                    </div>
                        
                    <div className='list-container'>
                        <ul>
                            {items.map((todo, idx) => (
                                <li key={idx} id={todo.id} className={`list-items-container`}>
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
        const { error, items } = this.state
        console.log(items)
        return (
            <article>
                {error ? this.renderError() : this.renderListsItemDetails() }
            </article>
        )
    }
}
import React, { Component } from 'react'
import { FaPlus, FaRegCheckSquare, FaRegSquare, FaRegTrashAlt } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import './ListItemDetails.css'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import SaveButton from '../SaveButton/SaveButton'

export default class ListItemDetails extends Component {
    state = {
        loading: false,
        error: null,
        items: [],
    }

    static contextType = TravelerContext

    loadAllData = async (listId) => {
        try {
            let response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/lists_items`)
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
    completedListItemByKey = (ev, todo) => {
        if(ev.charCode === parseInt('13') || ev.charCode === parseInt('32')){
            this.completedListItem(todo)
        }
    }
    patchItemAPI = async (listId, markItem) => {
        try {
            await fetch(`${process.env.REACT_APP_API_ENDPOINT}/lists_items/${listId}`, {
                method: 'PATCH',
                body: JSON.stringify(markItem),
                headers: {
                    'content-type': 'application/json',
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    postItemAPI = async (newItem) => {
        try {
            await fetch(`${process.env.REACT_APP_API_ENDPOINT}/lists_items`, {
                method: 'POST',
                body: JSON.stringify(newItem),
                headers: {
                    'content-type': 'application/json',
                }
            })
        } catch(error) {
            console.log(error)
        }
    }
    removeItemAPI = async (list_id) => {
        return await fetch(`${process.env.REACT_APP_API_ENDPOINT}/lists_items/${list_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.error)
            }
        })
    }
    handleAddListItem = ev => {
        ev.preventDefault();
        // Get current lists items
        const { list_id } = this.props.match.params
        // Create new item object with list_id equal to params id
        const { new_item } = ev.target
        const newItem = {
            id: Math.floor(Math.random() * 1000),
            name: new_item.value,
            list_id: Number(list_id),
            isComplete: false
        }
        // Make API call to PUT new item into items
        this.postItemAPI(newItem)
        new_item.value = ''
        // Update state
        this.setState({ items: [...this.state.items, newItem] })
    }
    removeItem = (list_id) => {
        const currentItems = this.state.items
        const newItems = currentItems.filter(item => item.id !== list_id)
        this.removeItemAPI(list_id)
        .then(() => {
            this.setState({ items: newItems })
        })
    }
    removeItemByKeyPress = (ev, id) => {
        if(ev.charCode === parseInt('13') || ev.charCode === parseInt('32')){
            this.removeItem(id)
        }
    }
    getListsTitle() {
        const { lists } = this.context
        const { list_id } = this.props.match.params
        const listName = lists.filter(list => list.id === parseInt(list_id)).map(item => item.name)
        return listName
    }
    backToDashboard = () => {
        this.props.history.push('/dashboard')
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
                            <div className='list-detail-controls'>
                                <div className='back-to-dashboard'>
                                    <BackToDashboard backToDashboard={this.backToDashboard}/>       
                                </div>
                                <SaveButton />
                            </div>
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
                            </div>
                        </form>
                    </div>
                        
                    <div className='list-container'>
                        <ul>
                            {items.map((todo, idx) => (
                                <li key={idx} id={todo.id} tabIndex="0" className={`list-items-container`} onKeyPress={(ev) => this.completedListItemByKey(ev,todo)}>
                                    <div className={`check-box`} onClick={() => this.completedListItem(todo)} >
                                        {todo.isComplete ? 
                                            <FaRegCheckSquare className='fa-reg-check'/>
                                            : <FaRegSquare className='fa-reg-square'/>}
                                    </div>
                                    <div className={`list-items-content`}>
                                        <p className={`${todo.isComplete ? 'complete' : ''}`}>{todo.name}</p>
                                    </div>
                                    <div tabIndex="0" className={`control-bar ${todo.isComplete ? 'complete' : ''}`} 
                                        onClick={() => this.removeItem(todo.id)}
                                        onKeyPress={(ev) => this.removeItemByKeyPress(ev, todo.id)}
                                    >
                                        <FaRegTrashAlt className='fa-trash-title'/>
                                        <span>{'Remove'}</span>
                                    </div>
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
        const { error } = this.state
        return (
            <article>
                {error ? this.renderError() : this.renderListsItemDetails() }
            </article>
        )
    }
}
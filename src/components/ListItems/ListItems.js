import React, { Component } from 'react';
import { FaFile, FaRegTrashAlt } from 'react-icons/fa';
// import config from '../../config'
import TravelerContext from '../../context/TravlerContext'
import './ListItems.css'


class ListItems extends Component {
    static contextType = TravelerContext
    viewListItemDetails = () => {
        this.props.history.push(`/lists/${this.props.id}`)
    }

    deleteList(list_id) {
        return fetch(`${process.env.REACT_APP_API_ENDPOINT}/lists/${list_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.error)
            }
        })
    }

    handleDeleteListItem = ev => {
        ev.stopPropagation()
        const list_id = this.props.id
        this.deleteList(list_id)
        .then(() => {
            this.context.deleteListItem(list_id)
        })
    }

    render() {
        const { name } = this.props
        return (
            <>
                <li id={this.props.id} className='dashboard-list-items-container'>
                    <div className='inner-content'>
                        <FaFile className='fas fa-file'></FaFile>
                    </div>
                    <div className='inner-content-description' onClick={this.viewListItemDetails}>
                        <p className='content-heading'>{name}</p>
                    </div>
                    <div className='dashboard-control-bar' onClick={this.handleDeleteListItem}>
                        <FaRegTrashAlt className='fa-trash-title'/><span>{'Remove'}</span>
                    </div>
                </li>
                
            </>
        );
    }
}

export default ListItems;
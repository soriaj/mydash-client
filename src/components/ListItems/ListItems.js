import React, { Component } from 'react';
import { FaFile, FaTrash } from 'react-icons/fa';
import config from '../../config'
import TravelerContext from '../../context/TravlerContext'
import './ListItems.css'


class ListItems extends Component {
    static contextType = TravelerContext
    viewListItemDetails = () => {
        this.props.history.push(`/lists/${this.props.id}`)
    }

    deleteList(list_id) {
        return fetch(`${config.API_ENDPOINT}/lists/${list_id}`, {
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
        const { name, content } = this.props
        return (
            <>
                <div className='content-cards' onClick={this.viewListItemDetails}>
                    <div className='inner-content'>
                        <FaFile className='fas fa-file'></FaFile>
                    </div>
                    <div className='inner-content-description'>
                        <p className='content-heading'>{name}</p>
                        <p className='content-description'>{content.substr(0, 15)}{`...`}</p>
                    </div>
                    <FaTrash className='list-delete' onClick={this.handleDeleteListItem}></FaTrash>
                </div>
            </>
        );
    }
}

export default ListItems;
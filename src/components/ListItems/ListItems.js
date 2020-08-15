import React, { Component } from 'react';
import { FaRegTrashAlt, FaList } from 'react-icons/fa';
import TravelerContext from '../../context/TravlerContext'
import ApiListsService from '../../services/api-lists-service'
import './ListItems.css'

/*
ListItems displays the card of List titles
allows a user select the list and then view contents
or remove the item
*/

class ListItems extends Component {
    static contextType = TravelerContext
    // view List Item Details moves the user the the ListItemDetails Component
    viewListItemDetails = () => {
        this.props.history.push(`/lists/${this.props.id}`)
    }
    viewListItemDetailsbyKey = ev => {
        if(ev.charCode === parseInt('13') || ev.charCode === parseInt('32')){
            this.viewListItemDetails(ev)
        }
    }

    handleDeleteListItem = ev => {
        ev.stopPropagation()
        const list_id = this.props.id
        this.context.deleteListItem(list_id)
        ApiListsService.deleteList(list_id)
    }

    handleDeleteListItemByKey = ev => {
        if(ev.charCode === parseInt('13') || ev.charCode === parseInt('32')){
            this.handleDeleteListItem(ev)
        }
    }
    render() {
        const { name } = this.props
        return (
            <>
                <li id={this.props.id} tabIndex='0' className='dashboard-list-items-container' onKeyPress={(ev) => this.viewListItemDetailsbyKey(ev)}>
                    <div className='inner-content'>
                        <FaList className='fas fa-file'></FaList>
                    </div>
                    <div className='inner-content-description' onClick={this.viewListItemDetails}>
                        <p className='content-heading'>{name}</p>
                    </div>
                    <div className='dashboard-control-bar' tabIndex='0' onClick={this.handleDeleteListItem} onKeyPress={(ev) => this.handleDeleteListItemByKey(ev)}>
                        <FaRegTrashAlt className='fa-trash-title'/><span>{'Remove'}</span>
                    </div>
                </li>
                
            </>
        );
    }
}

export default ListItems;
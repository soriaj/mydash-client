import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import ListItems from '../ListItems/ListItems';
import TravelerContext from '../../context/TravlerContext'

export default class DashboardLists extends Component { 
    state = {
        showLists: true
    }
    static contextType = TravelerContext 
    addNewList = () => {
        this.props.history.push(`/add-list`)
    }
    showListItems = () => {
        this.setState({
            showLists: !this.state.showLists
        })
    }
    render() {
        const { lists } = this.context
        return (
            <section className='content'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 className='content-header-title' onClick={this.showListItems}>Lists</h3>
                    </div>
                    <div className='add-icon' onClick={this.addNewList}>
                        <FaPlus className='fas fa-plus'></FaPlus>
                    </div>
                </div>
                <div className={this.state.showLists ? '' : 'show-list' }>
                    <ul className='list-wrapper'>
                        {lists.map(item => 
                            <ListItems 
                                key={item.id}
                                id={item.id}
                                name={item.name}    
                                content={item.content}
                                history={this.props.history}
                            />
                        )}
                    </ul>
                </div>
            </section>
        );
    }
}
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import ListItems from '../ListItems/ListItems';
import TravelerContext from '../../context/TravlerContext'
import data from '../../mockData/data';

export default class DashboardLists extends Component { 
    static contextType = TravelerContext 
    // componentDidMount() {
    //     const { lists } = data
    //     this.context.setListItems(lists)
    // }
    addNewList = () => {
        this.props.history.push(`/add-list`)
    }
    render() {
        const { lists } = this.context
        return (
            <section className='content list'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 className='content-header-title'>Lists</h3>
                        <NavLink to={'/lists'}>View All</NavLink>
                    </div>
                    <div className='add-icon' onClick={this.addNewList}>
                        <FaPlus className='fas fa-plus'></FaPlus>
                    </div>
                </div>
                {lists.map(item => 
                    <ListItems 
                        key={item.id}
                        id={item.id}
                        name={item.name}    
                        content={item.content}
                        history={this.props.history}
                    />
                )}
            </section>
        );
    }
}
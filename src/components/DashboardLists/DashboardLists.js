import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import ListItems from '../ListItems/ListItems';
import TravelerContext from '../../context/TravlerContext';
import data from '../../mockData/data'

class DashboardLists extends Component {
    static contextType = TravelerContext
    componentDidMount() {
        const { lists, events, trips } = data
        this.context.setItems(lists, events, trips)
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
                    <div className='add-icon'>
                        <FaPlus className='fas fa-plus'></FaPlus>
                    </div>
                </div>
                {lists.map(item => 
                    <ListItems 
                        key={item.id}
                        name={item.name}    
                        content={item.content}
                    />
                )}
            </section>
        );
    }
}

export default DashboardLists;
import React, { Component } from 'react';
import { FaPlus, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
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
        const { showLists } = this.state
        return (
            <section className='content'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 
                            className='content-header-title' 
                            onClick={this.showListItems}>
                            {showLists ? <FaChevronCircleUp className='title-chevron'/> : <FaChevronCircleDown className='title-chevron'/>}
                            List 
                        </h3>
                    </div>
                    <div className='add-icon' onClick={this.addNewList}>
                        <FaPlus className='fas fa-plus'></FaPlus>
                    </div>
                </div>
                <div className={showLists ? '' : 'show-list' }>
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
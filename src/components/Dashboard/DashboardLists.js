import React, { Component } from 'react';
import { FaPlus, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import ListItems from '../ListItems/ListItems';
import TravelerContext from '../../context/TravlerContext'

export default class DashboardLists extends Component { 
    state = {
        showLists: true,
        isDesktop: false
    }
    static contextType = TravelerContext
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    
    updatePredicate = () => {
        this.setState({ isDesktop: window.innerWidth > 1024 });
    }
    enableChevronClick = () => {
        return (
            <h3 
                className='content-header-title' 
                onClick={this.showListItems}>
                {this.state.showLists ? <FaChevronCircleUp className='title-chevron'/> : <FaChevronCircleDown className='title-chevron'/>}
                List 
            </h3>
        )
    }
    disableChevronClick = () => {
        return (
            <h3 className='content-header-title'>Lists</h3>            
        )
    }
    // Will direct user to AddListForm component
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
            <section className={`content ${showLists ? 'content-visible': ''}`}> 
                <div className='content-header'>
                    <div className='content-titles'>
                        {this.state.isDesktop
                            ? this.disableChevronClick()
                            : this.enableChevronClick()
                        }
                    </div>
                    <div className={`add-icon ${showLists ? 'list-add' : ''}`} onClick={this.addNewList}>
                        <FaPlus className='fas fa-plus'></FaPlus>
                    </div>
                </div>
                <div className={showLists ? 'list-cards-visible' : 'list-cards-hidden'}>
                    <ul className='list-wrapper'>
                        {lists.map((item, idx) => 
                            <ListItems 
                                key={idx}
                                id={item.id}
                                name={item.name}    
                                content={item.content}
                                history={this.props.history}
                            />
                        )}
                    </ul>
                    <div className='add-icon-container list-add'>
                        <div className='add-icon-cir list-add'>
                            <FaPlus className='fas fa-plus-alt' onClick={this.addNewList}></FaPlus>
                        </div>
                    </div>
                </div>                    
            </section>
        );
    }
}
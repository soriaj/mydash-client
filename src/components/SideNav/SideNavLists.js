import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaChevronCircleUp, FaChevronCircleDown, FaList } from 'react-icons/fa'
import TravelerContext from  '../../context/TravlerContext'
// import SideNavListsItems from '../SideNavListsItems/SideNavListsItems';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import config from '../../config'
import ApiListsService from '../../services/api-lists-service'

class SideNavLists extends Component {
    state = {
        showItems: false,
        show: false,
    }
    static contextType = TravelerContext
    renderListsItems = () => {
        this.setState({ showItems: !this.state.showItems, show: !this.state.show })
    }

    async componentDidMount() {
        try {
            await ApiListsService.getLists()
                .then(this.context.setListItems)

         } catch (error) {
            console.log(error)
         }
    }
    render() {
        const { lists } = this.context
        const { showItems, show } = this.state
        return (
            <>
            <li className='list-item-heading' onClick={this.renderListsItems}>
                Lists{show 
                    ? <FaChevronCircleUp className='fas fa-calendar'></FaChevronCircleUp>
                    : <FaChevronCircleDown className='fas fa-calendar'></FaChevronCircleDown>
                }
            </li>
            <TransitionGroup
                component={null}
            >
            {showItems && 
                <CSSTransition
                    key={0}
                    in={show}
                    timeout={{enter: 300, exit: 500}}
                    classNames="fade"
                ><li className='list-sub-items'>
                    {lists.map(list => 
                        <div key={list.id} className='list-item'>
                            <span><FaList className='fas fa-file'></FaList></span>
                            <span className='list-item-title'>
                                <NavLink to={`/lists/${list.id}`}>
                                    {list.name}
                                </NavLink>
                            </span>
                        </div>
                    )}
                </li></CSSTransition>}
            </TransitionGroup>
            </>
        );
    }
}

export default SideNavLists;
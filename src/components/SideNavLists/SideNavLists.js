import React, { Component } from 'react';
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'
import TravelerContext from  '../../context/TravlerContext'
import SideNavListsItems from '../SideNavListsItems/SideNavListsItems';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class SideNavLists extends Component {
    state = {
        showItems: false,
        show: false
    }
    static contextType = TravelerContext
    renderListsItems = () => {
        this.setState({ showItems: !this.state.showItems, show: !this.state.show })
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
            >{showItems && 
                <CSSTransition
                    key={0}
                    in={show}
                    timeout={{enter: 300, exit: 500}}
                    classNames="fade"
                ><li className='list-sub-items'>
                    {lists.map(item => 
                        <SideNavListsItems
                            key={item.id}
                            name={item.name}>
                        </SideNavListsItems>
                    )}
                </li></CSSTransition>}</TransitionGroup>
            </>
        );
    }
}

export default SideNavLists;
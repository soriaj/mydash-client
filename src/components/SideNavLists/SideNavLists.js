import React, { Component } from 'react';
import { FaList } from 'react-icons/fa'
import TravelerContext from  '../../context/TravlerContext'
import SideNavListsItems from '../SideNavListsItems/SideNavListsItems';

class SideNavLists extends Component {
    state = {
        showItems: false
    }
    static contextType = TravelerContext
    renderListsItems = () => {
        this.setState({ showItems: !this.state.showItems })
    }
    render() {
        const { lists } = this.context
        const { showItems } = this.state
        return (
            <>
            <li className='list-item-heading' onClick={this.renderListsItems}>
                Lists<FaList className='fas fa-list'></FaList>
            </li>
            {showItems && <li className='list-sub-items'>
                {lists.map(item => 
                    <SideNavListsItems
                        key={item.id}
                        name={item.name}>
                    </SideNavListsItems>
                )}
            </li>}
            </>
        );
    }
}

export default SideNavLists;
import React, { Component } from 'react';
import { FaFile } from 'react-icons/fa';

class ListItems extends Component {
    viewListItemDetails = () => {
        this.props.history.push(`/dashboard/lists/${this.props.id}`)
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
                </div>
            </>
        );
    }
}

export default ListItems;
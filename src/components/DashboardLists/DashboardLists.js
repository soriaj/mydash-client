import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaPlus, FaFile } from 'react-icons/fa';

class DashboardLists extends Component {
    render() {
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
                <div className='content-cards'>
                    <div className='inner-content'>
                        <FaFile className='fas fa-file'></FaFile>
                    </div>
                    <div className='inner-content-description'>
                        <p className='content-heading'>{'List Title'}</p>
                        <p className='content-description'>{'Description of list...'}</p>
                    </div>
                </div>
                <div className='content-cards'>
                    <div className='inner-content'>
                        <FaFile className='fas fa-file'></FaFile>
                    </div>
                    <div className='inner-content-description'>
                        <p className='content-heading'>{'List Title'}</p>
                        <p className='content-description'>{'Description of list...'}</p>
                    </div>
                </div>
                <div className='content-cards'>
                    <div className='inner-content'>
                        <FaFile className='fas fa-file'></FaFile>
                    </div>
                    <div className='inner-content-description'>
                        <p className='content-heading'>{'List Title'}</p>
                        <p className='content-description'>{'Description of list...'}</p>
                    </div>
                </div>
                <div className='content-cards'>
                    <div className='inner-content'>
                        <FaFile className='fas fa-file'></FaFile>
                    </div>
                    <div className='inner-content-description'>
                        <p className='content-heading'>{'List Title'}</p>
                        <p className='content-description'>{'Description of list...'}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default DashboardLists;
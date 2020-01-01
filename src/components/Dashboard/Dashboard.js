import React, { Component } from 'react';
import './Dashboard.css';
import { FaPlus } from 'react-icons/fa';
import DashboardLists from '../DashboardLists/DashboardLists';
import DashboardTrips from '../DashboardTrips/DashboardTrips';
import TravelerContext from '../../context/TravlerContext';
import data from '../../mockData/data';

export default class Dashboard extends Component {
    static contextType = TravelerContext
    componentDidMount() {
        const { lists, events, trips } = data
        this.context.setItems(lists, events, trips)
    }
    render() {
        return <>
        <article className='main-content'>
            <DashboardLists history={this.props.history} />

            <section className='content events trips'>
                <div className='main-content-events'>
                    <div className='content events-section'>
                        <div className='content-header'>
                            <div className='content-titles'>
                                <h3 className='content-header-title'>Events</h3>
                                <a href='/events'>View All</a>
                            </div>
                            <div className='add-icon'>
                                <FaPlus className='fas fa-plus'></FaPlus>
                            </div>
                        </div>
                        <div className='events-timeline'>
                            <div className='timeline'>
                                <div className='timeline-month'><strong>{'Month'}</strong></div>
                                <div className='timeline-date arrow'>
                                    {'12/30/19'}
                                </div>
                                <div className='timeline-section'>
                                    <div className='timeline-card'>
                                        <div className='card-title'>
                                            {'Event Title'}
                                        </div>
                                        <div className='card-details'>
                                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, 
                                                vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim 
                                                per, habeo iusto primis ea eam.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='timeline-card'>
                                        <div className='card-title'>
                                            {'Event Title'}
                                        </div>
                                        <div className='card-details'>
                                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, 
                                                vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim 
                                                per, habeo iusto primis ea eam.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='timeline-date arrow'>
                                    {'12/29/19'}
                                </div>
                                <div className='timeline-section'>
                                    <div className='timeline-card'>
                                        <div className='card-title'>
                                            {'Event Title'}
                                        </div>
                                        <div className='card-details'>
                                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, 
                                                vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim 
                                                per, habeo iusto primis ea eam.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- TIMELINE NEW MONTH--> */}
                                <div className='timeline-month'><strong>{'Month'}</strong></div>
                                <div className='timeline-date arrow'>
                                    {'11/30/19'}
                                </div>
                                <div className='timeline-section'>
                                    <div className='timeline-card'>
                                        <div className='card-title'>
                                            {'Event Title'}
                                        </div>
                                        <div className='card-details'>
                                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, 
                                                vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim 
                                                per, habeo iusto primis ea eam.
                                            </p>
                                        </div>
                                    </div>
                                {/* <!-- TIMELINE END--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <DashboardTrips />
                </div>
            </section>
        </article>
        </>;
    }
}
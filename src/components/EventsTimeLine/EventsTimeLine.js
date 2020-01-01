import React, { Component } from 'react';
import TravelerContext from '../../context/TravlerContext'

class EventsTimeLine extends Component {
    static contextType = TravelerContext
    render() {
        return (
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
        );
    }
}

export default EventsTimeLine;
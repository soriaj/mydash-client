import React, { Component } from 'react';
import './Dashboard.css';
import DashboardLists from './DashboardLists'
import DashboardTrips from './DashboardTrips';
import DashboardEvents from './DashboardEvents';
import TravelerContext from '../../context/TravlerContext';

export default class Dashboard extends Component {
    static contextType = TravelerContext
    render() {
        return <>
        <article className='main-content'>
            <DashboardLists history={this.props.history} />

            <section className='content events trips'>
                <div className='main-content-events'>
                    <DashboardEvents history={this.props.history} />
                    <DashboardTrips history={this.props.history} />
                </div>
            </section>
        </article>
        </>;
    }
}
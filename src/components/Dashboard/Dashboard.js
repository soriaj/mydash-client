import React, { Component } from 'react';
import './Dashboard.css';
import DashboardLists from './DashboardLists'
import DashboardTrips from './DashboardTrips';
import DashboardEvents from './DashboardEvents';
// import LoadingDashboard from '../LoadingDashboard/LoadingDashboard';
import TravelerContext from '../../context/TravlerContext'
import data from '../../mockData/data.json'

export default class Dashboard extends Component {
    state = {
        lists: [],
        events: [],
        trips: []
    }
    static contextType = TravelerContext
    componentDidMount() {
        // const { lists, all_events, trips, setupItems } = this.context
        const { setupItems } = this.context
        // const { lists, all_events, trips } = data
        const { lists, new_events, trips } = data
        setupItems(lists, new_events, trips)
    }
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
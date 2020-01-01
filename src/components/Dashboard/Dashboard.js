import React, { Component } from 'react';
import './Dashboard.css';
import DashboardLists from '../DashboardLists/DashboardLists';
import DashboardTrips from '../DashboardTrips/DashboardTrips';
import DashboardEvents from '../DashboardEvents/DashboardEvents';
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
                    <DashboardEvents />
                    <DashboardTrips />
                </div>
            </section>
        </article>
        </>;
    }
}
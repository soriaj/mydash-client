import React, { Component } from 'react';
import './Dashboard.css';
import DashboardLists from './DashboardLists'
import DashboardTrips from './DashboardTrips';
import DashboardEvents from './DashboardEvents';
// import LoadingDashboard from '../LoadingDashboard/LoadingDashboard';
import TravelerContext from '../../context/TravlerContext'
// import data from '../../mockData/data.json'
import config from '../../config'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default class Dashboard extends Component {
    state = {
        loading: false
    }
    static contextType = TravelerContext
    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/lists`),
            fetch(`${config.API_ENDPOINT}/new_events`),
            fetch(`${config.API_ENDPOINT}/trips`)
        ])
        .then(([listsRes, new_eventsRes, tripsRes]) => {
            this.setState({ loading: true })
            
            if(!listsRes.ok) {
                return listsRes.json().then(e => Promise.reject(e));
            }
            if(!new_eventsRes.ok) {
                return new_eventsRes.json().then(e => Promise.reject(e));
            }
            if(!tripsRes.ok) {
                return tripsRes.json().then(e => Promise.reject(e));
            }
            return Promise.all([listsRes.json(), new_eventsRes.json(), tripsRes.json()]);
        })
        .then(([lists, all_events, trips]) => {
            // this.setState({ lists, all_events, trips});
            const { setupItems } = this.context
            setupItems(lists, all_events, trips)
            this.updateLoadingState()
        })
        .catch( error => {
            console.log(error)
        })
    }
    updateLoadingState() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1000)
    }
    renderDashboard() {
        return (
            <>
                <DashboardLists history={this.props.history} />

                <section className='content events trips'>
                    <div className='main-content-events'>
                        <DashboardEvents history={this.props.history} />
                        <DashboardTrips history={this.props.history} />
                    </div>
                </section>
            </>
        )
    }
    render() {
        return (
            <article className='main-content'>
                {this.state.loading ? <LoadingSpinner /> : this.renderDashboard()}
            </article>
        )
    }
}
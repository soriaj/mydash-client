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
        loading: false,
    }
    static contextType = TravelerContext
    
    async componentDidMount() {
        this.setState({ loading: true })
        try {
            const listsAPI = await fetch(`${config.API_ENDPOINT}/lists`)
            if(!listsAPI.ok) {
                throw Error(listsAPI.statusText)
            }
            const tripsAPI = await fetch(`${config.API_ENDPOINT}/trips`)
            if(!tripsAPI.ok) {
                throw Error(tripsAPI.statusText)
            }
            const eventsAPI = await fetch(`${config.API_ENDPOINT}/events`)
            if(!eventsAPI.ok) {
                throw Error(eventsAPI.statusText)
            }
            const listsRes = await listsAPI.json()
            const tripsRes = await tripsAPI.json()
            const eventsRes = await eventsAPI.json()
            const { setupItems } = this.context
            setupItems(listsRes, eventsRes, tripsRes)
            this.setState({ loading: false })
        } catch (error) {
            console.log(error)
        }
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
        const { loading } = this.state
        return (
            <article className='main-content'>
                {loading ? <LoadingSpinner /> : this.renderDashboard()}
            </article>
        )
    }
}
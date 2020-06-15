import React, { Component } from 'react';
import './Dashboard.css';
import DashboardLists from './DashboardLists'
import DashboardFinances from './DashboardFinances'
import DashboardEvents from './DashboardEvents';
import TravelerContext from '../../context/TravlerContext'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default class Dashboard extends Component {
    state = {
        loading: false,
    }
    static contextType = TravelerContext
    
    async componentDidMount() {
        this.setState({ loading: true })
        try {
            const listsAPI = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/lists`)
            if(!listsAPI.ok) {
                throw Error(listsAPI.statusText)
            }
            const financesAPI = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/finances`)
            if(!financesAPI.ok) {
                throw Error(financesAPI.statusText)
            }
            const eventsAPI = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/events`)
            if(!eventsAPI.ok) {
                throw Error(eventsAPI.statusText)
            }
            const listsRes = await listsAPI.json()
            const financesRes = await financesAPI.json()
            const eventsRes = await eventsAPI.json()
            const { setupItems } = this.context
            setupItems(listsRes, eventsRes, financesRes)
            this.setState({ loading: false })
        } catch (error) {
            console.log(error)
        }
    }
    renderDashboard() {
        return (
            <>
            <DashboardLists history={this.props.history} />

            <section className='content events finances'>
                <div className='main-content-events'>
                    <DashboardEvents history={this.props.history} />
                    <DashboardFinances history={this.props.history} />
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
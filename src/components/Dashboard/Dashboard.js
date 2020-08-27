import React, { Component } from 'react';
import './Dashboard.css';
import DashboardLists from './DashboardLists'
import DashboardFinances from './DashboardFinances'
import DashboardEvents from './DashboardEvents';
import TravelerContext from '../../context/TravlerContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ApiListsService from '../../services/api-lists-service';
import ApiEventsService from '../../services/api-events-service';
import ApiUsersService from '../../services/api-users-service';
import ApiBalancesService from '../../services/api-balance-service';
import ApiFinancesService from '../../services/api-finance-service';

export default class Dashboard extends Component {
    state = {
        loading: false,
    }
    static contextType = TravelerContext
    
    async componentDidMount() {
        try {
            this.setState({ loading: true })
            await ApiListsService.getLists()
                .then(this.context.setListItems)
            await ApiEventsService.getEvents()
                .then(this.context.setEventItems)
            await ApiUsersService.getFullName()
                .then(this.context.setUserItems)
            await ApiBalancesService.getBalances()
                .then(this.context.setBalanceItems)
            await ApiFinancesService.getFinances()
                .then(this.context.setFinanceItems)
                .then(this.setState({ loading: false }))
        }
        catch(error) {
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
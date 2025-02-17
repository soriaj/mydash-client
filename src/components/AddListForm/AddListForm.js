import React, { Component } from 'react'
import { FaList } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import SaveButton from '../SaveButton/SaveButton'
import ApiListsService from '../../services/api-lists-service'

export default class NewListForm extends Component {
    state = {
        error: null,
    }
    static contextType = TravelerContext

    handleSubmit = ev => {
        ev.preventDefault()
        const { name } = ev.target
        const { addListItem } = this.context
        const newList = {
            name: name.value
        }
        this.setState({ error: null })

        ApiListsService.postList(newList)
        .then(data => {
            name.value = ''
            addListItem(data)
            this.props.history.push('/dashboard')
        })
        .catch(error => this.setState({ error }))
    }

    backToDashboard = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        const { error } = this.state
        return (
            <article className='main-content'>
                <section className='form-container'>
                    <div className='login-form'>
                        <form className='form-field' onSubmit={this.handleSubmit}>
                            <div>
                                <h1>Add New List</h1>
                            </div>
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <div className='input-wrapper'>
                                <FaList className="fa-user icon"></FaList>
                                <label htmlFor="name" className='no-view'>List Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder='Enter List Name' 
                                    className='input-field'
                                    required
                                    />
                                <span className="focus-input-field"></span>
                            </div>

                            <div className="btn-container">
                                <BackToDashboard backToDashboard={this.backToDashboard}/>
                                <SaveButton />
                            </div>
                        </form>
                    </div>
                </section>
            </article>
        )
    }
}

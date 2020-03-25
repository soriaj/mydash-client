import React, { Component } from 'react'
import { FaList, FaKeyboard } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import Loading from '../Loading/Loading'
import config from '../../config'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import SaveButton from '../SaveButton/SaveButton'

// const uuidv4 = require('uuid/v4')

export default class NewListForm extends Component {
    state = {
        error: null,
        loading: false
    }
    static contextType = TravelerContext
    addList(newList) {
        return fetch(`${config.API_ENDPOINT}/lists`, {
           method: 'POST',
           body: JSON.stringify(newList),
           headers: {
            'content-type': 'application/json',
           }
        })
        .then(res => 
           (!res.ok)
           ? res.json().then(e => Promise.reject(e))
           : res.json()
        )
     }

    handleSubmit = ev => {
        ev.preventDefault()
        const { name } = ev.target
        const { addListItem } = this.context
        let count = Math.floor(Math.random() * 10000)
        console.log(count)
        const newList = {
            id: count,
            name: name.value,
        }
        this.setState({ error: null })

        this.addList(newList)
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
        const { error, loading } = this.state
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
                                {loading && (<Loading />)}
                                {!loading && <>
                                    <BackToDashboard backToDashboard={this.backToDashboard}/>
                                    <SaveButton />
                                </>}
                            </div>
                        </form>
                    </div>
                </section>
            </article>
        )
    }
}

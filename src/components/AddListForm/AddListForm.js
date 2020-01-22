import React, { Component } from 'react'
import { FaList, FaKeyboard } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import Loading from '../Loading/Loading'

export default class NewListForm extends Component {
    state = {
        error: null,
        loading: false
    }
    static contextType = TravelerContext

    handleSubmit = ev => {
        ev.preventDefault()
        const { name, content } = ev.target
        const { addListItem } = this.context
        const newList = {
            id: 5,
            name: name.value,
            content: content.value
        }
        this.setState({ error: null })
        addListItem(newList)
        name.value = ''
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
                                    // required
                                    />
                                <span className="focus-input-field"></span>
                            </div>

                            <div className='input-wrapper'>
                                <FaKeyboard className="fa-user icon"></FaKeyboard>
                                <label htmlFor="content" className='no-view'>List Name</label>
                                <textarea 
                                    type="textarea" 
                                    name="content" 
                                    id="content" 
                                    placeholder='Enter List Name' 
                                    className='input-field'
                                    // required
                                    />
                                <span className="focus-input-field"></span>
                            </div>
        
        
                            <div className="login-btn-container">
                                {loading && (<Loading />)}
                                {!loading &&
                                    <button className="login-btn">Submit</button>
                                }
                            </div>
                        </form>
                    </div>
                </section>
            </article>
        )
    }
}

import React, { Component } from 'react';
import { register } from './UserFunctions';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
                this.props.history.push('/login')
        })
    }

    render() {
        return (
            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <h1>
                        Register
                    </h1>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type='text' 
                            name='username'
                            placeholder='Enter username'
                            value={this.state.username}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' 
                            name='email'
                            placeholder='Enter email'
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' 
                            name='password'
                            placeholder='Enter password'
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Register;
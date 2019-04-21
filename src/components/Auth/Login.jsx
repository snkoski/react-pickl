import React, { Component } from 'react';
import { login } from './AuthFunctions';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        login(user).then(res => {
            console.log("IN LOGIN RENDER", res)

            if(!res.error) {
                this.props.onLogin(res.user)
                this.props.history.push('/')
            }
        })
    }

    render() {
        return (
            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <h1>
                        Please sign in
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

export default Login;
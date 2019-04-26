import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../Auth/AuthFunctions';
import { userFetchData, removeUser } from '../../actions/user';
import { fetchVotes } from '../../actions/vote';

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

        register(newUser).then(resp => {
                this.props.userFetchData(resp.token)
                this.props.fetchVotes(resp.user.id)
                this.props.history.push('/')
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

const mapStateToProps = state => {
    return {
        user: state.user,
        votes: state.votes
    }
}

// const mapDispatchToProps = dispatch => ({
//     addUserAction: (user) => dispatch(addUserAction(user))
// })

export default connect(mapStateToProps, { userFetchData, fetchVotes })(Register);

// export default connect()(Register);
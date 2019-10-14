import React, { Component } from 'react';
import './Profile.css';
import { doSomething } from '../../util/APIUtils';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
//        this.handleDoSomething = this.handleDoSomething.bind(this);

    }
    handleDoSomething = () => {
        alert("Ale como estas");
        doSomething()
            .then(response => {
            this.setState({
            currentUser: response,
            authenticated: true,
            loading: false
            });
        }).catch(error => {
                this.setState({
                loading: false
            });
        });
    }

    render() {
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            {
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                            <button className="btn btn-block social-btn github" onClick={this.handleDoSomething} >Probar cualquier cosa</button>

        </div>
        </div>
                </div>
            </div>
        );
    }
}

export default Profile
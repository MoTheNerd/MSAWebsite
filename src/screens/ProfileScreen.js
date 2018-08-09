import React from 'react';
import NavBar from '../components/NavBar'

export default class ProfileScreen extends React.Component {
    render(){
        return (
            <div>
                <NavBar active="profile" />
            </div>
        );
    }
}
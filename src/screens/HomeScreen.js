import React from 'react';
import NavBar from '../components/NavBar';

export default class HomeScreen extends React.Component {
    render(){
        return (
            <div>
                <NavBar active="home" />
            </div>
        );
    }
}
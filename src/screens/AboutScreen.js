import React from 'react';
import NavBar from '../components/NavBar'

export default class AboutScreen extends React.Component {
    render(){
        return (
            <div>
                <NavBar active="about" />
            </div>
        );
    }
}
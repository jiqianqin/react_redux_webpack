import React, {Component} from 'react';
import './page.css';
import image from './images/1.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                this is Page xiaoxiao~
                <img src={image}/>
            </div>
        )
    }
}
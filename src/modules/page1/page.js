import React, {Component} from 'react';
import './page.scss';
import image from './images/1.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                <span className="title">this is Page xiaoxiao~</span>
                <img src={image}/>
            </div>
        )
    }
}
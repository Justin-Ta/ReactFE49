import React, { Component } from 'react';
import './Styling.scss';
import style from './Styling.module.scss';


export default class Child extends Component {
    render() {
        return (
          <div>
            <div className={style.content}>Child Component</div>
            <p
              style={{
                backgroundColor: 'black',
                fontSize:"15px",
                color: "red",
              }}
            >
              2352352
            </p>
          </div>
        );
    }
}

import React from 'react';
import s from './Main.module.css';




const Main = (props) => {
    let hid = function() {
        document.getElementById('main').style.display = "none" 
    }
    return (
        <div className={s.main} id="main">
            <div className={s.content}>
                <p className={s.count}>{props.country}</p>
                <p>Total Confirmed {props.confirmed}</p>
                <p>Total Deaths {props.deaths}</p>
                <p>Total Recovered {props.recovered}</p>
                <button onClick={hid}>ok</button>

            </div>
                  
        </div>
    )
}

export default Main;
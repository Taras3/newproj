import React from 'react';
import s from './Content.module.css';




const Content = (props) => {
    let klick = function() {
        document.getElementById('main').style.display = "block"
    }
    
    return (
        <div className={s.container}>
            <div className={s.title}>
                <div>
                    <p>№</p>
                </div>
                <div>
                    <p>Country</p>
                </div>
                <div>
                    <p>Total Confirmed</p>
                </div>

            </div>
            <div className={s.inform} id="inform">
                <div>
                    <p>1</p>
                </div>
                <div onClick={klick}>
                    <p>{props.country}</p>
                </div>
                <div>
                    <p>{props.confirmed}</p>
                </div>

            </div>

        
        </div>
    )
}

export default Content;
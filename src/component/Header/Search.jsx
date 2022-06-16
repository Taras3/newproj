import React from 'react';
import s from './Header.module.css';




class Search extends React.Component {


    render() {
       return (
           <form onSubmit={this.props.countrInfo} className={s.search}>
               <input type='text' name='country' placeholder="Search..." />
               <button>Get info</button>
            
        
           </form>
       )
    }
}

export default Search;
import React from 'react';
import './App.css';
import Content from './component/Content/Content';
import Header from './component/Header/Header';
import Main from './component/Main/Main';

class App extends React.Component{

  state = {
    country: undefined,
    confirmed: undefined,
    deaths: undefined,
    recovered: undefined,
    error: undefined,
}

countrInfo = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const api_url = await
    fetch("https://api.covid19api.com/summary")
    let data = await api_url.json()
    data = data.Countries
    
    let arr = []
    let obj2
    
    let allInf =  data.filter( obj => {
        for(let i = 0; i < 1; i++ ){
              obj2 = {}
              obj2['Country'] = obj['Country']
              obj2['TotalConfirmed'] = obj['TotalConfirmed']
              
              arr.push(obj2)
            
        }
        for(let key in obj){
            if(obj[key] === country){
                console.log(obj) 
                return obj
            }
        }
    } )
    console.log(arr)

    console.log(data)
    console.log('I',allInf[0])

    this.setState({
        country: allInf[0].Country,
        confirmed: allInf[0].TotalConfirmed,
        deaths: allInf[0].TotalDeaths,
        recovered: allInf[0].TotalRecovered,
        error: '',
    })

    document.getElementById('inform').style.display = "flex"
}

  render() {
    return (
      <div className="App">
        <Header countrInfo={this.countrInfo} />
        <Main 
          country={this.state.country}
          confirmed={this.state.confirmed}
          deaths={this.state.deaths}
          recovered={this.state.recovered}
          error={this.state.error} />
        <Content allInf={this.allInf} 
          country={this.state.country}
          confirmed={this.state.confirmed}
          deaths={this.state.deaths}
          recovered={this.state.recovered} />
    
      </div>
  );
  }
}

export default App;

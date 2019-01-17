import React, { Component } from 'react';
import './App.css';

const initialstate = {
    url:null,
  };

class App extends Component {

constructor(props){
    super(props)
    this.state = initialstate
  }

handlebutton = (e) =>
{
  let url = this.state.url;

  if (!/^(f|ht)tps?:\/\//i.test(url)) 
  {
        url = "http://" + url;
        this.setState({url: url});
  }
  console.log(url)
}

handleurlChange = (e) =>
{

  let url= e.target.value;

  let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(url))
        {
          console.log(url + ' - true')
          this.setState({url: url});
        }
        else
        {
          console.log(url + ' - false')
          this.setState({url: url});
        }        
}


  render() {
    return (
      <div className="App">
        
              <input type="text" onChange={this.handleurlChange} />
              <button onClick={this.handlebutton} > OK  </button>

      </div>
    );
  }
}

export default App;

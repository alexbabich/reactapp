import React, { Component } from 'react';
import {apiLink} from "./api";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kind: '',
            data: []
        };
    }

    componentDidMount() {
        console.log(apiLink('sort_by=popularity.desc'))
        apiLink('sort_by=popularity.desc')
        .then(({ data })=> {
            this.setState({
                data: data.results
            });
        })
    }

  render() {
      const child = this.state.data.map((el, index) => {
          return (
          <div key={index} className="well col-xs-12 col-md-6 col-lg-6 tm-filmItem">
              <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + el.poster_path} alt={ el.poster_path } className="img-responsive tm-poster"/>
              <div className="tm-description">
                <p className="tm-title">Title - { el.title }</p>
                <p className="tm-overview">Overview - { el.overview }</p>
              </div>
          </div>
          );
      });
    return (
      <div className="App">
          <div className="row">
              <div className="col-xs-12 col-md-12 col-lg-12 tm-filmList">
                <div>{ child }</div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {actor} from "./../api";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kind: '',
            data: []
        };
    }

    componentDidMount() {
        /*actor({text})
            .then(({ data })=> {
                console.log(data);
                this.setState({
                    data: data.results
                });
            })*/
    }

    render() {
        const child = this.state.data.map((el, index) => {
            return (
                <div key={index} className="col-xs-12 col-md-6 col-lg-4">
                    <div className="well tm-filmItem">
                        <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + el.poster_path} alt={ el.poster_path } className="img-responsive tm-poster"/>
                        <div className="tm-description">
                            <p className="tm-title"><strong>Title</strong> - { el.title }</p>
                            <p className="tm-overview"><strong>Overview</strong> - { el.overview }</p>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="row">
                <div className="tm-filmList">
                    { child }
                </div>
                <div>
                    <input ref="search" type="search" placeholder="Search criteria" />
                    <button onClick={this.handleClick}>Go</button>
                </div>
            </div>
        );
    }
}

export default App;

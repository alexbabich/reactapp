import React, { Component } from 'react';
import {apiLink} from "./../api";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kind: '',
            data: []
        };
    }

    componentDidMount() {
        apiLink('language=ru&sort_by=vote_average.desc&vote_count.gte=11500')
            .then(({ data })=> {
                console.log(data);
                this.setState({
                    data: data.results
                });
            })
    }

    render() {
        const child = this.state.data.map((el, index) => {
            return (
                <div key={index} className="col-xs-12 col-md-12 col-lg-12">
                    <div className="well tm-filmItem">
                        <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + el.poster_path} alt={ el.poster_path } className="img-responsive tm-poster"/>
                        <div className="tm-description">
                            <p className="tm-title"><strong>Title</strong> - { el.title }</p>
                            <p className="tm-overview"><strong>Overview</strong> - { el.overview }</p>
                            <p className="tm-overview"><strong>Release Date</strong> - { el.release_date }</p>
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
            </div>
        );
    }
}

export default App;

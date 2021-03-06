import React, { Component } from 'react';
import {apiLink} from "./../api";

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        apiLink('primary_release_year=2018&sort_by=vote_average.desc&sort_by=vote_count.desc')
            .then(({ data })=> {
                // console.log(data);
                this.setState({
                    data: data.results
                });
            })
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
            <div className="App">
                <div className="row">
                    <h3>Here you are see Top'20 move with highest vote count and ratings in 2018</h3>
                    <div className="tm-filmList">
                        { child }
                    </div>
                </div>
            </div>
        );
    }
}

export default Films;

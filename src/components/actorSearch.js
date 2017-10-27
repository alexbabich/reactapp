import React, { Component } from 'react';
// import {actor} from "./../api";
// import SearchInput, {createFilter} from 'react-search-input'


class ActorsSearch extends Component {
    constructor({props, onsearch}) {
        super(props);

        this.state = {
            data: [],
            searchTerm: '',
            checked: onsearch
        };

        // this.searchUpdated = this.searchUpdated.bind(this);
    }

    componentDidMount() {
        // actor(Object.values({searhText}))
        //     .then(({ data })=> {
        //         this.setState({
        //             listActors: data.results
        //         })
        //     });
        console.log(this.props)
    }

    render () {
        // const filteredEmails = actor().filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return (
            <div>
                {/*<SearchInput className="search-input" onChange={this.searchUpdated} />
                {filteredEmails.map(email => {
                    return (
                        <div className="mail" key={email.id}>
                            <div className="from">{email.user.name}</div>
                            <div className="subject">{email.subject}</div>
                        </div>
                    )
                })}*/}

                <p></p>
            </div>
        )
    }

    // searchUpdated (term) {
    //     this.setState({searchTerm: term})
    // }

    /*render() {
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
    }*/
}

export default ActorsSearch;

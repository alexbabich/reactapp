import React, { Component } from 'react';
import SearchInput from 'react-search-input'
import Search from './actorSearch';

class Actors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };

        this.searchUpdated = this.searchUpdated.bind(this)
    }

    searchUpdated (term) {
        this.setState({searchTerm: term})
    }

    render() {
        return (
            <div className="row">
                <div className="tm-filmList">
                    <SearchInput className="search-input" onChange={this.searchUpdated} />
                    <br/>

                    <Search onsearch={this.state.searchTerm} />

                    <p>{this.state.searchTerm}</p>
                </div>
            </div>
        );
    }
}

export default Actors;

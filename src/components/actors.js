import React, { Component } from 'react';
// import Search from './actorSearch';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kind: '',
            data: []
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="row">
                <div className="tm-filmList">
                    {/*<Search onsearch={text}/>*/}
                </div>
            </div>
        );
    }
}

export default App;

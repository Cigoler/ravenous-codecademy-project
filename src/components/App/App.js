import React from 'react';
import { Yelp } from '../../util/Yelp';

import { Header } from './Header';
import BusinessList from '../BusinessList/BusinessList';

/**
    If you are testing locally you will want to use: https://cors-anywhere.herokuapp.com/corsdemo and prepend the fetch url in src/util/Yelp.js with it.

    Don't forget your yelp api key either. You can get one here: https://www.yelp.com/developers/v3/manage_apps

*/

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            businesses: [],
        };
        this.searchYelp = this.searchYelp.bind(this);
    }
    searchYelp(term, location, sortBy) {
        Yelp.search(term, location, sortBy).then((businesses) => {
            this.setState({ businesses: businesses });
        });
    }

    render() {
        return (
            <div className="App">
                <Header searchYelp={this.searchYelp} />
                <div className="p-6">
                    <BusinessList businesses={this.state.businesses} />
                </div>
            </div>
        );
    }
}

export default App;

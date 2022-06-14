import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        };

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count',
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'bg-slate-200';
        } else return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    handleSearch(event) {
        this.props.searchYelp(
            this.state.term,
            this.state.location,
            this.state.sortBy,
        );
        event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map((sortByOption) => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (
                <li
                    className="pl-2 text-sm text-gray-600 first:pl-0"
                    key={sortByOptionValue}>
                    <div
                        className="cursor-pointer"
                        onClick={this.handleSortByChange.bind(
                            this,
                            sortByOptionValue,
                        )}>
                        <span
                            className={
                                this.getSortByClass(sortByOptionValue) +
                                ' inline-flex items-center px-3 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800'
                            }>
                            {sortByOption}
                        </span>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="space-y-6 SearchBar">
                <div className="SearchBar-sort-options">
                    <ul className="flex space-x-2">
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="flex items-center justify-between space-x-6">
                    <div>
                        <label
                            htmlFor="business"
                            className="block text-sm font-medium text-gray-700">
                            Business
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="business"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Search for a business"
                                onChange={this.handleTermChange}
                            />
                        </div>
                        <p
                            className="mt-2 text-sm text-gray-500"
                            id="business-description">
                            Write out your search terms for businesses
                        </p>
                    </div>
                    <div>
                        <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700">
                            Where
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="location"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Location"
                                onChange={this.handleLocationChange}
                            />
                        </div>
                        <p
                            className="mt-2 text-sm text-gray-500"
                            id="location-description">
                            Where are you searching
                        </p>
                    </div>
                    <div className="SearchBar-submit">
                        <button
                            onClick={this.handleSearch}
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;

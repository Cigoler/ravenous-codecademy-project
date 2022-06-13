import React from 'react';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li
                    className="pl-2 text-sm text-gray-600 first:pl-0"
                    key={sortByOptionValue}>
                    <a href={`?sort_by=${sortByOptionValue}`}>{sortByOption}</a>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="space-y-6 SearchBar">
                <div className="SearchBar-sort-options">
                    <ul className="flex space-x-2 divide-x-2">
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
                                aria-describedby="business-description"
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
                                aria-describedby="location-description"
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

import React from 'react';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </ul>
        );
    }
}

export default BusinessList;

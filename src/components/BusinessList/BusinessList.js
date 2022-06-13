import React from 'react';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {this.props.businesses.map((business) => (
                    <Business
                        key={business.name + business.zipCode}
                        business={business}
                    />
                ))}
            </ul>
        );
    }
}

export default BusinessList;

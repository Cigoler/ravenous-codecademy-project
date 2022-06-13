import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

class Business extends React.Component {
    render() {
        return (
            <>
                <li
                    key={this.props.business.name + this.props.business.zipCode}
                    className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
                    <div
                        className="items-center px-4 py-2 image-container rounded-t-md"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${this.props.business.imageSrc})`,
                            backgroundSize: `cover`,
                            backgroundRepeat: `no-repeat`,
                            backgroundPosition: `center center`,
                        }}>
                        <h2 className="text-xl font-normal tracking-tighter text-white">
                            {this.props.business.name}
                        </h2>
                        <h3 className="flex items-center text-white">
                            <img
                                src="/italy.png"
                                alt={this.props.business.category}
                                className="h-4 mr-1"
                            />
                            {this.props.business.category}
                        </h3>

                        <div className="text-white Business-reviews">
                            <h3 className="rating">
                                <StarIcon
                                    className="w-5 h-5 text-yellow-500"
                                    aria-hidden="true"
                                />
                                ({this.props.business.rating}) stars
                            </h3>
                            <p>{this.props.business.reviewCount} reviews</p>
                        </div>
                    </div>
                    <div className="px-4 py-5 Business-information sm:px-6">
                        <div className="Business-address">
                            <address>
                                <p>{this.props.business.address}</p>
                                <p>{this.props.business.city}</p>
                                <p>{this.props.business.zipCode}</p>
                            </address>
                        </div>
                    </div>
                    <div>
                        <div className="flex -mt-px divide-x divide-gray-200">
                            <div className="flex flex-1 w-0">
                                <a
                                    href={`mailto:${this.props.business.name}`}
                                    className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500">
                                    <MailIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3">Email</span>
                                </a>
                            </div>
                            <div className="flex flex-1 w-0 -ml-px">
                                <a
                                    href={`tel:${this.props.business.name}`}
                                    className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500">
                                    <PhoneIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3">Call</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </>
        );
    }
}

export default Business;

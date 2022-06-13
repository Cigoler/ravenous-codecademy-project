import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

export function Header() {
    return (
        <header className="">
            <div className="bg-gray-50">
                <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center mx-auto">
                        <img
                            src="/android-chrome-192x192.png"
                            alt="Company logo"
                            className="h-16 pr-6"
                        />
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ravenous</span>
                            <span className="block text-indigo-600">
                                for your next meal
                            </span>
                        </h2>
                    </div>
                    <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </header>
    );
}

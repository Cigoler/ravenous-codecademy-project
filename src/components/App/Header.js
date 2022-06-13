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
                            alt="Ravenous company logo"
                            className="h-16 p-1 mr-4 rounded-full shadow-xl bg-slate-800 border-1"
                        />
                        <h2 className="text-4xl font-black tracking-tight text-gray-900">
                            <span className="block leading-6">Ravenous</span>
                            <span className="block text-2xl font-normal text-indigo-600">
                                <em>for your next meal</em>
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

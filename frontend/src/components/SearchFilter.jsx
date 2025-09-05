import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

const SearchFilter = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const query = {};
        if (search) query.search = search;
        if (status) query.status = status;
        onSearch(query);
    }, [search, status]);

    return (
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 shadow-lg rounded-xl p-4 mb-6 flex flex-col md:flex-row items-center gap-4 border border-blue-100">
            {/* Search Box */}
            <div className="relative flex-1 w-full">
                <FiSearch className="absolute left-3 top-3 text-blue-500" />
                <input
                    type="text"
                    placeholder="Search by name, email, or company..."
                    className="w-full pl-10 pr-3 border border-gray-200 rounded-lg px-4 py-2 shadow-sm
                     focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none
                     transition duration-200"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Dropdown Filter */}
            <div className="relative w-full md:w-30">
                <select
                    className="appearance-none border border-gray-200 rounded-lg px-4 py-2 w-full shadow-sm
               focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none
               transition duration-200 bg-white text-gray-700 cursor-pointer"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="new">New</option>
                    <option value="connected">Connected</option>
                    <option value="lost">Lost</option>
                </select>

                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                    ▼
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;

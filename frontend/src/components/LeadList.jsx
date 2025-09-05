import { FiEdit, FiTrash2 } from "react-icons/fi";

const statusColors = {
    new: "bg-gray-100 text-gray-700 border border-gray-200",
    connected: "bg-blue-100 text-blue-700 border border-blue-200",
    qualified: "bg-green-100 text-green-700 border border-green-200",
    lost: "bg-red-100 text-red-700 border border-red-200",
};

const LeadList = ({ leads, onEdit, onDelete }) => {
    if (!leads || leads.length === 0) {
        return <p className="text-center py-6 text-gray-500">No leads found</p>;
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="bg-gradient-to-r from-blue-50 to-teal-50 text-gray-700 uppercase text-xs font-semibold tracking-wide">
                        <tr>
                            <th className="px-6 py-3 text-left">#</th>
                            <th className="px-6 py-3 text-left">Lead</th>
                            <th className="px-6 py-3 text-left">Company</th>
                            <th className="px-6 py-3 text-left">Phone</th>
                            <th className="px-6 py-3 text-left">Channel</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-left">Created</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {leads.map((lead, idx) => (
                            <tr
                                key={lead._id}
                                className="hover:bg-blue-50 transition duration-200"
                            >
                                {/* Index */}
                                <td className="px-6 py-4 text-gray-500">{idx + 1}</td>

                                {/* Lead Info */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3 relative group">
                                        {/* Avatar */}
                                        <div className="relative">
                                            <img
                                                src={`http://localhost:5000/${lead.image || "uploads/default.png"}`}
                                                alt={lead.name}
                                                className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-blue-400 transition"
                                            />
                                            {/* Overlay actions */}
                                            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition">
                                                <button
                                                    onClick={() => onEdit(lead)}
                                                    className="p-1 bg-yellow-400 text-white rounded-full hover:bg-yellow-500"
                                                >
                                                    <FiEdit size={14} />
                                                </button>
                                                <button
                                                    onClick={() => onDelete(lead._id)}
                                                    className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                                >
                                                    <FiTrash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{lead.name}</p>
                                            <p className="text-xs text-gray-500">{lead.email}</p>
                                        </div>
                                    </div>
                                </td>

                                {/* Company */}
                                <td className="px-6 py-4 text-gray-700">{lead.company}</td>

                                {/* Phone */}
                                <td className="px-6 py-4 text-gray-700">{lead.phone}</td>

                                {/* Channel */}
                                <td className="px-6 py-4 text-gray-700">{lead.channel}</td>

                                {/* Status */}
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${statusColors[lead.status] || "bg-gray-200 text-gray-600"}`}
                                    >
                                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                                    </span>
                                </td>

                                {/* Created Date */}
                                <td className="px-6 py-4 text-gray-500">
                                    {new Date(lead.createdAt).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "2-digit",
                                        year: "numeric",
                                    })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="block md:hidden divide-y divide-gray-100">
                {leads.map((lead, idx) => (
                    <div
                        key={lead._id}
                        className="p-4 flex items-start gap-4 hover:bg-blue-50 transition"
                    >
                        {/* Avatar with overlay */}
                        <div className="relative group">
                            <img
                                src={`http://localhost:5000/${lead.image || "uploads/default.png"}`}
                                alt={lead.name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-transparent group-hover:border-blue-400 transition"
                            />
                            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition">
                                <button
                                    onClick={() => onEdit(lead)}
                                    className="p-1 bg-yellow-400 text-white rounded-full hover:bg-yellow-500"
                                >
                                    <FiEdit size={14} />
                                </button>
                                <button
                                    onClick={() => onDelete(lead._id)}
                                    className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                >
                                    <FiTrash2 size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Lead Info stacked */}
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-gray-800">{lead.name}</p>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${statusColors[lead.status] || "bg-gray-200 text-gray-600"}`}
                                >
                                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500">{lead.email}</p>
                            <p className="text-sm text-gray-700 mt-1">{lead.company}</p>
                            <p className="text-sm text-gray-700">{lead.phone}</p>
                            <p className="text-sm text-gray-700">Channel: {lead.channel}</p>
                            <p className="text-xs text-gray-500 mt-1">
                                {new Date(lead.createdAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "2-digit",
                                    year: "numeric",
                                })}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeadList;

import { FiEdit, FiTrash2 } from "react-icons/fi";

const statusColors = {
  new: "bg-gray-100 text-gray-700",
  connected: "bg-blue-100 text-blue-700",
  qualified: "bg-green-100 text-green-700",
  lost: "bg-red-100 text-red-700",
};

const LeadCard = ({ lead, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 hover:shadow-xl transition duration-300">
      {/* Profile with hover actions */}
      <div className="relative group">
        <img
          src={`http://localhost:5000/${lead.image || "uploads/default.png"}`}
          alt={lead.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-transparent group-hover:border-blue-400 transition"
        />
        {/* Hover overlay for edit/delete */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={() => onEdit(lead)}
            className="p-2 bg-yellow-400 text-white rounded-full hover:bg-yellow-500"
          >
            <FiEdit size={16} />
          </button>
          <button
            onClick={() => onDelete(lead._id)}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>

      {/* Lead Details */}
      <div className="flex-1">
        <h3 className="font-bold text-gray-800">{lead.name}</h3>
        <p className="text-sm text-gray-600">{lead.email}</p>
        <p className="text-sm text-gray-700">{lead.company}</p>
        <span
          className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${statusColors[lead.status] || "bg-gray-200 text-gray-600"}`}
        >
          {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default LeadCard;

import { FiUserPlus } from "react-icons/fi";

const Navbar = ({ onAdd }) => {
    return (
        <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-2xl font-bold text-amber-200">LeadDesk</h1>
            <button
                onClick={onAdd}
                className="flex items-center gap-2 bg-emerald-300 text-teal-900 px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
            >
                <FiUserPlus /> Add Lead
            </button>
        </nav>
    );
};

export default Navbar;

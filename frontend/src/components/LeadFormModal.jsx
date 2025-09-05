import { useState, useEffect } from "react";

const LeadFormModal = ({ lead, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        channel: "Website",
        status: "new",
        image: null,
    });

    useEffect(() => {
        if (lead) setFormData({ ...lead, image: null });
    }, [lead]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        for (let key in formData) {
            if (formData[key] !== null) data.append(key, formData[key]);
        }
        onSave(data, lead?._id);
    };

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="w-full max-w-lg md:max-w-xl bg-emerald-300 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl p-6 md:p-8 animate-fadeIn scale-95">
                {/* Title */}
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    {lead ? " Edit Lead" : " Add Lead"}
                </h2>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-lg px-4 py-2 border border-gray-200 bg-white/70 shadow-sm 
                        focus:ring-2 focus:ring-blue-400 outline-none transition"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-lg px-4 py-2 border border-gray-200 bg-white/70 shadow-sm 
                        focus:ring-2 focus:ring-blue-400 outline-none transition"
                            required
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full rounded-lg px-4 py-2 border border-gray-200 bg-white/70 shadow-sm 
                        focus:ring-2 focus:ring-blue-400 outline-none transition"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone (10 digits)</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-lg px-4 py-2 border border-gray-200 bg-white/70 shadow-sm 
                        focus:ring-2 focus:ring-blue-400 outline-none transition"
                            required
                        />
                    </div>

                    {/* Dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Channel</label>
                            <select
                                name="channel"
                                value={formData.channel}
                                onChange={handleChange}
                                className="w-full rounded-lg px-4 py-2 border border-gray-200 bg-white/70 shadow-sm 
                          focus:ring-2 focus:ring-blue-400 outline-none transition"
                            >
                                <option value="Website">Website</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Referral">Referral</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full rounded-lg px-4 py-2 border border-gray-200 bg-white/70 shadow-sm 
                          focus:ring-2 focus:ring-blue-400 outline-none transition"
                            >
                                <option value="new">New</option>
                                <option value="connected">Connected</option>
                                <option value="lost">Lost</option>
                            </select>
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="w-full border px-4 py-2 rounded-lg shadow-sm 
                        file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 
                        file:text-sm file:font-semibold file:bg-blue-50 file:text-gray-500 hover:file:bg-blue-100"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 pt-4 border-t border-white/40">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 rounded-lg border bg-black text-amber-200 hover:opacity-85 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-amber-200 
                        text-black font-medium shadow-lg hover:opacity-90 transition cursor-pointer"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeadFormModal;

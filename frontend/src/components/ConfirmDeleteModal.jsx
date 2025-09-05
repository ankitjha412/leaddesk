const ConfirmDeleteModal = ({ onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-2xl w-full max-w-sm animate-fadeIn">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">⚠️ Confirm Action</h2>
                <p className="text-gray-600 mb-6">
                    This action will <span className="font-semibold text-red-600">mark the lead as lost</span>.
                    You can still find it under “Lost Leads”.
                </p>

                {/* Buttons */}
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded-lg border bg-white/60 hover:bg-white/80 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white font-medium shadow hover:opacity-90 transition"
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;

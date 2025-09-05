import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import SearchFilter from "./components/SearchFilter";
import LeadList from "./components/LeadList";
import LeadFormModal from "./components/LeadFormModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import { getLeads, getSummary, addLead, updateLead, deleteLead } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [summary, setSummary] = useState({});
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingLead, setEditingLead] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [summaryRes, leadsRes] = await Promise.all([getSummary(), getLeads()]);
      setSummary(summaryRes.data);
      setLeads(leadsRes.data);
    } catch (error) {
      toast.error("Error fetching data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (formData, id) => {
    try {
      if (id) {
        await updateLead(id, formData);
        toast.success("Lead updated successfully");
      } else {
        await addLead(formData);
        toast.success("Lead added successfully");
      }
      setShowForm(false);
      fetchData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Error saving lead");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteLead(deleteId);
      toast.success("Lead deleted (marked as lost)");
      setShowDelete(false);
      fetchData();
    } catch (error) {
      toast.error("Error deleting lead");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-yellow-100 to-gray-300">
      <Navbar onAdd={() => { setEditingLead(null); setShowForm(true); }} />
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        <DashboardCards summary={summary} />
        <SearchFilter onSearch={(query) => getLeads(query).then(res => setLeads(res.data))} />
        <LeadList
          leads={leads}
          loading={loading}
          onEdit={(lead) => { setEditingLead(lead); setShowForm(true); }}
          onDelete={(id) => { setDeleteId(id); setShowDelete(true); }}
        />
      </div>

      {showForm && (
        <LeadFormModal
          lead={editingLead}
          onClose={() => setShowForm(false)}
          onSave={handleSave}
        />
      )}

      {showDelete && (
        <ConfirmDeleteModal
          onConfirm={handleDelete}
          onCancel={() => setShowDelete(false)}
        />
      )}

      <ToastContainer theme="colored" position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;

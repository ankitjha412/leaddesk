const { json } = require("express");
const Lead = require("../models/Lead");

// Add Lead
const addLead = async (req, res) => {
    try {
        const { name, email, company, phone, channel, status } = req.body;
        const image = req.file ? req.file.path : null;

        if (!name || !email || !phone || !channel) {
            return res
                .status(400)
                .json({ message: "Name, email, phone, and channel are required" });
        }
        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({ message: "Phone number must be exactly 10 digits" });
        }

        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
            return res.status(400).json({ message: "Email must be a valid Gmail address (ends with @gmail.com)" });
        }

        const leadExists = await Lead.findOne({ email });
        if (leadExists) {
            return res.status(400).json({ message: "Lead with this email already exists" });
        }

        const lead = await Lead.create({
            name,
            email,
            company,
            phone,
            channel,
            status,
            image,
        });

        res.status(201).json(lead);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Leads
const getLeads = async (req, res) => {
    try {
        const { status, search } = req.query;
        let query = {};

        if (status) query.status = status;
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { company: { $regex: search, $options: "i" } },
            ];
        }

        const leads = await Lead.find(query).sort({ createdAt: -1 });
        res.json(leads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Summary
const getSummary = async (req, res) => {
    try {
        const total = await Lead.countDocuments();
        const newLeads = await Lead.countDocuments({ status: "new" });
        const connected = await Lead.countDocuments({ status: "connected" });
        const lost = await Lead.countDocuments({ status: "lost" });

        res.json({ total, new: newLeads, connected, lost });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Lead
const updateLead = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) return res.status(404).json({ message: "Lead not found" });

        const { name, email, company, phone, channel, status } = req.body;

        if (phone && !/^\d{10}$/.test(phone)) {
            return res.status(400).json({ message: "Phone number must be exactly 10 digits" });
        }

        if (email && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
            return res.status(400).json({ message: "Email must be a valid Gmail address (ends with @gmail.com)" });
        }

        if (name) lead.name = name;
        if (email) lead.email = email;
        if (company) lead.company = company;
        if (phone) lead.phone = phone;
        if (channel) lead.channel = channel;
        if (status) lead.status = status;
        if (req.file) lead.image = req.file.path;

        const updatedLead = await lead.save();
        res.json(updatedLead);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete (soft delete = mark as lost)
const deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            { status: "lost" },
            { new: true }
        );

        if (!lead) {
            return res.status(404).json({ message: "Lead not found" });
        }

        res.status(200).json({ message: "Lead marked as lost", lead });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};


module.exports = {
    addLead,
    getLeads,
    getSummary,
    updateLead,
    deleteLead,
};

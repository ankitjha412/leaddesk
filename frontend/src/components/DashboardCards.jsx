import { FiUsers, FiUserPlus, FiUserCheck, FiUserX } from "react-icons/fi";

const DashboardCards = ({ summary }) => {
  const cards = [
    {
      label: "Total Leads",
      value: summary.total || 0,
      color: "from-blue-500 to-blue-700",
      icon: <FiUsers size={32} />,
    },
    {
      label: "New Leads",
      value: summary.new || 0,
      color: "from-teal-400 to-teal-600",
      icon: <FiUserPlus size={32} />,
    },
    {
      label: "Connected",
      value: summary.connected || 0,
      color: "from-cyan-500 to-cyan-700",
      icon: <FiUserCheck size={32} />,
    },
    {
      label: "Lost Leads",
      value: summary.lost || 0,
      color: "from-red-500 to-red-700",
      icon: <FiUserX size={32} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`relative bg-gradient-to-r ${card.color} text-white p-6 rounded-xl shadow-lg 
                      transform hover:scale-105 transition duration-300`}
        >
          {/* Icon Badge */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full shadow">
            {card.icon}
          </div>

          {/* Content */}
          <h2 className="text-sm font-medium tracking-wide">{card.label}</h2>
          <p className="text-3xl font-extrabold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;

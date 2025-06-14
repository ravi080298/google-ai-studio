const Dashboard = () => {
  const cards = [
    { title: "Project A", description: "Description of project A" },
    { title: "Project B", description: "Description of project B" },
    { title: "Project C", description: "Description of project C" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded shadow hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Open
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

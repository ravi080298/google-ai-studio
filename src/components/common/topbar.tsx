const TopBar = () => {
  return (
    <header className="w-full h-16 px-4 md:px-6 flex items-center justify-between border-b border-gray-800 bg-[#181818] text-white">
      <div></div>

      {/* Right side: Dashboard + Avatar */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Dashboard</span>
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover border border-gray-300"
        />
      </div>
    </header>
  );
};

export default TopBar;

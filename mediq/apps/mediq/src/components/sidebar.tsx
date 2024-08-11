

const Sidebar = () => {


  return (
    <div
      className={`hidden md:block z-10 fixed flex-col  mt-20 rounded-tr-md p-8 space-y-4 text-white bg-[#095D7E] h-screen w-64`}
    >
      <h2 className="text-xl font-semibold">Sidebar</h2>
      <ul className="space-y-4">
        <li className="text-lg"></li>
        <li className="text-lg"></li>
        <li className="text-lg"></li>
      </ul>
    </div>
  );
};

export default Sidebar;

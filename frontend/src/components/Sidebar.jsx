import React from 'react';
import { FaWallet, FaChartPie, FaUsers, FaCog, FaQuestionCircle, FaSignOutAlt, FaHome, FaExchangeAlt } from 'react-icons/fa';

const Sidebar = () => {
  const navItems = [
    { icon: <FaHome />, label: 'Dashboard' },
    { icon: <FaExchangeAlt />, label: 'Transactions' },
    { icon: <FaWallet />, label: 'Wallet' },
    { icon: <FaChartPie />, label: 'Analytics' },
    { icon: <FaUsers />, label: 'Contacts' },
    { icon: <FaCog />, label: 'Settings' },
    { icon: <FaQuestionCircle />, label: 'Help Center' },
  ];

  return (
    <div className="bg-[#111111] text-white h-screen w-64 fixed flex flex-col justify-between py-6 px-4">
      <div>
        <div className="text-xl font-bold mb-10 px-2">Tikwave</div>
        {navItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 py-3 px-2 hover:bg-[#1e1e1e] cursor-pointer rounded">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-3 py-3 px-2 hover:bg-[#1e1e1e] cursor-pointer rounded">
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;

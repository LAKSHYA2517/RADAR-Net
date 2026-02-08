import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MapArea from '../components/MapArea';

const Dashboard = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden text-white bg-navy-deep">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
          <MapArea />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

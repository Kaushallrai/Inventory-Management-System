import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <div className="flex-1 p-7 overflow-auto">
          <h1 className="text-2xl font-semibold text-black">Home Page</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import SalesPurchaseChart from "../../layout/SalesPurchaseChart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faChartLine,
  faPercent,
  faFileInvoice,
  faBox,
  faTruckLoading,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import OrderDeliveryChart from "../../layout/OrderDeliveryChart ";

// Function to determine the icon color based on the icon type
const getIconColor = (icon) => {
  switch (icon.iconName) {
    case "dollar-sign":
      return "text-blue-500";
    case "chart-line":
      return "text-green-500";
    case "percent":
      return "text-yellow-500";
    case "file-invoice":
      return "text-red-500";
    case "box":
      return "text-purple-500";
    case "truck-ramp-box":
      return "text-orange-500";
    case "list":
      return "text-indigo-500";
    default:
      return "text-gray-500";
  }
};

const InfoCard = ({ icon, amount, label }) => (
  <div className="w-40 border rounded-lg p-3 flex flex-col items-center cursor-pointer">
    <div
      className={`border rounded-md w-10 p-2 mb-2 flex items-center justify-center ${getIconColor(
        icon
      )}`}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </div>
    <div className="flex items-center justify-between w-full text-sm font-medium">
      <span>{amount}</span>
      <span>{label}</span>
    </div>
  </div>
);

InfoCard.propTypes = {
  icon: PropTypes.object.isRequired,
  amount: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const InfoCardSummary = ({ icon, amount, label }) => (
  <div className="w-40 border rounded-lg p-3 flex flex-col items-center cursor-pointer">
    <div
      className={`border rounded-md w-10 p-2 mb-2 flex items-center justify-center ${getIconColor(
        icon
      )}`}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </div>
    <div className="flex flex-col items-center w-full text-center text-sm font-medium">
      <span>{amount}</span>
      <span>{label}</span>
    </div>
  </div>
);

InfoCardSummary.propTypes = {
  icon: PropTypes.object.isRequired,
  amount: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Dashboard = () => (
  <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Header />
      <div className="flex flex-col p-4 overflow-auto  gap-4">
        <div className="flex gap-8">
          <div className="flex flex-col w-4/7 p-4 gap-1 border rounded-xl bg-white">
            <h1 className="text-xl font-semibold mb-4">Sales Overview</h1>
            <div className="flex gap-6 justify-between">
              <InfoCard icon={faDollarSign} amount="$1000" label="Sales" />
              <InfoCard icon={faChartLine} amount="$18,000" label="Revenue" />
              <InfoCard icon={faPercent} amount="$1100" label="Profit" />
              <InfoCard icon={faFileInvoice} amount="$17,000" label="Cost" />
            </div>
          </div>
          <div className="flex flex-col w-1/3 p-4 gap-1 border rounded-xl bg-white mr-5">
            <h1 className="text-xl font-semibold mb-4">Inventory Summary</h1>
            <div className="flex gap-6 justify-between">
              <InfoCardSummary
                icon={faBox}
                amount="1000"
                label="Quantity in stock"
              />
              <InfoCardSummary
                icon={faTruckLoading}
                amount="200"
                label="To be received"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col w-4/7 p-4 gap-1 border rounded-xl bg-white">
            <h1 className="text-xl font-semibold mb-4">Purchase Overview</h1>
            <div className="flex gap-6 justify-between">
              <InfoCard icon={faDollarSign} amount="82" label="Purchase" />
              <InfoCard icon={faChartLine} amount="$13,000" label="Cost" />
              <InfoCard icon={faPercent} amount="5" label="Cancel" />
              <InfoCard icon={faFileInvoice} amount="$15,000" label="Return" />
            </div>
          </div>
          <div className="flex flex-col w-1/3 p-4 gap-1 border rounded-xl bg-white mr-5">
            <h1 className="text-xl font-semibold mb-4">Product Summary</h1>
            <div className="flex gap-6 justify-between">
              <InfoCardSummary
                icon={faBox}
                amount="31"
                label="Number of Product"
              />
              <InfoCardSummary
                icon={faList}
                amount="21"
                label="Number of Categories"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col w-[740px] p-4 gap-1 border rounded-xl bg-white">
            <h1 className="text-xl font-semibold mb-4">Sales and Purchase</h1>
            <div className="sap-container">
              <SalesPurchaseChart />
            </div>
          </div>
          <div className="flex flex-col w-[410px] p-4 gap-1 border rounded-xl bg-white ">
            <h1 className="text-xl font-semibold mb-4">Order Summary</h1>
            <div className="oad-container">
              <OrderDeliveryChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;

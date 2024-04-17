import { useEffect, useRef } from "react";

const OrderDeliveryChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const orderData = [100, 120, 150, 130, 180, 200]; // Order data
    const deliveryData = [90, 100, 130, 120, 160, 190]; // Delivery data

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Order",
            data: orderData,
            borderColor: "#DDA0DD",
            backgroundColor: "rgba(135, 206, 250, 0.2)",
            fill: false,
          },
          {
            label: "Delivery",
            data: deliveryData,
            borderColor: "#FFA07A",
            backgroundColor: "rgba(102, 205, 170, 0.2)",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "category",
            display: true,
          },
          y: {
            type: "linear",
            display: true,
          },
        },
      },
    });
  }, []);

  // Cleanup the chart when the component is unmounted
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width="350" height="275"></canvas>
    </div>
  );
};

export default OrderDeliveryChart;

import { useEffect, useRef } from "react";

const SalesPurchaseChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const salesData = [500, 700, 800, 600, 900, 1000];
    const purchaseData = [400, 600, 700, 500, 800, 900];

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");

    const salesGradient = ctx.createLinearGradient(0, 0, 0, 400);
    salesGradient.addColorStop(0, "#ADD8E6");
    salesGradient.addColorStop(1, "#87CEFA");

    const purchaseGradient = ctx.createLinearGradient(0, 0, 0, 400);
    purchaseGradient.addColorStop(0, "#90EE90");
    purchaseGradient.addColorStop(1, "#66CDAA");

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: salesData,
            backgroundColor: salesGradient,
          },
          {
            label: "Purchase",
            data: purchaseData,
            backgroundColor: purchaseGradient,
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

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width="350" height="150"></canvas>
    </div>
  );
};

export default SalesPurchaseChart;

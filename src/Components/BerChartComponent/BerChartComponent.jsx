import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const BerChartComponent = ({ratings}) => {
  const data = ratings;
  return (
    <div style={{ width: "96%", height: 300, margin: "0 auto" }}>
      <h1 className="text-2xl text-[#001931]  font-semibold mt-10 mb-6">Ratings</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="count" fill="#ff8c00" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BerChartComponent;

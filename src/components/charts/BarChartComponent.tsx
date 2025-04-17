import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartComponentProps {
  data: any[];
  dataKeys: string[];
  colors?: string[];
  xAxisDataKey: string;
  height?: number | string;
}

const defaultColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];

const BarChartComponent = ({ 
  data, 
  dataKeys, 
  colors = defaultColors, 
  xAxisDataKey, 
  height = 300 
}: BarChartComponentProps) => {
  
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((key, index) => (
            <Bar 
              key={key}
              dataKey={key} 
              fill={colors[index % colors.length]} 
              name={key} 
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
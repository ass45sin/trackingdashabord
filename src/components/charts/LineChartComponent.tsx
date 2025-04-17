import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartComponentProps {
  data: any[];
  dataKeys: string[];
  colors?: string[];
  xAxisDataKey: string;
  height?: number | string;
  yAxisIds?: string[];
}

const defaultColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];

const LineChartComponent = ({ 
  data, 
  dataKeys, 
  colors = defaultColors, 
  xAxisDataKey, 
  height = 300,
  yAxisIds
}: LineChartComponentProps) => {
  
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisDataKey} />
          
          {yAxisIds ? (
            <>
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
            </>
          ) : (
            <YAxis />
          )}
          
          <Tooltip />
          <Legend />
          
          {dataKeys.map((key, index) => (
            <Line 
              key={key}
              type="monotone" 
              dataKey={key} 
              stroke={colors[index % colors.length]} 
              name={key}
              yAxisId={yAxisIds ? (index === 0 ? "left" : "right") : undefined}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
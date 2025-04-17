import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AreaChartComponentProps {
  data: any[];
  dataKey: string;
  xAxisDataKey: string;
  color?: string;
  height?: number | string;
}

const AreaChartComponent = ({ 
  data, 
  dataKey, 
  xAxisDataKey, 
  color = '#8884d8', 
  height = 300 
}: AreaChartComponentProps) => {
  
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisDataKey} />
          <YAxis />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color} 
            fill={color} 
            name={dataKey}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
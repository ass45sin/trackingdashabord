import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface PieChartComponentProps {
  data: any[];
  dataKey: string;
  nameKey: string;
  colors?: string[];
  height?: number | string;
}

const defaultColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const PieChartComponent = ({ 
  data, 
  dataKey, 
  nameKey,
  colors = defaultColors, 
  height = 300
}: PieChartComponentProps) => {
  
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey={dataKey}
            nameKey={nameKey}
            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
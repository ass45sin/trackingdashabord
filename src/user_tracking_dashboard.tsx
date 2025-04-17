import { useState, useMemo, type ReactNode } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockData, COLORS } from './data/mock-data';

// Define allowed keys for state/data access
type TimeRangeKey = '24h' | '7d' | '30d' | '90d';
type DepartmentKey = 'All' | 'Marketing' | 'Sales' | 'Engineering' | 'Product' | 'Finance';

// Define props interface for Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode; // Use ReactNode for children
}

// Modal component for expanded views
const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;
  
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 1000,
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div 
        style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
          padding: '20px', 
          width: '90%', 
          maxWidth: '1200px', 
          height: '85%', 
          maxHeight: '800px', 
          overflow: 'auto',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{title}</h2>
          <button 
            onClick={onClose}
            style={{ 
              backgroundColor: 'transparent', 
              border: 'none', 
              fontSize: '1.5rem', 
              cursor: 'pointer',
              color: '#6b7280'
            }}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState<TimeRangeKey>('7d');
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentKey>('All');
  const [expandedWidget, setExpandedWidget] = useState<string | null>(null);
  
  // Provide default data for each category to ensure we never render undefined
  const defaultData = {
    usageData: mockData.usageData['7d'],
    featureUsageData: mockData.featureUsageByDepartment['All'],
    departmentUsage: mockData.departmentUsageByTimeRange['7d'],
    funnelData: mockData.sessionFunnelByDepartment['All'],
    timeData: mockData.timeOfDayByTimeRange['7d'],
    roleData: mockData.roleDataByDepartment['All'],
    userList: mockData.userListByDepartment['All'],
    alerts: mockData.alertsByDepartment['All'],
    metrics: mockData.keyMetrics['7d']['All']
  };
  
  // Get filtered data based on time range and department
  const filteredData = useMemo(() => {
    try {
      // Get the appropriate data based on selected filters
      const usageData = mockData.usageData[timeRange as TimeRangeKey] || defaultData.usageData;
      const featureUsageData = mockData.featureUsageByDepartment[selectedDepartment as DepartmentKey] || defaultData.featureUsageData;
      const departmentUsage = mockData.departmentUsageByTimeRange[timeRange as TimeRangeKey] || defaultData.departmentUsage;
      const funnelData = mockData.sessionFunnelByDepartment[selectedDepartment as DepartmentKey] || defaultData.funnelData;
      const timeData = mockData.timeOfDayByTimeRange[timeRange as TimeRangeKey] || defaultData.timeData;
      const roleData = mockData.roleDataByDepartment[selectedDepartment as DepartmentKey] || defaultData.roleData;
      const userList = mockData.userListByDepartment[selectedDepartment as DepartmentKey] || defaultData.userList;
      const alerts = mockData.alertsByDepartment[selectedDepartment as DepartmentKey] || defaultData.alerts;
      const metrics = (mockData.keyMetrics[timeRange as TimeRangeKey] && mockData.keyMetrics[timeRange as TimeRangeKey][selectedDepartment as DepartmentKey]) 
        ? mockData.keyMetrics[timeRange as TimeRangeKey][selectedDepartment as DepartmentKey] 
        : defaultData.metrics;

      return {
        usageData,
        featureUsageData,
        departmentUsage,
        funnelData,
        timeData,
        roleData,
        userList,
        alerts,
        metrics
      };
    } catch (error) {
      console.error("Error filtering data:", error);
      return defaultData;
    }
  }, [timeRange, selectedDepartment]);

  // Calculate percentage changes
  const getPercentChange = (metric: keyof typeof filteredData.metrics, isPositiveGood = true) => {
    // We'll use a deterministic approach instead of random to maintain consistency
    const seed = timeRange + selectedDepartment + metric;
    const hash = [...seed].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    let change = hash % 15; // 0-14% change
    
    // Make some metrics negative based on the hash
    const direction = (hash % 4 === 0) ? 'down' : 'up';
    if (direction === 'down') change = -change;
    
    // Special case for feature adoption rate in 7d
    if (metric === 'featureAdoptionRate' && timeRange === '7d') {
      change = -2;
    }
    
    const color = (direction === 'up' && isPositiveGood) || (direction === 'down' && !isPositiveGood) 
      ? '#10b981' // green for good changes
      : '#ef4444'; // red for bad changes
      
    const arrow = direction === 'up' ? '↑' : '↓';
    
    return {
      value: Math.abs(change),
      direction,
      display: `${change > 0 ? '+' : ''}${change}% ${arrow}`,
      color
    };
  };

        return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '12px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1f2937' }}>User Activity Monitoring</h1>
          <div style={{ display: 'flex', gap: '16px' }}>
                 <select 
              style={{ border: '1px solid #e5e7eb', borderRadius: '0.25rem', padding: '4px 8px', fontSize: '0.75rem' }} 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as TimeRangeKey)}
              aria-label="Select time range"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
                </select>
            <select 
              style={{ border: '1px solid #e5e7eb', borderRadius: '0.25rem', padding: '4px 8px', fontSize: '0.75rem' }}
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value as DepartmentKey)}
              aria-label="Select department"
            >
              <option value="All">All Departments</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Finance">Finance</option>
            </select>
            <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '4px 12px', borderRadius: '0.25rem', fontSize: '0.75rem' }}>Export Report</button>
                    </div>
                        </div>
                      </div>
                      
      {/* Key Metrics */}
      <div style={{ padding: '16px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Active Users</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '4px' }}>
              <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{filteredData.metrics.activeUsers}</div>
              {(() => {
                const change = getPercentChange('activeUsers');
                return (
                  <div style={{ marginLeft: '8px', fontSize: '0.75rem', color: change.color }}>
                    {change.display}
                        </div>
                );
              })()}
                      </div>
                    </div>
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Avg. Session Duration</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '4px' }}>
              <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{filteredData.metrics.avgSessionDuration} min</div>
              {(() => {
                const change = getPercentChange('avgSessionDuration');
                return (
                  <div style={{ marginLeft: '8px', fontSize: '0.75rem', color: change.color }}>
                    {change.display}
                  </div>
                );
              })()}
                      </div>
                    </div>
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Feature Adoption Rate</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '4px' }}>
              <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{filteredData.metrics.featureAdoptionRate}%</div>
              {(() => {
                const change = getPercentChange('featureAdoptionRate');
                return (
                  <div style={{ marginLeft: '8px', fontSize: '0.75rem', color: change.color }}>
                    {change.display}
                      </div>
                );
              })()}
                    </div>
                   </div>
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Workflow Completion</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '4px' }}>
              <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{filteredData.metrics.workflowCompletion}%</div>
              {(() => {
                const change = getPercentChange('workflowCompletion');
                return (
                  <div style={{ marginLeft: '8px', fontSize: '0.75rem', color: change.color }}>
                    {change.display}
              </div>
                );
              })()}
            </div>
          </div>
        </div>
              </div>
              
      {/* Charts Row 1 */}
      <div style={{ padding: '8px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {/* Daily Active Users */}
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Active Users & Sessions</h2>
              <button 
                style={{ fontSize: '0.75rem', color: '#3b82f6', cursor: 'pointer', border: 'none', background: 'none' }}
                onClick={() => setExpandedWidget('users')}
              >
                Expand
              </button>
            </div>
            <div style={{ height: '250px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredData.usageData}>
                          <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="activeUsers" stroke="#8884d8" name="Active Users" />
                  <Line yAxisId="right" type="monotone" dataKey="sessionCount" stroke="#82ca9d" name="Sessions" />
                </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
          
          {/* Feature Usage */}
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Feature Usage & Engagement</h2>
              <button 
                style={{ fontSize: '0.75rem', color: '#3b82f6', cursor: 'pointer', border: 'none', background: 'none' }}
                onClick={() => setExpandedWidget('features')}
              >
                Expand
              </button>
            </div>
            <div style={{ height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredData.featureUsageData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="usage" fill="#8884d8" name="Usage Count" />
                        <Bar dataKey="duration" fill="#82ca9d" name="Avg Duration (min)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
              </div>
                  </div>
                </div>
                
      {/* Charts Row 2 */}
      <div style={{ padding: '8px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {/* Department Usage */}
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Department Distribution</h2>
              <button 
                style={{ fontSize: '0.75rem', color: '#3b82f6', cursor: 'pointer', border: 'none', background: 'none' }}
                onClick={() => setExpandedWidget('departments')}
              >
                Expand
                </button>
              </div>
            <div style={{ height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                    data={filteredData.departmentUsage}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                    {filteredData.departmentUsage.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
              </div>
              
          {/* User Journey Funnel */}
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: '500' }}>User Journey Funnel</h2>
              <button 
                style={{ fontSize: '0.75rem', color: '#3b82f6', cursor: 'pointer', border: 'none', background: 'none' }}
                onClick={() => setExpandedWidget('funnel')}
              >
                Expand
              </button>
            </div>
            <div style={{ height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={filteredData.funnelData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                        <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                        <Tooltip />
                  <Bar dataKey="users" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
          {/* Time of Day Distribution */}
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Time of Day Activity</h2>
              <button 
                style={{ fontSize: '0.75rem', color: '#3b82f6', cursor: 'pointer', border: 'none', background: 'none' }}
                onClick={() => setExpandedWidget('timeOfDay')}
              >
                Expand
              </button>
            </div>
            <div style={{ height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredData.timeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <Tooltip />
                  <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#8884d8" name="Active Users" />
                </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              </div>
      
      {/* User Role Analysis */}
      <div style={{ padding: '8px 24px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Usage by Role</h2>
            <button 
              style={{ fontSize: '0.75rem', color: '#3b82f6', cursor: 'pointer', border: 'none', background: 'none' }}
              onClick={() => setExpandedWidget('roles')}
            >
              Expand
                </button>
              </div>
          <div style={{ height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData.roleData}>
                      <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="role" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                <Bar dataKey="users" fill="#8884d8" name="User Count" />
                <Bar dataKey="avgSessionsPerWeek" fill="#82ca9d" name="Avg Sessions/Week" />
                <Bar dataKey="avgFeatureUse" fill="#ffc658" name="Avg Features Used" />
                        </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
      {/* User List and Alerts */}
      <div style={{ padding: '8px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          {/* Top Users Table */}
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Active Users</h2>
              <button 
                style={{ fontSize: '0.75rem', color: '#3b82f6', cursor: 'pointer', border: 'none', background: 'none' }}
                onClick={() => setExpandedWidget('userList')}
              >
                View All Users
              </button>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>User</th>
                    <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Role</th>
                    <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Last Active</th>
                    <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sessions</th>
                    <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Avg Time</th>
                    <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Completion</th>
                    </tr>
                  </thead>
                <tbody>
                  {filteredData.userList && filteredData.userList.map((user, index) => (
                    <tr key={user.id} style={{ borderTop: index > 0 ? '1px solid #e5e7eb' : 'none' }}>
                      <td style={{ padding: '8px 12px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '500' }}>{user.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{user.department}</div>
                      </td>
                      <td style={{ padding: '8px 12px', whiteSpace: 'nowrap', fontSize: '0.75rem' }}>{user.role}</td>
                      <td style={{ padding: '8px 12px', whiteSpace: 'nowrap', fontSize: '0.75rem' }}>{user.lastActive}</td>
                      <td style={{ padding: '8px 12px', whiteSpace: 'nowrap', fontSize: '0.75rem' }}>{user.sessionsThisWeek}</td>
                      <td style={{ padding: '8px 12px', whiteSpace: 'nowrap', fontSize: '0.75rem' }}>{user.avgSessionTime}</td>
                      <td style={{ padding: '8px 12px', whiteSpace: 'nowrap', fontSize: '0.75rem' }}>{user.completionRate}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          
          {/* Alerts Panel */}
          <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Activity Alerts</h2>
              <button 
                style={{ fontSize: '0.75rem', color: '#3b82f6', cursor: 'pointer', border: 'none', background: 'none' }}
                onClick={() => setExpandedWidget('alerts')}
              >
                View All Alerts
                </button>
              </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredData.alerts && filteredData.alerts.map(alert => (
                <div 
                  key={alert.id} 
                  style={{ 
                    padding: '12px', 
                    borderRadius: '0.25rem', 
                    backgroundColor: alert.severity === 'High' ? '#fef2f2' : alert.severity === 'Medium' ? '#fffbeb' : '#eff6ff',
                    borderLeft: `4px solid ${alert.severity === 'High' ? '#ef4444' : alert.severity === 'Medium' ? '#f59e0b' : '#3b82f6'}`
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 'bold',
                      color: alert.severity === 'High' ? '#dc2626' : alert.severity === 'Medium' ? '#d97706' : '#2563eb'
                    }}>
                      {alert.severity}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{alert.time}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>{alert.message}</div>
                </div>
              ))}
              {filteredData.alerts && filteredData.alerts.length === 0 && (
                <div style={{ padding: '16px', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
                  No alerts for this department
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ padding: '16px', fontSize: '0.75rem', color: '#6b7280', textAlign: 'center' }}>
        Data last updated: Today at 14:32 GMT
      </div>

      {/* Modal content for expanded widgets */}
      <Modal 
        isOpen={expandedWidget === 'users'} 
        onClose={() => setExpandedWidget(null)} 
        title="Active Users & Sessions"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Daily Active Users</h3>
            <div style={{ height: '300px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredData.usageData}>
                          <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                  <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" name="Active Users" />
                        </LineChart>
                      </ResponsiveContainer>
                </div>
              </div>
                <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Hourly Usage Breakdown</h3>
            <div style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredData.timeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#82ca9d" name="Users" />
                </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
        </div>
                <div>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Session Duration Trends</h3>
          <div style={{ height: '300px' }}>
                     <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filteredData.usageData}>
                         <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                         <YAxis />
                         <Tooltip />
                         <Legend />
                <Line type="monotone" dataKey="avgDuration" stroke="#ff8042" name="Average Duration (min)" />
              </LineChart>
                     </ResponsiveContainer>
                   </div>
                </div>
      </Modal>

      <Modal 
        isOpen={expandedWidget === 'features'} 
        onClose={() => setExpandedWidget(null)} 
        title="Feature Usage & Engagement"
      >
        <div>
          <div style={{ marginBottom: '24px' }}>
            <select 
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px', 
                border: '1px solid #e5e7eb', 
                width: '300px',
                marginBottom: '16px' 
              }}
              aria-label="Select feature for detailed analysis"
            >
              <option value="">Select Feature for Detailed Analysis</option>
              {filteredData.featureUsageData.map(feature => (
                <option key={feature.name} value={feature.name}>{feature.name}</option>
              ))}
            </select>
          </div>
                
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                  <div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Usage Comparison</h3>
              <div style={{ height: '300px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={filteredData.featureUsageData}>
                          <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    <Bar dataKey="usage" fill="#8884d8" name="Usage Count" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
              </div>
                <div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Average Duration</h3>
              <div style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={filteredData.featureUsageData}>
                        <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    <Bar dataKey="duration" fill="#82ca9d" name="Avg Duration (min)" />
                      </BarChart>
                    </ResponsiveContainer>
              </div>
                  </div>
                </div>
                
                <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Usage by Department</h3>
            <div style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[
                  { dept: 'Marketing', dashboard: 45, reports: 78, analytics: 62 },
                  { dept: 'Sales', dashboard: 55, reports: 85, analytics: 40 },
                  { dept: 'Engineering', dashboard: 75, reports: 50, analytics: 85 },
                  { dept: 'Product', dashboard: 68, reports: 72, analytics: 70 },
                  { dept: 'Finance', dashboard: 35, reports: 92, analytics: 55 },
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dept" />
                        <YAxis />
                        <Tooltip />
                  <Legend />
                  <Bar dataKey="dashboard" fill="#8884d8" name="Dashboard" />
                  <Bar dataKey="reports" fill="#82ca9d" name="Reports" />
                  <Bar dataKey="analytics" fill="#ffc658" name="Analytics" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
      </Modal>

      <Modal 
        isOpen={expandedWidget === 'departments'} 
        onClose={() => setExpandedWidget(null)} 
        title="Department Distribution"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                     <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Distribution by Department</h3>
            <div style={{ height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={filteredData.departmentUsage}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {filteredData.departmentUsage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
                      </div>
                    </div>
                  <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Department Activity Trends</h3>
            <div style={{ height: '350px' }}>
                              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                  { month: 'Jan', marketing: 65, sales: 58, engineering: 72 },
                  { month: 'Feb', marketing: 72, sales: 62, engineering: 75 },
                  { month: 'Mar', marketing: 68, sales: 70, engineering: 78 },
                  { month: 'Apr', marketing: 75, sales: 68, engineering: 82 },
                  { month: 'May', marketing: 80, sales: 72, engineering: 85 },
                  { month: 'Jun', marketing: 78, sales: 76, engineering: 88 },
                ]}>
                                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                                  <YAxis />
                                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="marketing" stroke="#8884d8" name="Marketing" />
                  <Line type="monotone" dataKey="sales" stroke="#82ca9d" name="Sales" />
                  <Line type="monotone" dataKey="engineering" stroke="#ffc658" name="Engineering" />
                                </LineChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      <div>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Feature Usage by Department</h3>
          <div style={{ height: '300px' }}>
                              <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { feature: 'Dashboard', marketing: 78, sales: 82, engineering: 92, product: 88, finance: 65 },
                { feature: 'Reports', marketing: 86, sales: 92, engineering: 68, product: 75, finance: 95 },
                { feature: 'Analytics', marketing: 92, sales: 76, engineering: 85, product: 82, finance: 78 },
                { feature: 'Settings', marketing: 45, sales: 58, engineering: 82, product: 62, finance: 52 }
              ]}>
                                  <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="feature" />
                                  <YAxis />
                                  <Tooltip />
                <Legend />
                <Bar dataKey="marketing" fill="#8884d8" name="Marketing" />
                <Bar dataKey="sales" fill="#82ca9d" name="Sales" />
                <Bar dataKey="engineering" fill="#ffc658" name="Engineering" />
                <Bar dataKey="product" fill="#ff8042" name="Product" />
                <Bar dataKey="finance" fill="#0088FE" name="Finance" />
              </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
      </Modal>
      
      <Modal 
        isOpen={expandedWidget === 'funnel'} 
        onClose={() => setExpandedWidget(null)} 
        title="User Journey Funnel"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Current Funnel Performance</h3>
            <div style={{ height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={filteredData.funnelData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Bar dataKey="users" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
                            </div>
                          </div>
                   <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Conversion Rates</h3>
            <div style={{ height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { stage: "Login → Dashboard", rate: 95 },
                    { stage: "Dashboard → Feature Access", rate: 86 },
                    { stage: "Feature Access → Task Started", rate: 83 },
                    { stage: "Task Started → Task Completed", rate: 79 }
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="stage" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="rate" fill="#82ca9d" name="Conversion Rate %" />
                </BarChart>
              </ResponsiveContainer>
                           </div>
                         </div>
                     </div>
                       <div>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Funnel Trends (Last 6 Months)</h3>
          <div style={{ height: '300px' }}>
                           <ResponsiveContainer width="100%" height="100%">
              <LineChart
                                 data={[
                  { month: 'Jan', login: 1000, dashboard: 950, featureAccess: 820, taskStarted: 680, taskCompleted: 540 },
                  { month: 'Feb', login: 1050, dashboard: 1000, featureAccess: 870, taskStarted: 720, taskCompleted: 580 },
                  { month: 'Mar', login: 1100, dashboard: 1040, featureAccess: 910, taskStarted: 760, taskCompleted: 620 },
                  { month: 'Apr', login: 980, dashboard: 930, featureAccess: 800, taskStarted: 650, taskCompleted: 510 },
                  { month: 'May', login: 1200, dashboard: 1150, featureAccess: 1020, taskStarted: 880, taskCompleted: 750 },
                  { month: 'Jun', login: 1250, dashboard: 1190, featureAccess: 1050, taskStarted: 900, taskCompleted: 780 }
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                               <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="login" stroke="#8884d8" name="Login" />
                <Line type="monotone" dataKey="dashboard" stroke="#82ca9d" name="Dashboard" />
                <Line type="monotone" dataKey="featureAccess" stroke="#ffc658" name="Feature Access" />
                <Line type="monotone" dataKey="taskStarted" stroke="#ff8042" name="Task Started" />
                <Line type="monotone" dataKey="taskCompleted" stroke="#0088FE" name="Task Completed" />
              </LineChart>
                           </ResponsiveContainer>
                         </div>
                       </div>
      </Modal>

      <Modal 
        isOpen={expandedWidget === 'timeOfDay'} 
        onClose={() => setExpandedWidget(null)} 
        title="Time of Day Activity"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                       <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Hourly Distribution</h3>
            <div style={{ height: '350px' }}>
                           <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredData.timeData}>
                               <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                               <YAxis />
                               <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#8884d8" name="Active Users" />
                </AreaChart>
                           </ResponsiveContainer>
                         </div>
                       </div>
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Workday vs Non-Workday</h3>
            <div style={{ height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { hour: '00:00', weekday: 35, weekend: 68 },
                    { hour: '02:00', weekday: 25, weekend: 55 },
                    { hour: '04:00', weekday: 12, weekend: 42 },
                    { hour: '06:00', weekday: 28, weekend: 35 },
                    { hour: '08:00', weekday: 142, weekend: 85 },
                    { hour: '10:00', weekday: 250, weekend: 120 },
                    { hour: '12:00', weekday: 185, weekend: 95 },
                    { hour: '14:00', weekday: 240, weekend: 110 },
                    { hour: '16:00', weekday: 220, weekend: 95 },
                    { hour: '18:00', weekday: 145, weekend: 105 },
                    { hour: '20:00', weekday: 85, weekend: 125 },
                    { hour: '22:00', weekday: 65, weekend: 145 }
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="weekday" stroke="#8884d8" name="Weekday" />
                  <Line type="monotone" dataKey="weekend" stroke="#82ca9d" name="Weekend" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
            </div>
        <div>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Activity by Department and Time</h3>
          <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { time: 'Morning (5am-12pm)', marketing: 245, sales: 285, engineering: 190, product: 220, finance: 175 },
                  { time: 'Afternoon (12pm-5pm)', marketing: 350, sales: 320, engineering: 280, product: 310, finance: 235 },
                  { time: 'Evening (5pm-9pm)', marketing: 180, sales: 220, engineering: 310, product: 240, finance: 120 },
                  { time: 'Night (9pm-5am)', marketing: 95, sales: 85, engineering: 150, product: 100, finance: 45 }
                ]}
              >
                  <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                <Bar dataKey="marketing" fill="#8884d8" name="Marketing" />
                <Bar dataKey="sales" fill="#82ca9d" name="Sales" />
                <Bar dataKey="engineering" fill="#ffc658" name="Engineering" />
                <Bar dataKey="product" fill="#ff8042" name="Product" />
                <Bar dataKey="finance" fill="#0088FE" name="Finance" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
      </Modal>

      <Modal 
        isOpen={expandedWidget === 'roles'} 
        onClose={() => setExpandedWidget(null)} 
        title="Usage by Role"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Role Distribution</h3>
            <div style={{ height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={filteredData.roleData.map(item => ({ name: item.role, value: item.users }))}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {filteredData.roleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Sessions Per Week by Role</h3>
            <div style={{ height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredData.roleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="role" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="avgSessionsPerWeek" fill="#82ca9d" name="Avg Sessions/Week" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
            </div>
        <div>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Feature Usage by Role</h3>
          <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { feature: 'Dashboard', admin: 95, manager: 88, analyst: 92, user: 85, reviewer: 70 },
                  { feature: 'Reports', admin: 85, manager: 92, analyst: 97, user: 65, reviewer: 75 },
                  { feature: 'Analytics', admin: 90, manager: 80, analyst: 98, user: 45, reviewer: 40 },
                  { feature: 'Settings', admin: 98, manager: 85, analyst: 70, user: 35, reviewer: 25 },
                  { feature: 'User Management', admin: 95, manager: 90, analyst: 40, user: 20, reviewer: 15 }
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="feature" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="admin" fill="#8884d8" name="Admin" />
                <Bar dataKey="manager" fill="#82ca9d" name="Manager" />
                <Bar dataKey="analyst" fill="#ffc658" name="Analyst" />
                <Bar dataKey="user" fill="#ff8042" name="User" />
                <Bar dataKey="reviewer" fill="#0088FE" name="Reviewer" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Modal>

      <Modal 
        isOpen={expandedWidget === 'userList'} 
        onClose={() => setExpandedWidget(null)} 
        title="Active Users"
      >
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <input 
              type="text" 
              placeholder="Search users..." 
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px', 
                border: '1px solid #e5e7eb', 
                width: '300px' 
              }} 
            />
            <select 
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px', 
                border: '1px solid #e5e7eb' 
              }}
              aria-label="Filter users by department"
            >
              <option value="">All Departments</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Finance">Finance</option>
            </select>
            <select 
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px', 
                border: '1px solid #e5e7eb' 
              }}
              aria-label="Filter users by role"
            >
              <option value="">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Analyst">Analyst</option>
              <option value="User">User</option>
              <option value="Reviewer">Reviewer</option>
            </select>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>User</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Role</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Department</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Last Active</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sessions</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Avg Time</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Completion</th>
              </tr>
            </thead>
              <tbody>
                {[...filteredData.userList, 
                  ...(selectedDepartment === 'All' ? [
                    { id: 6, name: 'James Wilson', role: 'Account Manager', department: 'Sales', lastActive: '45 mins ago', sessionsThisWeek: 12, avgSessionTime: '32 min', completionRate: '88%' },
                    { id: 7, name: 'Sophia Garcia', role: 'Content Strategist', department: 'Marketing', lastActive: '3 hours ago', sessionsThisWeek: 8, avgSessionTime: '22 min', completionRate: '81%' },
                    { id: 8, name: 'Benjamin Taylor', role: 'DevOps Engineer', department: 'Engineering', lastActive: '30 mins ago', sessionsThisWeek: 20, avgSessionTime: '35 min', completionRate: '91%' },
                    { id: 9, name: 'Isabella Martinez', role: 'Customer Success', department: 'Support', lastActive: '15 mins ago', sessionsThisWeek: 25, avgSessionTime: '28 min', completionRate: '87%' },
                    { id: 10, name: 'Lucas Brown', role: 'Financial Analyst', department: 'Finance', lastActive: '1 hour ago', sessionsThisWeek: 14, avgSessionTime: '30 min', completionRate: '84%' }
                  ] : [])
                ].map((user, index) => (
                  <tr key={user.id} style={{ borderTop: index > 0 ? '1px solid #e5e7eb' : 'none' }}>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>{user.name}</div>
                  </td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap', fontSize: '0.875rem' }}>{user.role}</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap', fontSize: '0.875rem' }}>{user.department}</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap', fontSize: '0.875rem' }}>{user.lastActive}</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap', fontSize: '0.875rem' }}>{user.sessionsThisWeek}</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap', fontSize: '0.875rem' }}>{user.avgSessionTime}</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap', fontSize: '0.875rem' }}>{user.completionRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Showing {filteredData.userList.length} of {selectedDepartment === 'All' ? '234' : filteredData.userList.length} users
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ padding: '6px 12px', border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white' }}>Previous</button>
              <button style={{ padding: '6px 12px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '4px', border: 'none' }}>1</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white' }}>2</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white' }}>3</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white' }}>Next</button>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>User Activity Metrics</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { metric: 'Avg. Session Duration', value: 28 },
                  { metric: 'Sessions Per Week', value: 15 },
                  { metric: 'Features Used', value: 8 },
                  { metric: 'Workflow Completion Rate', value: 87 },
                  { metric: 'Search Queries', value: 12 }
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
                </div>
      </Modal>

      <Modal 
        isOpen={expandedWidget === 'alerts'} 
        onClose={() => setExpandedWidget(null)} 
        title="Activity Alerts"
      >
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <select 
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px', 
                border: '1px solid #e5e7eb' 
              }}
              aria-label="Filter alerts by severity"
            >
              <option value="">All Severities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <select 
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px', 
                border: '1px solid #e5e7eb' 
              }}
              aria-label="Filter alerts by category"
            >
              <option value="">All Categories</option>
              <option value="Login">Login</option>
              <option value="Performance">Performance</option>
              <option value="Adoption">Adoption</option>
              <option value="Security">Security</option>
            </select>
            <input 
              type="text" 
              placeholder="Search alerts..." 
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px', 
                border: '1px solid #e5e7eb', 
                flexGrow: 1
              }} 
            />
              </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[...filteredData.alerts,
              ...(selectedDepartment === 'All' ? [
                { id: 4, severity: 'High', message: 'Multiple failed login attempts detected from IP 192.168.1.45', time: '30 mins ago', category: 'Security' },
                { id: 5, severity: 'Medium', message: 'Analytics usage decreased by 15% in the last week', time: '2 hours ago', category: 'Adoption' },
                { id: 6, severity: 'Low', message: 'New feature tutorial completion rate is below target', time: '5 hours ago', category: 'Adoption' },
                { id: 7, severity: 'Medium', message: 'Report generation time increased by 25% for large datasets', time: '1 day ago', category: 'Performance' },
                { id: 8, severity: 'High', message: 'Unusual access pattern detected for financial reports', time: '4 hours ago', category: 'Security' },
              ] : [])
            ].map(alert => (
              <div 
                key={alert.id} 
                style={{ 
                  padding: '16px', 
                  borderRadius: '0.25rem', 
                  backgroundColor: alert.severity === 'High' ? '#fef2f2' : alert.severity === 'Medium' ? '#fffbeb' : '#eff6ff',
                  borderLeft: `4px solid ${alert.severity === 'High' ? '#ef4444' : alert.severity === 'Medium' ? '#f59e0b' : '#3b82f6'}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: 'bold',
                      color: alert.severity === 'High' ? '#dc2626' : alert.severity === 'Medium' ? '#d97706' : '#2563eb'
                    }}>
                      {alert.severity}
                    </span>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      backgroundColor: alert.severity === 'High' ? '#fee2e2' : alert.severity === 'Medium' ? '#fef3c7' : '#dbeafe',
                      padding: '2px 8px',
                      borderRadius: '9999px'
                    }}>
                      {/* Check if category exists before accessing */}
                      {('category' in alert) ? alert.category : (
                        alert.message.includes('login') ? 'Security' : 
                        alert.message.includes('adoption') ? 'Adoption' : 
                        alert.message.includes('duration') ? 'Performance' : 'General'
                      )}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{alert.time}</span>
                </div>
                <div style={{ fontSize: '0.875rem', marginTop: '8px' }}>{alert.message}</div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <button style={{ 
                    padding: '4px 10px', 
                    fontSize: '0.75rem', 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '4px'
                  }}>
                    View Details
                  </button>
                  <button style={{ 
                    padding: '4px 10px', 
                    fontSize: '0.75rem', 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '4px'
                  }}>
                    Mark as Resolved
                  </button>
                </div>
              </div>
            ))}
      </div>
      
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <button style={{ 
              padding: '8px 16px',
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              color: '#3b82f6'
            }}>
              Load More Alerts
            </button>
          </div>
      </div>
      
        <div>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>Alert Trend Analysis</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={[
                  { day: 'Mon', high: 3, medium: 5, low: 8 },
                  { day: 'Tue', high: 2, medium: 7, low: 6 },
                  { day: 'Wed', high: 5, medium: 4, low: 9 },
                  { day: 'Thu', high: 4, medium: 6, low: 7 },
                  { day: 'Fri', high: 2, medium: 8, low: 5 },
                  { day: 'Sat', high: 1, medium: 3, low: 4 },
                  { day: 'Sun', high: 0, medium: 2, low: 3 }
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="high" stroke="#ef4444" name="High Severity" />
                <Line type="monotone" dataKey="medium" stroke="#f59e0b" name="Medium Severity" />
                <Line type="monotone" dataKey="low" stroke="#3b82f6" name="Low Severity" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
// Mock data for dashboard organized by time range and department
export const mockData = {
  // Usage data by time range
  usageData: {
    '24h': [
      { name: 'Midnight', activeUsers: 25, sessionCount: 62, avgDuration: 15 },
      { name: 'Morning', activeUsers: 148, sessionCount: 398, avgDuration: 22 },
      { name: 'Noon', activeUsers: 189, sessionCount: 503, avgDuration: 19 },
      { name: 'Afternoon', activeUsers: 202, sessionCount: 565, avgDuration: 24 },
      { name: 'Evening', activeUsers: 164, sessionCount: 432, avgDuration: 20 },
      { name: 'Night', activeUsers: 86, sessionCount: 201, avgDuration: 16 }
    ],
    '7d': [
      { name: 'Mon', activeUsers: 120, sessionCount: 342, avgDuration: 18 },
      { name: 'Tue', activeUsers: 145, sessionCount: 389, avgDuration: 22 },
      { name: 'Wed', activeUsers: 132, sessionCount: 411, avgDuration: 19 },
      { name: 'Thu', activeUsers: 168, sessionCount: 502, avgDuration: 24 },
      { name: 'Fri', activeUsers: 159, sessionCount: 478, avgDuration: 21 },
      { name: 'Sat', activeUsers: 82, sessionCount: 197, avgDuration: 12 },
      { name: 'Sun', activeUsers: 91, sessionCount: 213, avgDuration: 15 }
    ],
    '30d': [
      { name: 'Week 1', activeUsers: 897, sessionCount: 2532, avgDuration: 19 },
      { name: 'Week 2', activeUsers: 925, sessionCount: 2678, avgDuration: 21 },
      { name: 'Week 3', activeUsers: 882, sessionCount: 2498, avgDuration: 18 },
      { name: 'Week 4', activeUsers: 945, sessionCount: 2712, avgDuration: 22 }
    ],
    '90d': [
      { name: 'May', activeUsers: 3625, sessionCount: 10245, avgDuration: 20 },
      { name: 'Jun', activeUsers: 3820, sessionCount: 10862, avgDuration: 21 },
      { name: 'Jul', activeUsers: 3942, sessionCount: 11256, avgDuration: 22 }
    ]
  },

  // Feature usage by department
  featureUsageByDepartment: {
    'All': [
      { name: 'Dashboard', usage: 89, duration: 15 },
      { name: 'Reports', usage: 76, duration: 23 },
      { name: 'Analytics', usage: 65, duration: 28 },
      { name: 'Settings', usage: 42, duration: 9 },
      { name: 'User Mgmt', usage: 38, duration: 12 },
      { name: 'Content', usage: 72, duration: 19 },
      { name: 'Search', usage: 81, duration: 8 }
    ],
    'Marketing': [
      { name: 'Dashboard', usage: 82, duration: 12 },
      { name: 'Reports', usage: 88, duration: 25 },
      { name: 'Analytics', usage: 76, duration: 32 },
      { name: 'Settings', usage: 28, duration: 6 },
      { name: 'User Mgmt', usage: 22, duration: 8 },
      { name: 'Content', usage: 92, duration: 28 },
      { name: 'Search', usage: 78, duration: 9 }
    ],
    'Sales': [
      { name: 'Dashboard', usage: 95, duration: 18 },
      { name: 'Reports', usage: 92, duration: 26 },
      { name: 'Analytics', usage: 72, duration: 30 },
      { name: 'Settings', usage: 32, duration: 7 },
      { name: 'User Mgmt', usage: 35, duration: 10 },
      { name: 'Content', usage: 65, duration: 15 },
      { name: 'Search', usage: 88, duration: 7 }
    ],
    'Engineering': [
      { name: 'Dashboard', usage: 86, duration: 16 },
      { name: 'Reports', usage: 58, duration: 18 },
      { name: 'Analytics', usage: 62, duration: 25 },
      { name: 'Settings', usage: 78, duration: 14 },
      { name: 'User Mgmt', usage: 52, duration: 15 },
      { name: 'Content', usage: 48, duration: 12 },
      { name: 'Search', usage: 72, duration: 6 }
    ],
    'Product': [
      { name: 'Dashboard', usage: 92, duration: 18 },
      { name: 'Reports', usage: 75, duration: 22 },
      { name: 'Analytics', usage: 82, duration: 32 },
      { name: 'Settings', usage: 45, duration: 10 },
      { name: 'User Mgmt', usage: 38, duration: 12 },
      { name: 'Content', usage: 78, duration: 18 },
      { name: 'Search', usage: 85, duration: 9 }
    ],
    'Finance': [
      { name: 'Dashboard', usage: 84, duration: 14 },
      { name: 'Reports', usage: 96, duration: 28 },
      { name: 'Analytics', usage: 72, duration: 32 },
      { name: 'Settings', usage: 35, duration: 8 },
      { name: 'User Mgmt', usage: 28, duration: 9 },
      { name: 'Content', usage: 42, duration: 15 },
      { name: 'Search', usage: 65, duration: 7 }
    ]
  },

  // Department usage by time range
  departmentUsageByTimeRange: {
    '24h': [
      { name: 'Marketing', value: 26 },
      { name: 'Sales', value: 24 },
      { name: 'Engineering', value: 20 },
      { name: 'Product', value: 15 },
      { name: 'Customer Support', value: 10 },
      { name: 'Finance', value: 5 }
    ],
    '7d': [
      { name: 'Marketing', value: 28 },
      { name: 'Sales', value: 23 },
      { name: 'Engineering', value: 19 },
      { name: 'Product', value: 15 },
      { name: 'Customer Support', value: 9 },
      { name: 'Finance', value: 6 }
    ],
    '30d': [
      { name: 'Marketing', value: 25 },
      { name: 'Sales', value: 24 },
      { name: 'Engineering', value: 22 },
      { name: 'Product', value: 14 },
      { name: 'Customer Support', value: 8 },
      { name: 'Finance', value: 7 }
    ],
    '90d': [
      { name: 'Marketing', value: 24 },
      { name: 'Sales', value: 26 },
      { name: 'Engineering', value: 23 },
      { name: 'Product', value: 13 },
      { name: 'Customer Support', value: 8 },
      { name: 'Finance', value: 6 }
    ]
  },

  // Session funnel by department
  sessionFunnelByDepartment: {
    'All': [
      { name: 'Login', users: 1000 },
      { name: 'Dashboard', users: 950 },
      { name: 'Feature Access', users: 820 },
      { name: 'Task Started', users: 680 },
      { name: 'Task Completed', users: 540 }
    ],
    'Marketing': [
      { name: 'Login', users: 250 },
      { name: 'Dashboard', users: 242 },
      { name: 'Feature Access', users: 215 },
      { name: 'Task Started', users: 180 },
      { name: 'Task Completed', users: 145 }
    ],
    'Sales': [
      { name: 'Login', users: 220 },
      { name: 'Dashboard', users: 210 },
      { name: 'Feature Access', users: 185 },
      { name: 'Task Started', users: 165 },
      { name: 'Task Completed', users: 140 }
    ],
    'Engineering': [
      { name: 'Login', users: 180 },
      { name: 'Dashboard', users: 175 },
      { name: 'Feature Access', users: 160 },
      { name: 'Task Started', users: 135 },
      { name: 'Task Completed', users: 110 }
    ],
    'Product': [
      { name: 'Login', users: 150 },
      { name: 'Dashboard', users: 145 },
      { name: 'Feature Access', users: 120 },
      { name: 'Task Started', users: 90 },
      { name: 'Task Completed', users: 70 }
    ],
    'Finance': [
      { name: 'Login', users: 100 },
      { name: 'Dashboard', users: 92 },
      { name: 'Feature Access', users: 75 },
      { name: 'Task Started', users: 55 },
      { name: 'Task Completed', users: 35 }
    ]
  },

  // Time of day by time range
  timeOfDayByTimeRange: {
    '24h': [
      { hour: '00:00', users: 42 },
      { hour: '02:00', users: 28 },
      { hour: '04:00', users: 15 },
      { hour: '06:00', users: 34 },
      { hour: '08:00', users: 148 },
      { hour: '10:00', users: 252 },
      { hour: '12:00', users: 189 },
      { hour: '14:00', users: 243 },
      { hour: '16:00', users: 217 },
      { hour: '18:00', users: 146 },
      { hour: '20:00', users: 87 },
      { hour: '22:00', users: 65 }
    ],
    '7d': [
      { hour: '00:00', users: 40 },
      { hour: '02:00', users: 25 },
      { hour: '04:00', users: 12 },
      { hour: '06:00', users: 30 },
      { hour: '08:00', users: 140 },
      { hour: '10:00', users: 245 },
      { hour: '12:00', users: 180 },
      { hour: '14:00', users: 240 },
      { hour: '16:00', users: 210 },
      { hour: '18:00', users: 140 },
      { hour: '20:00', users: 82 },
      { hour: '22:00', users: 60 }
    ],
    '30d': [
      { hour: '00:00', users: 38 },
      { hour: '02:00', users: 22 },
      { hour: '04:00', users: 10 },
      { hour: '06:00', users: 26 },
      { hour: '08:00', users: 135 },
      { hour: '10:00', users: 240 },
      { hour: '12:00', users: 175 },
      { hour: '14:00', users: 230 },
      { hour: '16:00', users: 205 },
      { hour: '18:00', users: 135 },
      { hour: '20:00', users: 80 },
      { hour: '22:00', users: 58 }
    ],
    '90d': [
      { hour: '00:00', users: 35 },
      { hour: '02:00', users: 20 },
      { hour: '04:00', users: 8 },
      { hour: '06:00', users: 22 },
      { hour: '08:00', users: 130 },
      { hour: '10:00', users: 235 },
      { hour: '12:00', users: 170 },
      { hour: '14:00', users: 225 },
      { hour: '16:00', users: 200 },
      { hour: '18:00', users: 130 },
      { hour: '20:00', users: 75 },
      { hour: '22:00', users: 55 }
    ]
  },

  // Role data by department
  roleDataByDepartment: {
    'All': [
      { role: 'Admin', users: 15, avgSessionsPerWeek: 28, avgFeatureUse: 12 },
      { role: 'Manager', users: 42, avgSessionsPerWeek: 18, avgFeatureUse: 9 },
      { role: 'Analyst', users: 78, avgSessionsPerWeek: 22, avgFeatureUse: 14 },
      { role: 'User', users: 245, avgSessionsPerWeek: 8, avgFeatureUse: 6 },
      { role: 'Reviewer', users: 35, avgSessionsPerWeek: 5, avgFeatureUse: 4 }
    ],
    'Marketing': [
      { role: 'Admin', users: 3, avgSessionsPerWeek: 25, avgFeatureUse: 11 },
      { role: 'Manager', users: 12, avgSessionsPerWeek: 20, avgFeatureUse: 10 },
      { role: 'Analyst', users: 18, avgSessionsPerWeek: 24, avgFeatureUse: 15 },
      { role: 'User', users: 45, avgSessionsPerWeek: 7, avgFeatureUse: 5 },
      { role: 'Reviewer', users: 8, avgSessionsPerWeek: 4, avgFeatureUse: 3 }
    ],
    'Sales': [
      { role: 'Admin', users: 4, avgSessionsPerWeek: 30, avgFeatureUse: 13 },
      { role: 'Manager', users: 15, avgSessionsPerWeek: 22, avgFeatureUse: 10 },
      { role: 'Analyst', users: 12, avgSessionsPerWeek: 26, avgFeatureUse: 16 },
      { role: 'User', users: 65, avgSessionsPerWeek: 10, avgFeatureUse: 7 },
      { role: 'Reviewer', users: 6, avgSessionsPerWeek: 6, avgFeatureUse: 4 }
    ],
    'Engineering': [
      { role: 'Admin', users: 5, avgSessionsPerWeek: 32, avgFeatureUse: 14 },
      { role: 'Manager', users: 8, avgSessionsPerWeek: 16, avgFeatureUse: 8 },
      { role: 'Analyst', users: 22, avgSessionsPerWeek: 24, avgFeatureUse: 18 },
      { role: 'User', users: 48, avgSessionsPerWeek: 12, avgFeatureUse: 8 },
      { role: 'Reviewer', users: 10, avgSessionsPerWeek: 6, avgFeatureUse: 5 }
    ],
    'Product': [
      { role: 'Admin', users: 2, avgSessionsPerWeek: 26, avgFeatureUse: 12 },
      { role: 'Manager', users: 5, avgSessionsPerWeek: 18, avgFeatureUse: 9 },
      { role: 'Analyst', users: 18, avgSessionsPerWeek: 22, avgFeatureUse: 15 },
      { role: 'User', users: 42, avgSessionsPerWeek: 8, avgFeatureUse: 6 },
      { role: 'Reviewer', users: 8, avgSessionsPerWeek: 5, avgFeatureUse: 4 }
    ],
    'Finance': [
      { role: 'Admin', users: 1, avgSessionsPerWeek: 24, avgFeatureUse: 10 },
      { role: 'Manager', users: 2, avgSessionsPerWeek: 15, avgFeatureUse: 8 },
      { role: 'Analyst', users: 8, avgSessionsPerWeek: 28, avgFeatureUse: 16 },
      { role: 'User', users: 12, avgSessionsPerWeek: 6, avgFeatureUse: 4 },
      { role: 'Reviewer', users: 3, avgSessionsPerWeek: 4, avgFeatureUse: 3 }
    ]
  },

  // User lists by department
  userListByDepartment: {
    'All': [
      { id: 1, name: 'Sarah Johnson', role: 'Product Manager', department: 'Product', lastActive: '10 mins ago', sessionsThisWeek: 18, avgSessionTime: '24 min', completionRate: '92%' },
      { id: 2, name: 'Michael Chen', role: 'Senior Developer', department: 'Engineering', lastActive: '2 hours ago', sessionsThisWeek: 22, avgSessionTime: '38 min', completionRate: '89%' },
      { id: 3, name: 'Emma Rodriguez', role: 'Marketing Specialist', department: 'Marketing', lastActive: '25 mins ago', sessionsThisWeek: 15, avgSessionTime: '18 min', completionRate: '85%' },
      { id: 4, name: 'David Kim', role: 'Data Analyst', department: 'Analytics', lastActive: '5 mins ago', sessionsThisWeek: 26, avgSessionTime: '42 min', completionRate: '94%' },
      { id: 5, name: 'Olivia Smith', role: 'UX Designer', department: 'Design', lastActive: '1 day ago', sessionsThisWeek: 9, avgSessionTime: '15 min', completionRate: '78%' }
    ],
    'Marketing': [
      { id: 3, name: 'Emma Rodriguez', role: 'Marketing Specialist', department: 'Marketing', lastActive: '25 mins ago', sessionsThisWeek: 15, avgSessionTime: '18 min', completionRate: '85%' },
      { id: 7, name: 'Sophia Garcia', role: 'Content Strategist', department: 'Marketing', lastActive: '3 hours ago', sessionsThisWeek: 8, avgSessionTime: '22 min', completionRate: '81%' }
    ],
    'Sales': [
      { id: 6, name: 'James Wilson', role: 'Account Manager', department: 'Sales', lastActive: '45 mins ago', sessionsThisWeek: 12, avgSessionTime: '32 min', completionRate: '88%' }
    ],
    'Engineering': [
      { id: 2, name: 'Michael Chen', role: 'Senior Developer', department: 'Engineering', lastActive: '2 hours ago', sessionsThisWeek: 22, avgSessionTime: '38 min', completionRate: '89%' },
      { id: 8, name: 'Benjamin Taylor', role: 'DevOps Engineer', department: 'Engineering', lastActive: '30 mins ago', sessionsThisWeek: 20, avgSessionTime: '35 min', completionRate: '91%' }
    ],
    'Product': [
      { id: 1, name: 'Sarah Johnson', role: 'Product Manager', department: 'Product', lastActive: '10 mins ago', sessionsThisWeek: 18, avgSessionTime: '24 min', completionRate: '92%' }
    ],
    'Finance': [
      { id: 10, name: 'Lucas Brown', role: 'Financial Analyst', department: 'Finance', lastActive: '1 hour ago', sessionsThisWeek: 14, avgSessionTime: '30 min', completionRate: '84%' }
    ]
  },

  // Alerts by department
  alertsByDepartment: {
    'All': [
      { id: 1, severity: 'High', message: 'Unusual login pattern detected for 3 admin users', time: '15 mins ago' },
      { id: 2, severity: 'Medium', message: 'Feature adoption below target in Sales department', time: '1 hour ago' },
      { id: 3, severity: 'Low', message: 'Session duration decreasing for new users', time: '3 hours ago' }
    ],
    'Marketing': [
      { id: 5, severity: 'Medium', message: 'Analytics usage decreased by 15% in Marketing', time: '2 hours ago', category: 'Adoption' }
    ],
    'Sales': [
      { id: 2, severity: 'Medium', message: 'Feature adoption below target in Sales department', time: '1 hour ago' }
    ],
    'Engineering': [
      { id: 8, severity: 'High', message: 'Unusual access pattern detected for Engineering systems', time: '4 hours ago', category: 'Security' }
    ],
    'Product': [
      { id: 6, severity: 'Low', message: 'New feature tutorial completion rate is below target in Product', time: '5 hours ago', category: 'Adoption' }
    ],
    'Finance': [
      { id: 7, severity: 'Medium', message: 'Report generation time increased by 25% for Finance users', time: '1 day ago', category: 'Performance' }
    ]
  },

  // Key metrics by time range and department
  keyMetrics: {
    '24h': {
      'All': { activeUsers: 814, avgSessionDuration: 17.8, featureAdoptionRate: 75, workflowCompletion: 80 },
      'Marketing': { activeUsers: 210, avgSessionDuration: 16.5, featureAdoptionRate: 78, workflowCompletion: 82 },
      'Sales': { activeUsers: 185, avgSessionDuration: 19.2, featureAdoptionRate: 82, workflowCompletion: 85 },
      'Engineering': { activeUsers: 155, avgSessionDuration: 22.4, featureAdoptionRate: 72, workflowCompletion: 88 },
      'Product': { activeUsers: 122, avgSessionDuration: 18.6, featureAdoptionRate: 80, workflowCompletion: 84 },
      'Finance': { activeUsers: 72, avgSessionDuration: 15.2, featureAdoptionRate: 68, workflowCompletion: 76 }
    },
    '7d': {
      'All': { activeUsers: 897, avgSessionDuration: 18.5, featureAdoptionRate: 76, workflowCompletion: 82 },
      'Marketing': { activeUsers: 235, avgSessionDuration: 17.2, featureAdoptionRate: 80, workflowCompletion: 83 },
      'Sales': { activeUsers: 195, avgSessionDuration: 20.4, featureAdoptionRate: 84, workflowCompletion: 87 },
      'Engineering': { activeUsers: 160, avgSessionDuration: 23.8, featureAdoptionRate: 74, workflowCompletion: 90 },
      'Product': { activeUsers: 128, avgSessionDuration: 19.2, featureAdoptionRate: 82, workflowCompletion: 85 },
      'Finance': { activeUsers: 78, avgSessionDuration: 16.5, featureAdoptionRate: 70, workflowCompletion: 78 }
    },
    '30d': {
      'All': { activeUsers: 925, avgSessionDuration: 19.2, featureAdoptionRate: 78, workflowCompletion: 83 },
      'Marketing': { activeUsers: 242, avgSessionDuration: 17.8, featureAdoptionRate: 82, workflowCompletion: 84 },
      'Sales': { activeUsers: 205, avgSessionDuration: 21.2, featureAdoptionRate: 86, workflowCompletion: 88 },
      'Engineering': { activeUsers: 172, avgSessionDuration: 24.5, featureAdoptionRate: 76, workflowCompletion: 91 },
      'Product': { activeUsers: 132, avgSessionDuration: 20.1, featureAdoptionRate: 84, workflowCompletion: 86 },
      'Finance': { activeUsers: 82, avgSessionDuration: 17.2, featureAdoptionRate: 72, workflowCompletion: 80 }
    },
    '90d': {
      'All': { activeUsers: 968, avgSessionDuration: 20.1, featureAdoptionRate: 80, workflowCompletion: 84 },
      'Marketing': { activeUsers: 255, avgSessionDuration: 18.5, featureAdoptionRate: 84, workflowCompletion: 85 },
      'Sales': { activeUsers: 218, avgSessionDuration: 22.8, featureAdoptionRate: 88, workflowCompletion: 89 },
      'Engineering': { activeUsers: 185, avgSessionDuration: 25.2, featureAdoptionRate: 78, workflowCompletion: 92 },
      'Product': { activeUsers: 140, avgSessionDuration: 21.4, featureAdoptionRate: 86, workflowCompletion: 87 },
      'Finance': { activeUsers: 88, avgSessionDuration: 18.4, featureAdoptionRate: 74, workflowCompletion: 82 }
    }
  }
};

// Chart colors
export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
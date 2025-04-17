// Mock data for dashboard
export const usageData = [
  { name: 'Mon', activeUsers: 120, sessionCount: 342, avgDuration: 18 },
  { name: 'Tue', activeUsers: 145, sessionCount: 389, avgDuration: 22 },
  { name: 'Wed', activeUsers: 132, sessionCount: 411, avgDuration: 19 },
  { name: 'Thu', activeUsers: 168, sessionCount: 502, avgDuration: 24 },
  { name: 'Fri', activeUsers: 159, sessionCount: 478, avgDuration: 21 },
  { name: 'Sat', activeUsers: 82, sessionCount: 197, avgDuration: 12 },
  { name: 'Sun', activeUsers: 91, sessionCount: 213, avgDuration: 15 }
];

// Hourly detailed data for active users widget
export const hourlyUsageData = [
  { hour: '00:00', activeUsers: 42, sessionCount: 78 },
  { hour: '01:00', activeUsers: 35, sessionCount: 62 },
  { hour: '02:00', activeUsers: 28, sessionCount: 45 },
  { hour: '03:00', activeUsers: 20, sessionCount: 35 },
  { hour: '04:00', activeUsers: 15, sessionCount: 28 },
  { hour: '05:00', activeUsers: 22, sessionCount: 40 },
  { hour: '06:00', activeUsers: 34, sessionCount: 65 },
  { hour: '07:00', activeUsers: 78, sessionCount: 124 },
  { hour: '08:00', activeUsers: 148, sessionCount: 230 },
  { hour: '09:00', activeUsers: 186, sessionCount: 312 },
  { hour: '10:00', activeUsers: 252, sessionCount: 405 },
  { hour: '11:00', activeUsers: 238, sessionCount: 389 },
  { hour: '12:00', activeUsers: 189, sessionCount: 325 },
  { hour: '13:00', activeUsers: 215, sessionCount: 364 },
  { hour: '14:00', activeUsers: 243, sessionCount: 398 },
  { hour: '15:00', activeUsers: 228, sessionCount: 376 },
  { hour: '16:00', activeUsers: 217, sessionCount: 342 },
  { hour: '17:00', activeUsers: 182, sessionCount: 285 },
  { hour: '18:00', activeUsers: 146, sessionCount: 228 },
  { hour: '19:00', activeUsers: 118, sessionCount: 187 },
  { hour: '20:00', activeUsers: 87, sessionCount: 134 },
  { hour: '21:00', activeUsers: 76, sessionCount: 120 },
  { hour: '22:00', activeUsers: 65, sessionCount: 102 },
  { hour: '23:00', activeUsers: 52, sessionCount: 85 }
];

export const featureUsageData = [
  { name: 'Dashboard', usage: 89, duration: 15 },
  { name: 'Reports', usage: 76, duration: 23 },
  { name: 'Analytics', usage: 65, duration: 28 },
  { name: 'Settings', usage: 42, duration: 9 },
  { name: 'User Mgmt', usage: 38, duration: 12 },
  { name: 'Content', usage: 72, duration: 19 },
  { name: 'Search', usage: 81, duration: 8 }
];

// Detailed feature usage data for second layer
export const detailedFeatureData = {
  'Dashboard': [
    { subfeature: 'Overview Panel', usage: 92, duration: 8, completionRate: 95 },
    { subfeature: 'Quick Stats', usage: 87, duration: 4, completionRate: 98 },
    { subfeature: 'Recent Activity', usage: 76, duration: 6, completionRate: 88 },
    { subfeature: 'Performance Graphs', usage: 65, duration: 12, completionRate: 72 }
  ],
  'Reports': [
    { subfeature: 'Generate Report', usage: 82, duration: 14, completionRate: 75 },
    { subfeature: 'Scheduled Reports', usage: 45, duration: 8, completionRate: 92 },
    { subfeature: 'Custom Templates', usage: 38, duration: 20, completionRate: 65 },
    { subfeature: 'Export Options', usage: 73, duration: 5, completionRate: 88 }
  ],
  'Analytics': [
    { subfeature: 'Data Explorer', usage: 58, duration: 22, completionRate: 68 },
    { subfeature: 'Visualizations', usage: 72, duration: 18, completionRate: 76 },
    { subfeature: 'Predictive Models', usage: 32, duration: 28, completionRate: 45 },
    { subfeature: 'Metrics Configuration', usage: 41, duration: 15, completionRate: 62 }
  ],
  'Settings': [
    { subfeature: 'User Preferences', usage: 68, duration: 7, completionRate: 95 },
    { subfeature: 'System Settings', usage: 28, duration: 12, completionRate: 76 },
    { subfeature: 'Notifications', usage: 54, duration: 4, completionRate: 92 },
    { subfeature: 'Integrations', usage: 25, duration: 18, completionRate: 58 }
  ],
  'User Mgmt': [
    { subfeature: 'User Creation', usage: 42, duration: 10, completionRate: 88 },
    { subfeature: 'Permissions', usage: 38, duration: 14, completionRate: 72 },
    { subfeature: 'Role Management', usage: 32, duration: 12, completionRate: 68 },
    { subfeature: 'Access Logs', usage: 26, duration: 8, completionRate: 95 }
  ],
  'Content': [
    { subfeature: 'Document Upload', usage: 78, duration: 12, completionRate: 85 },
    { subfeature: 'Content Editor', usage: 65, duration: 24, completionRate: 72 },
    { subfeature: 'Media Library', usage: 72, duration: 15, completionRate: 78 },
    { subfeature: 'File Management', usage: 82, duration: 10, completionRate: 92 }
  ],
  'Search': [
    { subfeature: 'Basic Search', usage: 95, duration: 5, completionRate: 98 },
    { subfeature: 'Advanced Filters', usage: 58, duration: 12, completionRate: 72 },
    { subfeature: 'Saved Searches', usage: 42, duration: 8, completionRate: 85 },
    { subfeature: 'Search History', usage: 38, duration: 4, completionRate: 92 }
  ]
};

export const departmentUsage = [
  { name: 'Marketing', value: 28 },
  { name: 'Sales', value: 23 },
  { name: 'Engineering', value: 19 },
  { name: 'Product', value: 15 },
  { name: 'Customer Support', value: 9 },
  { name: 'Finance', value: 6 }
];

// Detailed department data for second layer
export const detailedDepartmentData = {
  'Marketing': [
    { subgroup: 'Content Team', users: 12, avgSessionsPerWeek: 18, completionRate: 82 },
    { subgroup: 'Digital Marketing', users: 8, avgSessionsPerWeek: 22, completionRate: 78 },
    { subgroup: 'Brand Management', users: 5, avgSessionsPerWeek: 14, completionRate: 85 },
    { subgroup: 'Campaign Analytics', users: 3, avgSessionsPerWeek: 25, completionRate: 92 }
  ],
  'Sales': [
    { subgroup: 'Direct Sales', users: 10, avgSessionsPerWeek: 28, completionRate: 88 },
    { subgroup: 'Account Management', users: 8, avgSessionsPerWeek: 24, completionRate: 82 },
    { subgroup: 'Sales Development', users: 5, avgSessionsPerWeek: 18, completionRate: 75 }
  ],
  'Engineering': [
    { subgroup: 'Frontend', users: 7, avgSessionsPerWeek: 30, completionRate: 86 },
    { subgroup: 'Backend', users: 6, avgSessionsPerWeek: 28, completionRate: 92 },
    { subgroup: 'DevOps', users: 3, avgSessionsPerWeek: 22, completionRate: 88 },
    { subgroup: 'QA', users: 3, avgSessionsPerWeek: 26, completionRate: 94 }
  ],
  'Product': [
    { subgroup: 'Product Managers', users: 5, avgSessionsPerWeek: 32, completionRate: 90 },
    { subgroup: 'UX Design', users: 4, avgSessionsPerWeek: 24, completionRate: 85 },
    { subgroup: 'Product Analytics', users: 3, avgSessionsPerWeek: 28, completionRate: 92 },
    { subgroup: 'User Research', users: 3, avgSessionsPerWeek: 18, completionRate: 78 }
  ],
  'Customer Support': [
    { subgroup: 'Tier 1 Support', users: 5, avgSessionsPerWeek: 38, completionRate: 96 },
    { subgroup: 'Tier 2 Support', users: 3, avgSessionsPerWeek: 32, completionRate: 92 },
    { subgroup: 'Customer Success', users: 1, avgSessionsPerWeek: 18, completionRate: 85 }
  ],
  'Finance': [
    { subgroup: 'Accounting', users: 3, avgSessionsPerWeek: 14, completionRate: 94 },
    { subgroup: 'Financial Planning', users: 2, avgSessionsPerWeek: 12, completionRate: 88 },
    { subgroup: 'Procurement', users: 1, avgSessionsPerWeek: 8, completionRate: 76 }
  ]
};

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

export const sessionFunnelData = [
  { name: 'Login', users: 1000 },
  { name: 'Dashboard', users: 950 },
  { name: 'Feature Access', users: 820 },
  { name: 'Task Started', users: 680 },
  { name: 'Task Completed', users: 540 }
];

// Detailed funnel data by user segment
export const detailedFunnelData = {
  'By User Type': [
    { name: 'New Users', login: 280, dashboard: 245, featureAccess: 190, taskStarted: 120, taskCompleted: 75 },
    { name: 'Regular Users', login: 520, dashboard: 510, featureAccess: 475, taskStarted: 410, taskCompleted: 345 },
    { name: 'Power Users', login: 200, dashboard: 195, featureAccess: 155, taskStarted: 150, taskCompleted: 120 }
  ],
  'By Device': [
    { name: 'Desktop', login: 620, dashboard: 605, featureAccess: 545, taskStarted: 480, taskCompleted: 425 },
    { name: 'Mobile', login: 280, dashboard: 255, featureAccess: 195, taskStarted: 140, taskCompleted: 85 },
    { name: 'Tablet', login: 100, dashboard: 90, featureAccess: 80, taskStarted: 60, taskCompleted: 30 }
  ],
  'By Time Period': [
    { name: 'Morning (6-12)', login: 310, dashboard: 295, featureAccess: 265, taskStarted: 230, taskCompleted: 180 },
    { name: 'Afternoon (12-6)', login: 420, dashboard: 405, featureAccess: 350, taskStarted: 310, taskCompleted: 245 },
    { name: 'Evening (6-12)', login: 270, dashboard: 250, featureAccess: 205, taskStarted: 140, taskCompleted: 115 }
  ]
};

export const timeOfDayData = [
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
];

// Detailed time data by day of week
export const detailedTimeData = {
  'Weekdays': [
    { hour: '00:00', users: 35 },
    { hour: '02:00', users: 22 },
    { hour: '04:00', users: 12 },
    { hour: '06:00', users: 40 },
    { hour: '08:00', users: 182 },
    { hour: '10:00', users: 298 },
    { hour: '12:00', users: 216 },
    { hour: '14:00', users: 278 },
    { hour: '16:00', users: 245 },
    { hour: '18:00', users: 164 },
    { hour: '20:00', users: 92 },
    { hour: '22:00', users: 58 }
  ],
  'Weekends': [
    { hour: '00:00', users: 52 },
    { hour: '02:00', users: 44 },
    { hour: '04:00', users: 21 },
    { hour: '06:00', users: 18 },
    { hour: '08:00', users: 46 },
    { hour: '10:00', users: 82 },
    { hour: '12:00', users: 105 },
    { hour: '14:00', users: 128 },
    { hour: '16:00', users: 142 },
    { hour: '18:00', users: 96 },
    { hour: '20:00', users: 78 },
    { hour: '22:00', users: 82 }
  ],
  'By User Role': [
    { hour: '08:00', admin: 12, manager: 35, analyst: 65, user: 70 },
    { hour: '10:00', admin: 18, manager: 48, analyst: 92, user: 94 },
    { hour: '12:00', admin: 15, manager: 42, analyst: 68, user: 64 },
    { hour: '14:00', admin: 20, manager: 52, analyst: 88, user: 83 },
    { hour: '16:00', admin: 16, manager: 45, analyst: 82, user: 74 },
    { hour: '18:00', admin: 8, manager: 28, analyst: 54, user: 56 }
  ]
};

export const roleData = [
  { role: 'Admin', users: 15, avgSessionsPerWeek: 28, avgFeatureUse: 12 },
  { role: 'Manager', users: 42, avgSessionsPerWeek: 18, avgFeatureUse: 9 },
  { role: 'Analyst', users: 78, avgSessionsPerWeek: 22, avgFeatureUse: 14 },
  { role: 'User', users: 245, avgSessionsPerWeek: 8, avgFeatureUse: 6 },
  { role: 'Reviewer', users: 35, avgSessionsPerWeek: 5, avgFeatureUse: 4 }
];

// Detailed role data for second layer
export const detailedRoleData = {
  'Admin': [
    { metric: 'Critical Features Used', value: 95 },
    { metric: 'System Configuration Actions', value: 86 },
    { metric: 'User Management Actions', value: 78 },
    { metric: 'Security Audit Frequency', value: 92 },
    { metric: 'API Access Frequency', value: 84 }
  ],
  'Manager': [
    { metric: 'Report Generation', value: 88 },
    { metric: 'Team Performance Views', value: 92 },
    { metric: 'Task Assignment', value: 76 },
    { metric: 'Approval Workflows', value: 82 },
    { metric: 'Analytics Dashboard Usage', value: 68 }
  ],
  'Analyst': [
    { metric: 'Data Export Frequency', value: 94 },
    { metric: 'Custom Report Creation', value: 86 },
    { metric: 'Data Visualization Usage', value: 92 },
    { metric: 'API Query Frequency', value: 78 },
    { metric: 'Saved Analysis Templates', value: 72 }
  ],
  'User': [
    { metric: 'Content Creation', value: 76 },
    { metric: 'Search Functionality', value: 92 },
    { metric: 'Task Completion', value: 82 },
    { metric: 'Collaboration Features', value: 68 },
    { metric: 'Mobile Access', value: 58 }
  ],
  'Reviewer': [
    { metric: 'Content Review Speed', value: 88 },
    { metric: 'Feedback Submission', value: 92 },
    { metric: 'Approval Process Usage', value: 96 },
    { metric: 'Comment Thread Participation', value: 78 },
    { metric: 'Version Comparison Usage', value: 64 }
  ]
};

export const userList = [
  { id: 1, name: 'Sarah Johnson', role: 'Product Manager', department: 'Product', lastActive: '10 mins ago', sessionsThisWeek: 18, avgSessionTime: '24 min', completionRate: '92%' },
  { id: 2, name: 'Michael Chen', role: 'Senior Developer', department: 'Engineering', lastActive: '2 hours ago', sessionsThisWeek: 22, avgSessionTime: '38 min', completionRate: '89%' },
  { id: 3, name: 'Emma Rodriguez', role: 'Marketing Specialist', department: 'Marketing', lastActive: '25 mins ago', sessionsThisWeek: 15, avgSessionTime: '18 min', completionRate: '85%' },
  { id: 4, name: 'David Kim', role: 'Data Analyst', department: 'Analytics', lastActive: '5 mins ago', sessionsThisWeek: 26, avgSessionTime: '42 min', completionRate: '94%' },
  { id: 5, name: 'Olivia Smith', role: 'UX Designer', department: 'Design', lastActive: '1 day ago', sessionsThisWeek: 9, avgSessionTime: '15 min', completionRate: '78%' }
];

// Detailed user activity for second layer
export const detailedUserData = {
  1: {
    recentSessions: [
      { date: '2025-04-10', duration: '32 min', features: ['Dashboard', 'Reports', 'Analytics'], completedTasks: 8 },
      { date: '2025-04-09', duration: '28 min', features: ['User Mgmt', 'Settings', 'Reports'], completedTasks: 6 },
      { date: '2025-04-08', duration: '18 min', features: ['Dashboard', 'Content', 'Search'], completedTasks: 5 }
    ],
    featureUsage: [
      { feature: 'Dashboard', usageCount: 24, avgTimeSpent: '8 min' },
      { feature: 'Reports', usageCount: 18, avgTimeSpent: '12 min' },
      { feature: 'Analytics', usageCount: 15, avgTimeSpent: '18 min' },
      { feature: 'Settings', usageCount: 6, avgTimeSpent: '4 min' }
    ],
    workflowCompletion: [
      { workflow: 'Report Generation', completions: 12, avgTime: '15 min', successRate: '92%' },
      { workflow: 'Data Analysis', completions: 8, avgTime: '24 min', successRate: '88%' },
      { workflow: 'User Management', completions: 5, avgTime: '10 min', successRate: '95%' }
    ]
  },
  2: {
    recentSessions: [
      { date: '2025-04-10', duration: '45 min', features: ['Dashboard', 'Analytics', 'Settings'], completedTasks: 12 },
      { date: '2025-04-09', duration: '38 min', features: ['Content', 'Reports', 'Search'], completedTasks: 9 },
      { date: '2025-04-08', duration: '42 min', features: ['Analytics', 'Reports', 'User Mgmt'], completedTasks: 10 }
    ],
    featureUsage: [
      { feature: 'Analytics', usageCount: 28, avgTimeSpent: '22 min' },
      { feature: 'Reports', usageCount: 15, avgTimeSpent: '14 min' },
      { feature: 'Dashboard', usageCount: 18, avgTimeSpent: '6 min' },
      { feature: 'Settings', usageCount: 12, avgTimeSpent: '8 min' }
    ],
    workflowCompletion: [
      { workflow: 'Data Analysis', completions: 18, avgTime: '26 min', successRate: '94%' },
      { workflow: 'Code Deployment', completions: 14, avgTime: '32 min', successRate: '92%' },
      { workflow: 'System Configuration', completions: 8, avgTime: '18 min', successRate: '88%' }
    ]
  }
};

export const activeAlerts = [
  { id: 1, severity: 'High', message: 'Unusual login pattern detected for 3 admin users', time: '15 mins ago' },
  { id: 2, severity: 'Medium', message: 'Feature adoption below target in Sales department', time: '1 hour ago' },
  { id: 3, severity: 'Low', message: 'Session duration decreasing for new users', time: '3 hours ago' }
];

// Detailed alert data
export const detailedAlertData = {
  1: {
    title: 'Unusual Login Pattern',
    description: 'Multiple login attempts from different locations for 3 admin users',
    affectedUsers: ['admin.user1', 'admin.user2', 'admin.user3'],
    locations: ['New York, US', 'London, UK', 'Singapore, SG'],
    timeline: [
      { time: '09:15', action: 'First unusual login detected' },
      { time: '09:22', action: 'Second login from different IP' },
      { time: '09:34', action: 'Third login attempt blocked' }
    ],
    recommendations: [
      'Force password reset for affected accounts',
      'Enable 2FA for all admin users',
      'Review access logs for suspicious activity'
    ]
  },
  2: {
    title: 'Low Feature Adoption',
    description: 'Sales department feature adoption rate is 45% below target',
    affectedFeatures: [
      { feature: 'Advanced Analytics', adoption: '28%', target: '75%' },
      { feature: 'Mobile Access', adoption: '42%', target: '80%' },
      { feature: 'API Integration', adoption: '15%', target: '60%' }
    ],
    timeline: [
      { date: '2025-03-15', adoption: '52%' },
      { date: '2025-03-30', adoption: '48%' },
      { date: '2025-04-10', adoption: '45%' }
    ],
    recommendations: [
      'Schedule training session for Sales team',
      'Create targeted feature guides',
      'Set up feature champions within department'
    ]
  },
  3: {
    title: 'Decreasing Session Duration',
    description: 'Average session time for new users decreased by 32% over past week',
    data: [
      { date: '2025-04-03', avgDuration: '18.5 min' },
      { date: '2025-04-05', avgDuration: '16.2 min' },
      { date: '2025-04-07', avgDuration: '14.8 min' },
      { date: '2025-04-10', avgDuration: '12.6 min' }
    ],
    affectedFlows: [
      { flow: 'Onboarding', completionRate: '68%', previousRate: '82%' },
      { flow: 'First Task', completionRate: '54%', previousRate: '76%' },
      { flow: 'Feature Discovery', completionRate: '42%', previousRate: '65%' }
    ],
    recommendations: [
      'Review recent UI changes',
      'Analyze drop-off points in user journey',
      'Consider reverting problematic changes',
      'Strengthen onboarding tutorial'
    ]
  }
};
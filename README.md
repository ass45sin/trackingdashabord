# User Activity Tracking Dashboard

## Overview

This project is a web-based dashboard designed to visualize user activity metrics for an application. It provides insights into user engagement, feature adoption, session patterns, and more, helping stakeholders understand how users interact with the product.

The dashboard is built using:

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** For static typing, improving code quality and maintainability.
*   **Vite:** A fast frontend build tool.
*   **Recharts:** A composable charting library built on React components.
*   **Tailwind CSS (via PostCSS):** For utility-first styling (currently configured, but styles are applied via inline `style` props in the component).

## Key Features & Visualizations

*   **Key Metrics Bar:** Displays high-level metrics like Active Users, Average Session Duration, Feature Adoption Rate, and Workflow Completion, along with percentage changes.
*   **Filtering:** Users can filter the displayed data by:
    *   **Time Range:** (Last 24 Hours, 7 Days, 30 Days, 90 Days)
    *   **Department:** (All, Marketing, Sales, Engineering, Product, Finance)
*   **Main Dashboard Charts:**
    *   **Active Users & Sessions:** Line chart showing trends over the selected time range.
    *   **Feature Usage & Engagement:** Bar chart displaying usage count and average duration for key features.
    *   **Department Distribution:** Pie chart visualizing user distribution across departments.
    *   **User Journey Funnel:** Vertical bar chart illustrating user progression through key steps (e.g., Login to Task Completion).
    *   **Time of Day Activity:** Area chart showing user activity patterns throughout the day.
    *   **Usage by Role:** Bar chart comparing user count, sessions, and feature use across different user roles.
*   **User List:** A table displaying key information about active users (Name, Role, Last Active, etc.).
*   **Activity Alerts:** A panel showing recent system or activity alerts categorized by severity.
*   **Expandable Widgets (Modals):** Most dashboard sections have an "Expand" button that opens a modal window, providing more detailed charts and data breakdowns related to that specific section (e.g., detailed user sessions, feature sub-usage, department trends).

## Widget Details & Data Correlations

This section provides a breakdown of each primary widget on the dashboard, the metrics it displays, and the insights gained by correlating it with other data.

**1. Key Metrics Bar**

*   **Purpose:** Provides a quick, high-level overview of the application's health and user engagement trends.
*   **Metrics:**
    *   `Active Users`: Total distinct users during the selected period.
    *   `Avg. Session Duration`: Average time users spend per session.
    *   `Feature Adoption Rate`: Percentage of users engaging with key features (definition may vary).
    *   `Workflow Completion`: Percentage of users successfully completing core tasks.
    *   *% Change*: Trend indication compared to the previous period (logic based on mock data).
*   **Correlation Rationale:** These top-level numbers give immediate context. A drop in Active Users might prompt investigation into the **User Journey Funnel** or **Activity Alerts**. A decrease in Feature Adoption could lead to examining the specific **Feature Usage** chart.

**2. Active Users & Sessions Chart**

*   **Purpose:** Visualizes user activity volume and frequency over the selected time range.
*   **Metrics:**
    *   `Active Users`: Daily or periodic count of distinct users.
    *   `Session Count`: Total number of sessions initiated.
*   **Modal ('users'):**
    *   Daily Active Users (Line Chart)
    *   Hourly Usage Breakdown (Line Chart)
    *   Session Duration Trends (Line Chart)
*   **Correlation Rationale:** Correlate spikes or dips with **Time of Day Activity** to see *when* activity changes. Compare trends across different **Departments** (via filter) to see if activity patterns vary. High session counts but low average duration (from Key Metrics) might suggest usability issues.

**3. Feature Usage & Engagement Chart**

*   **Purpose:** Shows which application features are most popular and how long users engage with them.
*   **Metrics:**
    *   `Usage Count`: How many times each feature was accessed/used.
    *   `Avg Duration (min)`: Average time spent within each feature per use.
*   **Modal ('features'):**
    *   Detailed Usage/Duration Comparison (Bar Chart)
    *   Feature Adoption Over Time (Line Chart)
    *   Feature Usage by Department (Bar Chart)
    *   Feature Workflow Completion Rates (Table)
*   **Correlation Rationale:** High usage but low duration might indicate a feature is easy to use or quickly abandoned. Low usage for a critical feature warrants investigation. Compare with **Department Distribution** (via filter) to see if specific teams favour certain features. Link low adoption rates (Key Metrics) to specific features here.

**4. Department Distribution Chart**

*   **Purpose:** Shows the breakdown of user activity across different organizational departments.
*   **Metrics:**
    *   `Value`: Represents the proportion of users or activity from each department (e.g., percentage of total active users).
*   **Modal ('departments'):**
    *   Distribution by Department (Pie Chart)
    *   Department Activity Trends (Line Chart)
    *   Feature Usage by Department (Bar Chart)
    *   Department Performance Metrics (Table)
*   **Correlation Rationale:** Identify which departments are most/least active. Correlate with **Feature Usage** to see if departments utilize the application differently based on their function. Use the main filter to drill down into a specific department's overall activity pattern.

**5. User Journey Funnel Chart**

*   **Purpose:** Visualizes the user flow through critical steps in the application, highlighting potential drop-off points.
*   **Metrics:**
    *   `Users`: Number of users reaching each stage (e.g., Login, Dashboard Access, Feature Access, Task Started, Task Completed).
*   **Modal ('funnel'):**
    *   Current Funnel Performance (Vertical Bar Chart)
    *   Conversion Rates between stages (Bar Chart)
    *   Funnel Trends over time (Line Chart)
    *   Drop-off Analysis (Table - in previous version, likely intended here too)
*   **Correlation Rationale:** Significant drops between stages indicate usability problems or confusing workflows. Correlate with **Feature Usage** – is a complex feature causing the drop before "Task Completed"? Compare funnels across **Departments** (via filter) – do certain teams struggle more?

**6. Time of Day Activity Chart**

*   **Purpose:** Shows *when* users are most active during the day.
*   **Metrics:**
    *   `Users`: Number of active users per hour interval.
*   **Modal ('timeOfDay'):**
    *   Hourly Distribution (Area Chart)
    *   Workday vs. Non-Workday comparison (Line Chart)
    *   Activity by Department and Time (Bar Chart)
*   **Correlation Rationale:** Identify peak usage times, which can inform maintenance windows or support staffing. Correlate with **Usage by Role** – do Admins work at different times than regular Users? Compare patterns across **Time Ranges** (filter) – is weekend usage different from weekdays?

**7. Usage by Role Chart**

*   **Purpose:** Breaks down activity based on user roles within the application.
*   **Metrics:**
    *   `User Count`: Number of users in each role.
    *   `Avg Sessions/Week`: Average session frequency per role.
    *   `Avg Features Used`: Average number of distinct features used per session/period by role.
*   **Modal ('roles'):**
    *   Role Distribution (Pie Chart)
    *   Sessions Per Week by Role (Bar Chart)
    *   Feature Usage by Role (Bar Chart)
*   **Correlation Rationale:** Understand if specific roles (e.g., Admins, Managers) have different engagement patterns. High feature usage by Analysts might be expected, while low usage by regular Users might indicate a need for better training or simpler features. Compare with **Department Distribution** (filter) if roles are department-specific.

**8. Active Users Table**

*   **Purpose:** Provides a detailed, sortable list of individual users and their key engagement metrics.
*   **Metrics:** `User Name`, `Department`, `Role`, `Last Active`, `Sessions (This Week)`, `Avg Session Time`, `Completion Rate`.
*   **Modal ('userList'):**
    *   Enhanced User List with filtering/search (Table)
    *   User Activity Metrics summary (Bar Chart)
    *   (Previous versions had detailed views per user - potential future enhancement)
*   **Correlation Rationale:** Allows drilling down into specific user behavior. Identify power users or users struggling (low completion rate, low session time). Filter by **Department** or **Role** in the modal for targeted analysis.

**9. Activity Alerts Panel**

*   **Purpose:** Highlights potentially important system events or user behavior anomalies that require attention.
*   **Metrics:** `Severity` (High, Medium, Low), `Message`, `Time`.
*   **Modal ('alerts'):**
    *   Filterable list of all alerts (Table/List)
    *   Alert Trend Analysis (Line Chart - severity over time)
    *   (Previous versions had detailed drill-downs per alert - potential future enhancement)
*   **Correlation Rationale:** Alerts often provide direct starting points for investigation. A "Low Feature Adoption" alert ties directly into the **Feature Usage** chart. "Unusual Login Pattern" alerts might correlate with specific users in the **User List**. Filtering alerts by department can reveal team-specific issues.

## Data Source

The dashboard currently utilizes **mock data** defined in `src/data/mock-data.ts`. This data is structured to simulate various metrics across different time ranges and departments.

To use real data, you would typically replace the mock data fetching logic within the `useMemo` hook in `src/user_tracking_dashboard.tsx` with API calls to your backend service.

## Installation and Setup

**Prerequisites:**

*   Node.js (LTS version recommended)
*   npm (usually comes with Node.js) or yarn

**Steps:**

1.  **Clone the repository:**
    ```bash
    # Replace <your-repo-url> with the actual URL
    git clone <your-repo-url>
    cd tracking-dashboard 
    ```
    *Note: If you haven't set up Git yet, initialize it first (`git init`) and connect it to your remote repository (`git remote add origin <your-repo-url>`).*

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the Vite development server. Open your web browser and navigate to the local URL provided (usually `http://localhost:5173`).

## Usage and Usability

*   **Filtering:** Use the dropdown menus in the header to select the desired **Time Range** and **Department**. The charts and metrics will update automatically based on your selections.
*   **Detailed Views:** Click the **Expand** button on any chart or panel section to open a modal window. This modal provides more granular data and related visualizations for that specific area (e.g., viewing hourly trends within the daily users chart).
*   **Correlation:** The dashboard is designed to show correlations between different data points. For example:
    *   Filtering by a specific **Department** will update *all* relevant charts (Feature Usage, Role Usage, User List, Alerts) to show data pertaining only to that department.
    *   Observing the **User Journey Funnel** alongside **Feature Usage** might indicate which features are bottlenecks or cause drop-offs.
    *   Comparing **Time of Day Activity** with **Usage by Role** can reveal patterns specific to certain user groups during different times.

The goal is to provide a multi-faceted view of user activity, allowing for the identification of trends, potential issues, and areas for product improvement.

import { ReactNode } from 'react';

interface DashboardWidgetProps {
  title: string;
  children: ReactNode;
  onExpand?: () => void;
  expandable?: boolean;
}

const DashboardWidget = ({ 
  title, 
  children, 
  onExpand, 
  expandable = true 
}: DashboardWidgetProps) => {
  return (
    <div className="dashboard-widget bg-white rounded shadow p-4">
      <div className="widget-header">
        <h2 className="text-sm font-medium">{title}</h2>
        {expandable && onExpand && (
          <button 
            className="widget-expand-button"
            onClick={onExpand}
            aria-label={`Expand ${title} widget`}
          >
            Expand
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default DashboardWidget;
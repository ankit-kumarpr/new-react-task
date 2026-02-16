import React from 'react';
import './Charts.css';

const ActivityTrendChart = ({ data }) => {

    return (
        <div className="chart-container">
            <h3>Recent Activity</h3>
            <ul className="activity-list-custom">
                {data.map((item, index) => (
                    <li key={index} className="activity-item">
                        <span className="activity-date">{item.date}</span>
                        <div className="activity-bar-bg">
                            <div
                                className="activity-bar-fill"
                                style={{
                                    width: `${Math.min((item.hours / 8) * 100, 100)}%` // Assuming 8 hours max for scaling
                                }}
                            ></div>
                        </div>
                        <span className="activity-hours">{item.hours}h</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityTrendChart;

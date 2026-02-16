import React from 'react';
import { ResponsiveContainer, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PerformanceTrendChart = ({ data }) => {
    // Adding a dummy baseline for the orange line effect seen in the image
    const chartData = data.map(item => ({
        ...item,
        baseline: 0
    }));

    return (
        <div className="chart-container">
            <h3>Performance Trend</h3>
            <div style={{ height: 350 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 50 }}>
                        <defs>
                            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#e2e8f0" />
                        <XAxis
                            dataKey="testName"
                            stroke="#64748b"
                            fontSize={11}
                            tick={{ angle: -45, textAnchor: 'end' }}
                            interval={0}
                            height={60}
                        />
                        <YAxis stroke="#64748b" fontSize={11} domain={[0, 100]} />
                        <Tooltip
                            contentStyle={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                border: 'none',
                                borderRadius: '10px',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                fontSize: '12px'
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="score"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorScore)"
                            dot={{ r: 4, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="baseline"
                            stroke="#f97316"
                            strokeWidth={2}
                            dot={{ r: 3, fill: '#f97316', stroke: '#fff', strokeWidth: 1 }}
                            activeDot={false}
                            legendType="none"
                            tooltipType="none"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PerformanceTrendChart;

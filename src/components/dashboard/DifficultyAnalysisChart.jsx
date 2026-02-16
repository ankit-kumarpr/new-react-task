import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const DifficultyAnalysisChart = ({ data }) => {
    // Transform data for Pie Chart
    const chartData = data.map(item => ({
        name: item.level,
        value: item.correct + item.wrong,
        correct: item.correct,
        wrong: item.wrong
    }));

    const COLORS = ['#22c55e', '#f59e0b', '#ef4444']; // Green for Easy, Amber for Medium, Red for Hard

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${data.name} Questions`}</p>
                    <p className="desc correct">Correct: {data.correct}</p>
                    <p className="desc wrong">Wrong: {data.wrong}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="chart-container circle-chart">
            <h3>Difficulty Distribution</h3>
            <div style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DifficultyAnalysisChart;

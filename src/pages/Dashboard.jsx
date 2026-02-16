import React, { useEffect, useState } from 'react';
import { fetchStudentData } from '../services/api';
import SummaryCards from '../components/dashboard/SummaryCards';
import PerformanceTrendChart from '../components/dashboard/PerformanceTrendChart';
import TopicStrengthChart from '../components/dashboard/TopicStrengthChart';
import DifficultyAnalysisChart from '../components/dashboard/DifficultyAnalysisChart';
import ActivityTrendChart from '../components/dashboard/ActivityTrendChart';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchStudentData();
                setData(result);
            } catch (err) {
                setError('Failed to fetch data.');
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return <div className="loading">
            <div className="spinner"></div>
            <span>Loading Analytics...</span>
        </div>;
    }

    if (error) {
        return <div className="error">
            <span>{error}</span>
            <button onClick={() => window.location.reload()}>Retry</button>
        </div>;
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1 className="page-title">Performance Analytics</h1>
                <p className="last-updated">Last updated: Just now</p>
            </div>

            <SummaryCards data={data} />

            <div className="dashboard-charts-grid">
                <div className="chart-item full-width">
                    <PerformanceTrendChart data={data.progressTracker} />
                </div>
                <div className="chart-item">
                    <TopicStrengthChart data={data.combinedTopicStrength} />
                </div>
                <div className="chart-item">
                    <DifficultyAnalysisChart data={data.difficultyAnalysis} />
                </div>
                <div className="chart-item">
                    <ActivityTrendChart data={data.dailyActivity} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import React from 'react';
import { User, FileText, TrendingUp, AlertCircle } from 'lucide-react';
import './SummaryCards.css';

const SummaryCards = ({ data }) => {
    const cards = [
        {
            label: 'Student Name',
            value: data.studentName,
            icon: <User size={24} />,
            color: 'blue'
        },
        {
            label: 'Total Tests',
            value: data.totalTestsTaken,
            icon: <FileText size={24} />,
            color: 'purple'
        },
        {
            label: 'Readiness Score',
            value: data.overallReadinessScore,
            icon: <TrendingUp size={24} />,
            color: 'green'
        },
        {
            label: 'Verdict',
            value: data.overallVerdict,
            icon: <AlertCircle size={24} />,
            color: data.overallVerdict === 'NOT READY' ? 'red' : 'green'
        }
    ];

    return (
        <div className="summary-grid">
            {cards.map((card, index) => (
                <div key={index} className={`summary-card ${card.color}`}>
                    <div className="card-content">
                        <span className="card-label">{card.label}</span>
                        <h3 className="card-value">{card.value}</h3>
                    </div>
                    <div className="card-icon">
                        {card.icon}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;

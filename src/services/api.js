export const fetchStudentData = async () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                studentName: "Rahul Sharma",
                totalTestsTaken: 9,
                overallReadinessScore: 23,
                overallVerdict: "NOT READY",
                progressTracker: [
                    { testName: "DSA Test", score: 53.5 },
                    { testName: "Python Test", score: 39.4 },
                    { testName: "MERN Test", score: 44.5 },

                ],
                combinedTopicStrength: {
                    "Python Basics": 28,
                    "React.js": 23,
                    "MongoDB": 60,
                    "Node.js": 56,

                },
                difficultyAnalysis: [
                    { level: "EASY", correct: 1, wrong: 142 },
                    { level: "MEDIUM", correct: 3, wrong: 238 },
                    { level: "HARD", correct: 1, wrong: 105 }
                ],
                dailyActivity: [
                    { date: "2026-02-03", hours: 300 },
                    { date: "2026-02-04", hours: 1.5 },
                    { date: "2026-02-05", hours: 5 },

                ]
            });
        }, 800);
    });
};

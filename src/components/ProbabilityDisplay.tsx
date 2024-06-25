// src/components/ProbabilityDisplay.tsx
import { PieChart } from 'react-minimal-pie-chart';

interface Probability {
    country: string;
    probability: number;
}

interface ProbabilityDisplayProps {
    probabilities: Probability[];
}

const ProbabilityDisplay: React.FC<ProbabilityDisplayProps> = ({ probabilities }) => {
    const totalProbability = probabilities.reduce((sum, prob) => sum + prob.probability, 0);
    const data:any = probabilities.map(prob => ({
        title: prob.country,
        value: prob.probability * 100,
        color: '#' + Math.floor(Math.random() * 16777215).toString(16), // Random color for each segment
    }));

    if (totalProbability < 1) {
        data.push({
            title: 'Other',
            value: (1 - totalProbability) * 100,
            color: '#cccccc', // Gray color for the "Other" category
        });
    }

    return (
            <PieChart
                data={data}
                label={({ dataEntry }) => `${dataEntry.title} (${dataEntry.value.toFixed(2)}%)`}
                labelStyle={{ fontSize: '5px', fill: '#000' }}
                radius={15}
                labelPosition={112}
            />
    );
};

export default ProbabilityDisplay;

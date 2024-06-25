// src/App.tsx
import  { useState } from 'react';
import InputComponent from './components/Input.tsx';
import ProbabilityDisplay from './components/ProbabilityDisplay';

interface Probability {
    country_id: string;
    probability: number;
}

const App: React.FC = () => {
    const [probabilities, setProbabilities] = useState<Probability[]>([]);

    const fetchProbabilities = async (name: string) => {
        const response = await fetch(`https://api.nationalize.io/?name=${name}`);
        const data = await response.json();
        setProbabilities(data.country);
    };

    return (
        <div className="min-w-[100vw] w-full min-h-screen bg-red-50 flex flex-col items-center">
            <h1 className="text-2xl font-bold my-4">Nationality Probabilities</h1>
            <InputComponent onFetch={fetchProbabilities} />
            <div className='w-[50rem]'>
                {
                        probabilities.length ? <ProbabilityDisplay probabilities={probabilities.map(prob => ({
                        country: prob.country_id,
                        probability: prob.probability
                    }))}/> : null
                }
            </div>
        </div>
    );
};

export default App;

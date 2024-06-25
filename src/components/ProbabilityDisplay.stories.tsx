import ProbabilityDisplay from "./ProbabilityDisplay.tsx";

export const ProbabilityDisplayExamples = () => {
    return (
        <div>
            <ProbabilityDisplay probabilities={[
                { country: 'USA', probability: 0.5 },
                { country: 'Canada', probability: 0.3 },
                { country: 'Mexico', probability: 0.2 },
            ]} />
        </div>
    )
}
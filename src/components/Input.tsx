// src/components/Input.tsx
import { useState } from 'react';

interface InputComponentProps {
    onFetch: (name: string) => void;
}

const Input: React.FC<InputComponentProps> = ({ onFetch }) => {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        if (name) {
            onFetch(name);
        }
    };

    return (
        <div className="flex items-center justify-center p-4">
            <input
                type="text"
                className="border p-2 mr-2"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSubmit} className="bg-blue-500 text-white p-2">
                Send
            </button>
        </div>
    );
};

export default Input;

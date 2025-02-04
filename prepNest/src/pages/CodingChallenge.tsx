import React, { useState } from 'react';
import { ArrowLeft, Play, Clock, CheckCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCodingChallenges } from '../hooks/useQuestions';

const CodingChallenge = () => {
  const navigate = useNavigate();
  const { difficulty = 'easy' } = useParams();
  const { challenges, loading, error } = useCodingChallenges(difficulty);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  if (loading) {
    return (
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  const currentChallengeData = challenges[currentChallenge];

  const handleRunCode = async () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setOutput('// Output will be shown here');
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 mb-6 hover:text-indigo-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">{currentChallengeData.title}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                    difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}`}
                >
                  {difficulty}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{currentChallengeData.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Sample Input:</h3>
                  <pre className="bg-gray-50 p-3 rounded-lg">{currentChallengeData.sampleInput}</pre>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Sample Output:</h3>
                  <pre className="bg-gray-50 p-3 rounded-lg">{currentChallengeData.sampleOutput}</pre>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Constraints:</h3>
                  <pre className="bg-gray-50 p-3 rounded-lg whitespace-pre-wrap">{currentChallengeData.constraints}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <select className="border rounded-lg px-3 py-1">
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Java</option>
                </select>
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300"
                >
                  {isRunning ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2" />
                  ) : (
                    <Play className="h-4 w-4 mr-2" />
                  )}
                  Run Code
                </button>
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{currentChallengeData.timeLimit}ms</span>
              </div>
            </div>

            <div className="mb-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 p-4 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write your code here..."
              />
            </div>

            <div>
              <h3 className="font-medium mb-2">Output:</h3>
              <pre className="bg-gray-50 p-4 rounded-lg h-32 overflow-auto">
                {output || '// Output will appear here after running your code'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingChallenge;
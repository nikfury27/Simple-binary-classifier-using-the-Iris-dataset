import React, { useState } from 'react';
import { Label } from "./components/ui/label";
import { Slider } from "./components/ui/slider";
import { Button } from "./components/ui/button";
import { Brain } from 'lucide-react';

function App() {
  const [feature1, setFeature1] = useState([5.0]);
  const [feature2, setFeature2] = useState([3.5]);
  const [prediction, setPrediction] = useState<null | { class: number; probability: number }>(null);

  const handlePredict = () => {
    // This is a mock prediction based on the model's decision boundary
    // In a real application, you would call your model's API here
    const x = feature1[0];
    const y = feature2[0];
    
    // Simple mock decision boundary (you should replace this with your actual model's logic)
    const mockPrediction = x > y ? 1 : 0;
    const mockProbability = Math.random();
    
    setPrediction({
      class: mockPrediction,
      probability: mockProbability
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Logistic Regression Model</h1>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Feature 1 (Sepal Length)</Label>
            <div className="flex items-center gap-4">
              <Slider
                value={feature1}
                onValueChange={setFeature1}
                min={4.0}
                max={8.0}
                step={0.1}
                className="flex-1"
              />
              <span className="text-sm font-medium w-12 text-right">{feature1[0].toFixed(1)}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Feature 2 (Sepal Width)</Label>
            <div className="flex items-center gap-4">
              <Slider
                value={feature2}
                onValueChange={setFeature2}
                min={2.0}
                max={4.5}
                step={0.1}
                className="flex-1"
              />
              <span className="text-sm font-medium w-12 text-right">{feature2[0].toFixed(1)}</span>
            </div>
          </div>

          <Button 
            onClick={handlePredict}
            className="w-full"
          >
            Predict
          </Button>

          {prediction && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Prediction Results</h2>
              <div className="space-y-2">
                <p>Predicted Class: <span className="font-medium">{prediction.class}</span></p>
                <p>Probability: <span className="font-medium">{(prediction.probability * 100).toFixed(2)}%</span></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
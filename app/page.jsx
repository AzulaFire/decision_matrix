'use client';
import { useState } from 'react';
import Decisions from '@/components/Decisions';
import Factors from '@/components/Factors';
import ResultsTable from '@/components/ResultsTable';
import HowTo from '@/components/HowTo';

const testDataSets = {
  cars: {
    decisions: [
      'Toyota Corolla',
      'Honda Civic',
      'Mazda 3',
      'Ford Focus',
      'Chevrolet Malibu',
      'Hyundai Elantra',
      'Nissan Sentra',
      'Kia Forte',
      'Subaru Impreza',
      'Volkswagen Jetta',
    ],
    factors: [
      { name: 'Price', weight: 5 },
      { name: 'Safety', weight: 4 },
      { name: 'Fuel Efficiency', weight: 5 },
      { name: 'Comfort', weight: 3 },
      { name: 'Design', weight: 2 },
      { name: 'Resale Value', weight: 4 },
      { name: 'Technology', weight: 3 },
      { name: 'Driving Experience', weight: 4 },
      { name: 'Warranty', weight: 2 },
      { name: 'Maintenance Cost', weight: 3 },
    ],
    scores: {
      0: { 0: 5, 1: 4, 2: 4, 3: 3, 4: 2, 5: 3, 6: 4, 7: 4, 8: 3, 9: 5 },
      1: { 0: 4, 1: 5, 2: 5, 3: 3, 4: 3, 5: 4, 6: 4, 7: 4, 8: 4, 9: 4 },
      2: { 0: 3, 1: 4, 2: 5, 3: 4, 4: 4, 5: 3, 6: 4, 7: 5, 8: 3, 9: 3 },
      3: { 0: 5, 1: 4, 2: 4, 3: 3, 4: 2, 5: 4, 6: 3, 7: 5, 8: 4, 9: 3 },
      4: { 0: 4, 1: 4, 2: 5, 3: 4, 4: 3, 5: 5, 6: 4, 7: 3, 8: 4, 9: 5 },
      5: { 0: 4, 1: 5, 2: 4, 3: 3, 4: 2, 5: 4, 6: 5, 7: 5, 8: 4, 9: 4 },
      6: { 0: 3, 1: 4, 2: 5, 3: 5, 4: 4, 5: 3, 6: 5, 7: 3, 8: 4, 9: 3 },
      7: { 0: 5, 1: 5, 2: 4, 3: 4, 4: 3, 5: 3, 6: 4, 7: 4, 8: 3, 9: 4 },
      8: { 0: 3, 1: 4, 2: 4, 3: 5, 4: 4, 5: 5, 6: 4, 7: 3, 8: 4, 9: 4 },
      9: { 0: 4, 1: 3, 2: 5, 3: 3, 4: 3, 5: 4, 6: 5, 7: 3, 8: 4, 9: 4 },
    },
  },
  pcs: {
    decisions: [
      'MacBook Pro',
      'Dell XPS',
      'Lenovo ThinkPad',
      'HP Spectre',
      'Microsoft Surface',
      'Asus ZenBook',
      'Acer Swift',
      'Razer Blade',
      'LG Gram',
      'Samsung Galaxy Book',
    ],
    factors: [
      { name: 'Performance', weight: 5 },
      { name: 'Battery Life', weight: 4 },
      { name: 'Portability', weight: 3 },
      { name: 'Cost', weight: 5 },
      { name: 'Display', weight: 5 },
      { name: 'Keyboard Comfort', weight: 3 },
      { name: 'Price', weight: 2 },
      { name: 'Brand Reputation', weight: 4 },
      { name: 'Connectivity Options', weight: 3 },
      { name: 'Customer Support', weight: 3 },
    ],
    scores: {
      0: { 0: 2, 1: 4, 2: 4, 3: 5, 4: 5, 5: 4, 6: 3, 7: 4, 8: 5, 9: 5 },
      1: { 0: 4, 1: 3, 2: 4, 3: 4, 4: 3, 5: 5, 6: 4, 7: 5, 8: 4, 9: 4 },
      2: { 0: 3, 1: 5, 2: 4, 3: 3, 4: 5, 5: 3, 6: 5, 7: 4, 8: 3, 9: 4 },
      3: { 0: 5, 1: 4, 2: 3, 3: 5, 4: 4, 5: 3, 6: 4, 7: 4, 8: 4, 9: 5 },
      4: { 0: 3, 1: 3, 2: 4, 3: 5, 4: 5, 5: 3, 6: 4, 7: 5, 8: 4, 9: 3 },
      5: { 0: 4, 1: 4, 2: 5, 3: 4, 4: 4, 5: 5, 6: 3, 7: 4, 8: 3, 9: 4 },
      6: { 0: 4, 1: 3, 2: 3, 3: 5, 4: 4, 5: 4, 6: 5, 7: 4, 8: 4, 9: 4 },
      7: { 0: 5, 1: 3, 2: 5, 3: 5, 4: 4, 5: 4, 6: 3, 7: 3, 8: 5, 9: 3 },
      8: { 0: 5, 1: 5, 2: 4, 3: 3, 4: 4, 5: 4, 6: 3, 7: 4, 8: 5, 9: 4 },
      9: { 0: 4, 1: 3, 2: 4, 3: 4, 4: 5, 5: 3, 6: 5, 7: 5, 8: 3, 9: 4 },
    },
  },
  relocation: {
    decisions: [
      'New York',
      'Los Angeles',
      'San Francisco',
      'Chicago',
      'Seattle',
      'Phoenix',
      'Miami',
      'Denver',
      'Boston',
      'Portland',
    ],
    factors: [
      { name: 'Cost of Living', weight: 5 },
      { name: 'City Size', weight: 3 },
      { name: 'Housing', weight: 5 },
      { name: 'Traffic', weight: 4 },
      { name: 'Schools', weight: 4 },
      { name: 'Safety', weight: 4 },
      { name: 'Health', weight: 3 },
      { name: 'Job Prospects', weight: 5 },
      { name: 'Entertainment', weight: 3 },
      { name: 'Convenience', weight: 4 },
    ],
    scores: {
      0: { 0: 3, 1: 4, 2: 5, 3: 2, 4: 5, 5: 4, 6: 3, 7: 4, 8: 5, 9: 3 },
      1: { 0: 4, 1: 5, 2: 4, 3: 3, 4: 3, 5: 4, 6: 4, 7: 4, 8: 3, 9: 4 },
      2: { 0: 4, 1: 5, 2: 3, 3: 4, 4: 4, 5: 4, 6: 5, 7: 5, 8: 4, 9: 3 },
      3: { 0: 5, 1: 3, 2: 4, 3: 5, 4: 3, 5: 5, 6: 4, 7: 4, 8: 5, 9: 4 },
      4: { 0: 4, 1: 4, 2: 3, 3: 5, 4: 3, 5: 4, 6: 5, 7: 4, 8: 3, 9: 5 },
      5: { 0: 5, 1: 3, 2: 5, 3: 5, 4: 4, 5: 5, 6: 5, 7: 5, 8: 4, 9: 4 },
      6: { 0: 4, 1: 4, 2: 3, 3: 5, 4: 5, 5: 5, 6: 3, 7: 4, 8: 4, 9: 5 },
      7: { 0: 5, 1: 4, 2: 4, 3: 3, 4: 2, 5: 4, 6: 5, 7: 5, 8: 4, 9: 4 },
      8: { 0: 4, 1: 3, 2: 5, 3: 4, 4: 3, 5: 3, 6: 4, 7: 5, 8: 5, 9: 5 },
      9: { 0: 3, 1: 4, 2: 4, 3: 5, 4: 4, 5: 3, 6: 3, 7: 4, 8: 3, 9: 4 },
    },
  },
};

export default function Home() {
  const [decisions, setDecisions] = useState(['']);
  const [factors, setFactors] = useState([{ name: '', weight: 1 }]);
  const [scores, setScores] = useState({});
  const [totalResults, setTotalResults] = useState([]);

  const handleTestDataChange = (value) => {
    const selectedData = value ? testDataSets[value] : null;
    if (selectedData) {
      setDecisions(selectedData.decisions);
      setFactors(selectedData.factors);
      setScores(selectedData.scores);
    }
  };

  const handleReset = () => {
    setDecisions(['']);
    setFactors([{ name: '', weight: 1 }]);
    setScores({});
    setTotalResults([]);
  };

  const calculateResults = () => {
    const results = decisions.map((decision, dIndex) => {
      let total = 0;
      factors.forEach((factor, fIndex) => {
        const score = scores[dIndex]?.[fIndex] || 1;
        total += score * factor.weight;
      });
      return { decision, total };
    });
    results.sort((a, b) => b.total - a.total);
    setTotalResults(results);
  };

  return (
    <main className='mx-auto md:w-5/6 w-[360px]'>
      <h1 className='text-2xl font-bold my-4'>Decision Matrix</h1>
      <HowTo
        handleTestDataChange={handleTestDataChange}
        handleReset={handleReset}
      />
      <Decisions decisions={decisions} setDecisions={setDecisions} />
      <Factors factors={factors} setFactors={setFactors} />
      <ResultsTable
        decisions={decisions}
        factors={factors}
        scores={scores}
        setScores={setScores}
        calculateResults={calculateResults}
        results={totalResults}
        handleReset={handleReset}
      />
    </main>
  );
}

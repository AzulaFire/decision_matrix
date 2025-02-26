'use client';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Button } from './ui/button';

const weightLabels = {
  1: 'Unimportant',
  2: 'Slightly Important',
  3: 'Moderately Important',
  4: 'Important',
  5: 'Very Important',
};

const ResultsTable = ({
  decisions,
  factors,
  scores,
  setScores,
  calculateResults,
  results,
  handleReset,
}) => {
  const highestTotal = results.length > 0 ? results[0].total : 0;

  const handleScoreChange = (decisionIndex, factorIndex, value) => {
    const newScores = { ...scores };
    if (!newScores[decisionIndex]) {
      newScores[decisionIndex] = {};
    }
    newScores[decisionIndex][factorIndex] = Number(value);
    setScores(newScores);
  };

  return (
    <div className='mt-6'>
      <h2 className='text-xl font-bold mb-2'>Results</h2>

      {/* Make table scrollable on smaller screens */}
      <div className='overflow-x-auto'>
        <Table className='min-w-full border border-gray-300'>
          <TableHeader>
            <TableRow>
              <TableHead>Decisions</TableHead>
              {factors.map((factor, index) => (
                <TableHead key={index} className='font-bold'>
                  {factor.name}{' '}
                  <span className='text-xs font-normal'>
                    ({weightLabels[factor.weight]})
                  </span>
                </TableHead>
              ))}
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {decisions.map((decision, dIndex) => {
              const totalScore =
                results.find((r) => r.decision === decision)?.total || '';
              const isBestDecision = totalScore === highestTotal;

              return (
                <TableRow
                  key={dIndex}
                  className={
                    isBestDecision && totalScore > 1 ? 'bg-lime-500' : ''
                  }
                >
                  <TableCell>{decision}</TableCell>
                  {factors.map((_, fIndex) => (
                    <TableCell key={fIndex}>
                      <input
                        type='number'
                        min='1'
                        max='5'
                        value={scores[dIndex]?.[fIndex] || 1}
                        onChange={(e) =>
                          handleScoreChange(dIndex, fIndex, e.target.value)
                        }
                        className='w-16 h-8 text-center border rounded-md'
                      />
                    </TableCell>
                  ))}
                  <TableCell className='font-bold'>{totalScore}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <Button className='my-4' onClick={calculateResults}>
        Calculate Results
      </Button>
      {results.length > 0 && (
        <Button className='my-4 ml-4' onClick={handleReset}>
          Reset
        </Button>
      )}
    </div>
  );
};

export default ResultsTable;

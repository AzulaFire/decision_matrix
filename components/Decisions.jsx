'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Decisions = ({ decisions, setDecisions, setScores }) => {
  const handleAddInput = () => {
    if (decisions.length < 10) {
      setDecisions([...decisions, '']);
    }
  };

  const handleRemoveInput = () => {
    if (decisions.length > 1) {
      setDecisions(decisions.slice(0, -1));
    }
  };

  const handleChange = (index, value) => {
    const newInputs = [...decisions];
    newInputs[index] = value;
    setDecisions(newInputs);
  };

  const handleRemoveDecision = (index) => {
    setDecisions((prevDecisions) => {
      const newDecisions = prevDecisions.filter((_, i) => i !== index);

      // Update scores by removing the corresponding index
      setScores((prevScores) => {
        const newScores = { ...prevScores };
        delete newScores[index];

        // Re-index the scores so they remain aligned with the new decisions array
        const reindexedScores = {};
        Object.keys(newScores).forEach((key, idx) => {
          reindexedScores[idx] = newScores[key];
        });

        return reindexedScores;
      });

      return newDecisions;
    });
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-2'>
        Decisions -{' '}
        <span className='text-sm text-muted-foreground'>
          {decisions.length}/10 - (Minimum 2, Maximum 10)
        </span>
      </h2>
      <div className='grid gap-4 my-4 lg:grid-cols-5 grid-cols-1'>
        {decisions.map((input, index) => (
          <div key={index} className='relative'>
            <Input
              type='text'
              placeholder={`Decision ${index + 1}`}
              value={input}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <span
              className='absolute top-2 right-2 cursor-pointer text-red-500'
              onClick={() => handleRemoveDecision(index)}
            >
              x
            </span>
          </div>
        ))}
      </div>
      <div className='space-x-4'>
        <Button onClick={handleAddInput} disabled={decisions.length >= 10}>
          +
        </Button>
        <Button onClick={handleRemoveInput} disabled={decisions.length <= 1}>
          -
        </Button>
      </div>
    </>
  );
};

export default Decisions;

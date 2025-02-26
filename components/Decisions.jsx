'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Decisions = ({ decisions, setDecisions }) => {
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
          <Input
            key={index}
            type='text'
            placeholder={`Decision ${index + 1}`}
            value={input}
            onChange={(e) => handleChange(index, e.target.value)}
          />
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

'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Factors = ({ factors, setFactors }) => {
  const handleAddFactor = () => {
    if (factors.length < 10) {
      setFactors([...factors, { name: '', weight: 1 }]);
    }
  };

  const handleRemoveFactor = () => {
    if (factors.length > 1) {
      setFactors(factors.slice(0, -1));
    }
  };

  const handleFactorChange = (index, value) => {
    const newFactors = [...factors];
    newFactors[index].name = value;
    setFactors(newFactors);
  };

  const handleWeightChange = (index, value) => {
    const newFactors = [...factors];
    newFactors[index].weight = Number(value);
    setFactors(newFactors);
  };

  return (
    <div className='mt-6'>
      <h2 className='text-xl font-bold mb-2'>
        Factors -{' '}
        <span className='text-sm text-muted-foreground'>
          {factors.length}/10 - (Minimum 1, Maximum 10)
        </span>
      </h2>
      <span className='text-sm text-muted-foreground'>
        1: Unimportant, 2: Slightly Important, 3: Moderately Important, 4:
        Important, 5: Very Important
      </span>
      <div className='grid gap-4 my-4 lg:grid-cols-5 grid-cols-1'>
        {factors.map((factor, index) => (
          <div key={index} className='flex items-center gap-4'>
            <Input
              type='text'
              placeholder={`Factor ${index + 1}`}
              value={factor.name}
              onChange={(e) => handleFactorChange(index, e.target.value)}
              className='flex-1'
            />
            <Select
              value={String(factor.weight)}
              onValueChange={(value) => handleWeightChange(index, value)}
            >
              <SelectTrigger className='w-[100px]'>
                <SelectValue placeholder='Weight' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Importance</SelectLabel>
                  {[1, 2, 3, 4, 5].map((weight) => (
                    <SelectItem key={weight} value={String(weight)}>
                      {weight}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
      <div className='space-x-4'>
        <Button onClick={handleAddFactor} disabled={factors.length >= 10}>
          +
        </Button>
        <Button onClick={handleRemoveFactor} disabled={factors.length <= 1}>
          -
        </Button>
      </div>
    </div>
  );
};

export default Factors;

'use client';
import { useEffect, useState } from 'react';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  carHeaders,
  computerHeaders,
  jobHeaders,
  relocationHeaders,
} from '@/Data/db';

const Factors = ({ setGetFactors, getTemplate }) => {
  let initialFields = {
    Header1: { name: '', weight: '1' },
    Header2: { name: '', weight: '1' },
    Header3: { name: '', weight: '1' },
    Header4: { name: '', weight: '1' },
    Header5: { name: '', weight: '1' },
    Header6: { name: '', weight: '1' },
    Header7: { name: '', weight: '1' },
    Header8: { name: '', weight: '1' },
    Header9: { name: '', weight: '1' },
    Header10: { name: '', weight: '1' },
  };

  if (getTemplate === 'job') {
    initialFields = jobHeaders;
  } else if (getTemplate === 'relocation') {
    initialFields = relocationHeaders;
  } else if (getTemplate === 'car') {
    initialFields = carHeaders;
  } else if (getTemplate === 'computer') {
    initialFields = computerHeaders;
  } else if (getTemplate === 'test') {
    initialFields = computerHeaders;
  }

  const [fields, setFields] = useState(initialFields);

  const handleInput = (headerName, newValue) => {
    if (newValue.length > 0) {
      setFields((prevFields) => ({
        ...prevFields,
        [headerName]: {
          ...prevFields[headerName],
          name: newValue,
        },
      }));
    }
  };

  const handleSelect = (headerName, weightValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      [headerName]: {
        ...prevFields[headerName],
        weight: weightValue,
      },
    }));
  };

  useEffect(() => {
    setGetFactors(fields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);

  return (
    <div className='flex flex-col mt-4'>
      <div className='flex flex-col px-4'>
        <form>
          {Object.entries(fields).map(([headerKey]) => (
            <div
              key={headerKey}
              className='flex flex-col gap-4 my-4 lg:flex-row lg:items-end'
            >
              <label>{headerKey}:</label>
              <Input
                type='text'
                name={headerKey}
                className='w-full'
                value={fields[headerKey].name}
                onChange={(e) => handleInput(headerKey, e.target.value)}
              />
              <Select
                onValueChange={(val) => handleSelect(headerKey, val)}
                value={fields[headerKey].weight}
                name='weight'
              >
                <SelectTrigger>
                  <SelectValue placeholder='Weight' />
                </SelectTrigger>
                <SelectContent className='min-w-0'>
                  <SelectItem value='1'>1 - Not Important</SelectItem>
                  <SelectItem value='2'>2 - Slightly Important</SelectItem>
                  <SelectItem value='3'>3 - Moderately Important</SelectItem>
                  <SelectItem value='4'>4 - Important</SelectItem>
                  <SelectItem value='5'>5 - Very Important</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Factors;

'use client';
import { useState, useRef, useEffect } from 'react';
import { Tabs, TabsList } from '@/components/ui/tabs';
import { Input } from './ui/input';
import { Button } from './ui/button';
import TabList from './TabList';
import TabContent from './TabContent';

const Decisions = ({
  getFactors,
  setGetMeasures,
  getMeasures,
  setGetDecisions,
  getDecisions,
  getTemplate,
}) => {
  const inputRef = useRef();
  const [count, setCount] = useState(0);
  const [getTitle, setGetTitle] = useState('');
  let fieldValue = '';

  const handleInput = (e) => {
    fieldValue = e.target.value;
  };

  const handleAddRow = () => {
    if (count < 10 && fieldValue.trim() !== '') {
      // Check if fieldValue already exists in getDecisions
      if (!getDecisions.includes(fieldValue)) {
        // Add fieldValue to getDecisions array
        setGetDecisions((prevDecisions) => [
          ...prevDecisions,
          fieldValue.trim(),
        ]);
        setGetTitle(fieldValue);
        setCount(count + 1);
      }
      inputRef.current.value = ''; // Clear input field
    }
  };

  useEffect(() => {
    const updateTitle = () => {
      setGetTitle();
    };

    updateTitle();
  }, [count]);

  return (
    <div className='flex flex-col mt-4'>
      {getDecisions.length > 0 ? (
        <Tabs defaultValue='decision_1' className='w-full'>
          <TabsList>
            <TabList getTitle={getTitle} count={count} />
          </TabsList>
          <TabContent
            getFactors={getFactors}
            getTitle={getTitle}
            count={count}
            setGetMeasures={setGetMeasures}
            getMeasures={getMeasures}
            getTemplate={getTemplate}
          />
        </Tabs>
      ) : null}

      <div className='flex flex-row gap-4 items-end my-4'>
        <label>Decision:</label>
        <Input
          type='text'
          name='name'
          className='w-[280px]'
          onChange={handleInput}
          ref={inputRef}
        />
        <span className='text-xs text-red-500'>
          * Minimum of two is required.
        </span>
      </div>
      <Button className='my-4 bg-amber-400 w-[200px]' onClick={handleAddRow}>
        Add Decision
      </Button>
    </div>
  );
};
export default Decisions;

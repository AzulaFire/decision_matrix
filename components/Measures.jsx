'use client';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { testData } from '@/Data/db';

const Measures = ({ getFactors, count, setGetMeasures, getTemplate }) => {
  let initialFields = {
    Decision1: { measure: [] },
    Decision2: { measure: [] },
    Decision3: { measure: [] },
    Decision4: { measure: [] },
    Decision5: { measure: [] },
    Decision6: { measure: [] },
    Decision7: { measure: [] },
    Decision8: { measure: [] },
    Decision9: { measure: [] },
    Decision10: { measure: [] },
  };

  if (getTemplate === 'test') {
    initialFields = testData;
  }

  const [fields, setFields] = useState(initialFields);

  const handleSelect = (decisionName, measureValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      [decisionName]: {
        ...prevFields[decisionName],
        measure: [...prevFields[decisionName].measure, measureValue],
      },
    }));
  };

  useEffect(() => {
    const updateMeasures = () => {
      setGetMeasures((prevMeasures) => {
        const currentMeasures = prevMeasures[decisionName]?.measure || [];
        const newMeasures = fields[decisionName]?.measure || [];

        // Combine current measures with new measures, ensuring no duplicates
        const updatedMeasures = [
          ...new Set([...currentMeasures, ...newMeasures]),
        ];

        return {
          ...prevMeasures,
          [decisionName]: {
            ...prevMeasures[decisionName],
            measure: updatedMeasures,
          },
        };
      });
    };

    updateMeasures();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);

  const decisionName = `Decision${count}`;

  return (
    <div className='flex flex-col mt-4'>
      <div className='flex flex-col px-4'>
        <form>
          {Object.entries(getFactors).map(([headerKey, { name, weight }]) =>
            name ? (
              <div
                key={headerKey}
                className='flex flex-col gap-4 my-4 lg:flex-row items-end'
              >
                <label className='w-2/4'>{name}:</label>
                <Select
                  onValueChange={(val) =>
                    handleSelect(decisionName, val * weight)
                  }
                  name='measure'
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Measure' />
                  </SelectTrigger>
                  <SelectContent className='min-w-0'>
                    <SelectItem value='1'>1 - Very Poor</SelectItem>
                    <SelectItem value='2'>2 - Below Average</SelectItem>
                    <SelectItem value='3'>3 - Average</SelectItem>
                    <SelectItem value='4'>4 - Above Average</SelectItem>
                    <SelectItem value='5'>5 - Excellent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ) : null
          )}
        </form>
      </div>
    </div>
  );
};
export default Measures;

'use client';
import Title from './Title';
import Factors from './Factors';
import Decisions from './Decisions';
import { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Results from './Results';
import HowTo from './HowTo';
import MainTable from './MainTable';

const AccLayout = () => {
  const [getTitle, setGetTitle] = useState('');
  const [getFactors, setGetFactors] = useState({
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
  });
  const [getMeasures, setGetMeasures] = useState({
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
  });
  const [getDecisions, setGetDecisions] = useState([]);
  const [getTemplate, setGetTemplate] = useState('');

  useEffect(() => {
    if (getTemplate === 'job') {
      setGetTitle('Changing Jobs/Career');
    } else if (getTemplate === 'relocation') {
      setGetTitle('Moving or Relocating');
    } else if (getTemplate === 'car') {
      setGetTitle('Buying a Car');
    } else if (getTemplate === 'computer') {
      setGetTitle('Buying a Computer');
    } else if (getTemplate === 'test') {
      setGetTitle('Buying a Computer');
    }
  }, [getTemplate]);

  return (
    <>
      <HowTo setGetTemplate={setGetTemplate} />
      <Accordion type='single' defaultValue='item-1' collapsible='true'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Step 1: Title</AccordionTrigger>
          <AccordionContent>
            <Title setGetTitle={setGetTitle} getTitle={getTitle} />
          </AccordionContent>
        </AccordionItem>
        {getTitle.length > 0 ? (
          <AccordionItem value='item-2'>
            <AccordionTrigger>Step 2: Factors/Weights</AccordionTrigger>
            <AccordionContent>
              <Factors
                setGetFactors={setGetFactors}
                getTemplate={getTemplate}
              />
            </AccordionContent>
          </AccordionItem>
        ) : null}
        {getFactors.Header1.name.length > 0 ? (
          <AccordionItem value='item-3'>
            <AccordionTrigger>Step 3: Decisions/Measures</AccordionTrigger>
            <AccordionContent>
              <Decisions
                getFactors={getFactors}
                setGetMeasures={setGetMeasures}
                getMeasures={getMeasures}
                setGetDecisions={setGetDecisions}
                getDecisions={getDecisions}
                getTemplate={getTemplate}
              />
            </AccordionContent>
          </AccordionItem>
        ) : null}
        {getMeasures.Decision1.measure.length > 0 &&
        getMeasures.Decision2.measure.length > 0 ? (
          <>
            <AccordionItem value='item-4' className='md:hidden'>
              <AccordionTrigger>Step 4: Calculate</AccordionTrigger>
              <AccordionContent>
                <Results
                  getMeasures={getMeasures}
                  getTitle={getTitle}
                  getDecisions={getDecisions}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>Step 4: Calculate</AccordionTrigger>
              <AccordionContent>
                <MainTable
                  getFactors={getFactors}
                  getMeasures={getMeasures}
                  getTitle={getTitle}
                  getDecisions={getDecisions}
                />
              </AccordionContent>
            </AccordionItem>
          </>
        ) : null}
      </Accordion>
    </>
  );
};
export default AccLayout;

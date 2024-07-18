'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Title from './Title';
import MainTable from './MainTable';
import Factors from './Factors';
import Decisions from './Decisions';
import { useState } from 'react';

const TabLayout = () => {
  const [getTitle, setGetTitle] = useState('');
  const [getFactors, setGetFactors] = useState([]);

  return (
    <Tabs defaultValue='step1' className='w-full'>
      <TabsList>
        <TabsTrigger value='step1'>Step 1: Title</TabsTrigger>
        <TabsTrigger value='step2'>Step 2: Factors/Weights</TabsTrigger>
        <TabsTrigger value='step3'>Step 3: Decisions/Measures</TabsTrigger>
        <TabsTrigger value='step4'>Step 4: Calculate</TabsTrigger>
      </TabsList>
      <TabsContent value='step1'>
        <Title setGetTitle={setGetTitle} />
      </TabsContent>
      <TabsContent value='step2'>
        <Factors setGetFactors={setGetFactors} />
      </TabsContent>
      <TabsContent value='step3'>
        <Decisions getFactors={getFactors} />
      </TabsContent>
      <TabsContent value='step4'>
        <MainTable getTitle={getTitle} />
      </TabsContent>
    </Tabs>
  );
};
export default TabLayout;

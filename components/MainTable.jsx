'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';

const MainTable = ({ getFactors, getMeasures, getTitle, getDecisions }) => {
  let count = 1;

  const increaseCount = () => {
    count++;
  };

  // Function to calculate the total sum of measures for a given decision
  const calculateTotal = (decision) => {
    let total = 0;
    Object.entries(getMeasures).forEach(([key, value]) => {
      if (value.measure.length > 0) {
        total += value.measure.reduce(
          (acc, measure) => acc + (parseFloat(measure) || 0),
          0
        );
      }
    });
    return total;
  };

  return (
    <div className='flex flex-col mt-4 ml-8'>
      <h1 className='text-2xl mx-auto my-4'>{getTitle} - Results</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] border-rose-600 border text-center font-bold'>
              Decision Factors
            </TableHead>
            {Object.entries(getFactors).map(([key, value]) => (
              <TableHead
                key={key}
                className='w-[100px] border-rose-600 border text-center font-bold'
              >
                {value.name}
              </TableHead>
            ))}
            <TableHead className='w-[100px] border-rose-600 border text-center font-bold'>
              TOTAL
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {getDecisions.map((decision) => (
            <TableRow key={decision}>
              <TableCell className='font-medium w-[100px] border-rose-600 border text-center'>
                {decision}
              </TableCell>
              {console.log(getMeasures)}
              {
                // Use an array to create a sequence of 10 elements
                Array.from({ length: 10 }, (_, index) => (
                  <TableCell
                    key={index}
                    className='font-medium w-[100px] border-rose-600 border text-center'
                  >
                    {getMeasures[`Decision${count}`].measure[index]}
                  </TableCell>
                ))
              }
              <TableCell className='font-medium w-[100px] border-rose-600 border text-center'>
                {calculateTotal(`Decision${count}`)}
              </TableCell>
              {increaseCount()}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default MainTable;

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from '@/components/ui/select';

import { FaQuestionCircle } from 'react-icons/fa';
import { Button } from './ui/button';

const HowTo = ({ handleTestDataChange, handleReset }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <FaQuestionCircle className='text-2xl text-black absolute top-4 right-4' />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle className='font-bold text-black text-xl mb-4'>
            Decision Matrix:
          </SheetTitle>
          <SheetDescription className='text-start font-bold text-sm text-black'>
            Instructions
            <div className='my-4'>
              <ol className='list-decimal list-inside'>
                <li className='mb-2'>
                  Enter your decision criteria and weights in the{' '}
                  <span className='font-semibold'>Decisions</span> and{' '}
                  <span className='font-semibold'>Factors</span> sections.
                </li>
                <li className='mb-2'>
                  Click the <span className='font-semibold'>Calculate</span>{' '}
                  button to generate a decision matrix.
                </li>
                <li className='mb-2'>
                  Click the <span className='font-semibold'>Reset</span> button
                  to start over.
                </li>
                <li className='mb-2'>Example templates are below.</li>
              </ol>
            </div>
            TEMPLATES
            <div className='my-4'>
              <Select onValueChange={(value) => handleTestDataChange(value)}>
                <SelectTrigger className='w-[308px]'>
                  <SelectValue placeholder='Load Example Data:' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select...</SelectLabel>
                    <SelectItem value='cars'>Car Comparison</SelectItem>
                    <SelectItem value='pcs'>PC Comparison</SelectItem>
                    <SelectItem value='relocation'>Relocation</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default HowTo;

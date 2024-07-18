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
} from '@/components/ui/select';

import { FaQuestionCircle } from 'react-icons/fa';

const HowTo = ({ setGetTemplate }) => {
  const handleSelect = (selectValue) => {
    setGetTemplate(selectValue);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <FaQuestionCircle className='text-2xl text-black absolute top-4 right-4' />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle className='font-bold text-black text-xl mb-4'>
            Decision Matrix: <br />
            How To Use
          </SheetTitle>
          <SheetDescription className='text-start font-bold text-sm text-black'>
            1: Add a TITLE.
            <br />
            <br />
            2: Define the DECIDING FACTORS and Evaluate WEIGHTS.
            <br />
            <br />
            <span className='text-xs font-medium text-zinc-600'>
              1 (Not Important) ~ 5 (Very Important)
            </span>
            <br />
            <br />
            3: Add the DECISIONS and Evaluate MEASURES.
            <br />
            <br />
            <span className='text-xs font-medium text-zinc-600'>
              1 (Very Poor) ~ 5(Very Good)
            </span>
            <br />
            <br />
            4: CALCULATE the RESULTS.
            <br />
            <br />
            Click the Calculate button and the program runs through your data,
            calculates and will highlight the best decision.
            <br />
            <br />
            TEMPLATES
            <br />
            <br />
            <Select onValueChange={(val) => handleSelect(val)}>
              <SelectTrigger>
                <SelectValue placeholder='- SELECT -' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='job'>Choosing a Job</SelectItem>
                <SelectItem value='relocation'>Relocation</SelectItem>
                <SelectItem value='car'>Buying a Car</SelectItem>
                <SelectItem value='computer'>Buying a Computer</SelectItem>
                <SelectItem value='test'>TEST DATA</SelectItem>
              </SelectContent>
            </Select>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default HowTo;

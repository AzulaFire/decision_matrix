'use client';
import { Input } from './ui/input';

const Title = ({ setGetTitle, getTitle }) => {
  const handleInput = (e) => {
    const fieldValue = e.target.value;
    setGetTitle(fieldValue);
  };

  return (
    <div className='flex flex-col mt-4'>
      <div className='flex flex-col px-4'>
        <form>
          <div className='flex flex-row gap-4 items-end my-4'>
            <label>Title:</label>
            <Input
              type='text'
              name='name'
              onChange={handleInput}
              value={getTitle}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Title;

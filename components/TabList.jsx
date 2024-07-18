'use client';
import { TabsTrigger } from '@/components/ui/tabs';
import { v4 as uuid } from 'uuid';

let arrTabList = [];

const TabList = ({ getTitle, count }) => {
  if (getTitle) {
    const newUuid = uuid();
    arrTabList.push(
      <TabsTrigger key={newUuid} value={`decision_${count}`}>
        {getTitle}
      </TabsTrigger>
    );
  }

  return arrTabList;
};
export default TabList;

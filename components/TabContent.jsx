'use client';
import { TabsContent } from '@/components/ui/tabs';
import { v4 as uuid } from 'uuid';
import Measures from './Measures';

let arrTabContent = [];

const TabContent = ({
  getFactors,
  getTitle,
  count,
  setGetMeasures,
  getMeasures,
  getTemplate,
}) => {
  if (getTitle) {
    const newUuid = uuid();
    arrTabContent.push(
      <TabsContent key={newUuid} value={`decision_${count}`}>
        <Measures
          getFactors={getFactors}
          count={count}
          setGetMeasures={setGetMeasures}
          getMeasures={getMeasures}
          getTemplate={getTemplate}
        />
      </TabsContent>
    );
  }

  return arrTabContent;
};
export default TabContent;

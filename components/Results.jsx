import GraphBar from './GraphBar';

const Results = ({ getMeasures, getTitle, getDecisions }) => {
  // Function to calculate sum of measure array for a decision
  const calculateTotal = (decision) => {
    return getMeasures[decision].measure.reduce((acc, val) => acc + val, 0);
  };

  const colors = [
    '#68d4cd',
    '#cff67b',
    '#94dafb',
    '#fd8080',
    '#6d848e',
    '#26a0fc',
    '#26e7a6',
    '#fdbb3a',
    '#fab1b2',
    '#8b75d7',
  ];
  const delays = [
    '0.1s',
    '0.2s',
    '0.3s',
    '0.4s',
    '0.5s',
    '0.6s',
    '0.7s',
    '0.8s',
    '0.9s',
    '1s',
  ];

  return (
    <div className='flex flex-col mt-4'>
      <h1 className='text-2xl mx-auto my-4'>{getTitle} - Results</h1>

      <div className='grid grid-cols-2 gap-2'>
        <div>
          <ul>
            {getDecisions.map((decision) => (
              <li key={decision} className='mb-2'>
                {decision}:
              </li>
            ))}
          </ul>
        </div>
        <div className='bar-graph bar-graph-horizontal mb-2'>
          {Object.keys(getMeasures).map((decision, index) =>
            calculateTotal(decision) > 0 ? (
              <div key={index} className=' bar-graph-one'>
                <div className='bar-one'>
                  <GraphBar
                    value={calculateTotal(decision)}
                    color={colors[index]}
                    duration='1.2s'
                    delay={delays[index]}
                    className='bar'
                    data-percentage={calculateTotal(decision)}
                  />
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
export default Results;

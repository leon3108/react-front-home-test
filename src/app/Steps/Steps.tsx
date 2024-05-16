import Step from './Step';
import { StepType } from './StepType';

export const Steps = ({ steps }: { steps: StepType[] }) => {
  return (
    <>
      {steps && steps.map((obj) => <Step etape={obj} key={obj.description} />)}
    </>
  );
};

export default Steps;

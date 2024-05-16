import Step from './Step';
import { StepType } from './StepType';

export const Steps = ({ steps }: { steps: StepType[] }) => {
  return (
    <>
      {steps &&
        steps.map((step) => <Step etape={step} key={step.description} />)}
    </>
  );
};

export default Steps;

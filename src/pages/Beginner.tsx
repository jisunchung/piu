import ReferenceSection from "@components/agent/ReferenceSection";
import ResultSection from "@components/agent/ResultSection";
import TaskSection from "@components/agent/TaskSection";
import ProgressBar from "@components/shared/ProgressBar";
import { SnapScrollArea } from "@components/shared/SnapScrollArea";
import useScrollProgress from "@hooks/ui/useScrollProgress";

export default function BeginnerPage() {
  const { progress: scrollProgress } = useScrollProgress();
  return (
    <SnapScrollArea
      sections={[
        {
          id: "task",
          component: <TaskSection />,
        },
        {
          id: "reference",
          component: <ReferenceSection />,
        },
        {
          id: "result",
          visible: true,
          component: <ResultSection />,
        },
      ]}
    >
      <ProgressBar progress={scrollProgress}></ProgressBar>
    </SnapScrollArea>
  );
}

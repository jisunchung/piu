import DescribeSection from "@components/home/DescriptionSection";
import StartSection from "@components/home/StartSection";
import ProgressBar from "@components/shared/ProgressBar";
import { SnapScrollArea } from "@components/shared/SnapScrollArea";
import useScrollProgress from "@hooks/ui/useScrollProgress";

export default function HomePage() {
  const { progress: scrollProgress } = useScrollProgress();
  return (
    <SnapScrollArea
      sections={[
        { id: "start", component: <StartSection /> },
        {
          id: "describeBeginner",
          component: <DescribeSection level="Beginner" />,
        },
        {
          id: "describeIntermediate",
          component: <DescribeSection level="Intermediate" />,
        },
        {
          id: "describeAdvanced",
          component: <DescribeSection level="Advanced" />,
        },
      ]}
    >
      <ProgressBar progress={scrollProgress}></ProgressBar>
    </SnapScrollArea>
  );
}

import DescribeSection from "@components/home/DescriptionSection";
import StartSection from "@components/home/StartSection";
import { SnapScrollArea } from "@components/shared/SnapScrollArea";

export default function HomePage() {
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
    ></SnapScrollArea>
  );
}

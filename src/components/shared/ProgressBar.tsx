import Flex from "./Flex";

interface ProgressBarProps {
  progress: number; // 0 to 100
  trackColor?: string;
  barColor?: string;
}

export default function ProgressBar({
  progress,
  trackColor = "bg-(--color-neutral-light)",
  barColor = "bg-(--color-primary) ",
}: ProgressBarProps) {
  return (
    <Flex
      align="center"
      justify="center"
      className="fixed bottom-0 left-0 w-full p-10"
    >
      <div
        className={`h-2 basis-1/7 ${trackColor} relative overflow-hidden rounded`}
      >
        <div
          className={`absolute top-0 left-0 h-2 ${barColor} rounded transition-all`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </Flex>
  );
}

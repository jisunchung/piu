interface ProgressBarProps {
  progress: number; // 0 to 100
  trackColor?: string;
  barColor?: string;
}

export default function ProgressBar({
  progress,
  trackColor = "bg-gray-300",
  barColor = "bg-blue-300",
}: ProgressBarProps) {
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-center p-10">
      <div
        className={`h-2 basis-1/7 ${trackColor} relative overflow-hidden rounded`}
      >
        <div
          className={`absolute top-0 left-0 h-2 ${barColor} rounded transition-all`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function DescriptionSection({ level }: { level: string }) {
  return (
    <div id={level}>
      <div>{level}</div>
      <div>Description Section</div>
    </div>
  );
}

interface Section {
  id: string;
  component: React.ReactNode;
  visible?: boolean;
}

interface SnapScrollAreaProps {
  sections: Section[];
}

export function SnapScrollArea({ sections }: SnapScrollAreaProps) {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll">
      {sections.map((section) =>
        section.visible !== true ? (
          <div className="h-screen snap-start" key={section.id}>
            {section.component}
          </div>
        ) : null,
      )}
    </div>
  );
}

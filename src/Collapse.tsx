import { type ReactNode, useId, useState } from 'react';

type CollapseProps = {
  children: ReactNode;
  collapsedLabel?: string;
  expandedLabel?: string;
};

export function Collapse({ children, collapsedLabel = 'Развернуть', expandedLabel = 'Свернуть' }: CollapseProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  return <section className="collapse">
    <button type="button" className={`collapse-button ${expanded ? 'expanded' : ''}`} aria-expanded={expanded} aria-controls={contentId} onClick={() => setExpanded((value) => !value)}>
      {expanded ? expandedLabel : collapsedLabel}<span aria-hidden="true">⌄</span>
    </button>
    <div id={contentId} className={`collapse-animation ${expanded ? 'open' : ''}`} aria-hidden={!expanded}>
      <div className="collapse-content">{children}</div>
    </div>
  </section>;
}

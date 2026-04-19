/**
 * SectionTag
 * The small uppercase mono label that sits above section headings.
 */
export default function SectionTag({ children, center = false, className = '' }) {
  return (
    <div
      className={`
        section-tag
        ${center ? 'justify-center' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

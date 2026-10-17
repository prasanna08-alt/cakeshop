/** One line of copy where *word* becomes the hand-written Caveat accent. */
export function Scripted({ text }) {
    return (<>
      {text.split(/(\*[^*]+\*)/).map((part, i) => part.startsWith("*") ? (<span key={i} className="script">
            {part.slice(1, -1)}
          </span>) : (part))}
    </>);
}
/** Big round heading, one block per line. */
export default function Heading({ lines, as: Tag = "h2", className = "" }) {
    return (<Tag className={`font-display ${className}`}>
      {lines.map((l) => (<span key={l} className="block">
          <Scripted text={l}/>
        </span>))}
    </Tag>);
}

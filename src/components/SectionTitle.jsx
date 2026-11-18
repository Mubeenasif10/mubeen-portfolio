export default function SectionTitle({ index, eyebrow, title, text }) {
  return (
    <header className="section-heading">
      <p className="section-index">{index}</p>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {text ? <p className="section-lead">{text}</p> : null}
      </div>
    </header>
  )
}

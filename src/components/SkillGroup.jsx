export default function SkillGroup({ title, note, items }) {
  return (
    <article className="skill-group">
      <h3>{title}</h3>
      <p>{note}</p>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
            <em>{item.status}</em>
          </li>
        ))}
      </ul>
    </article>
  )
}

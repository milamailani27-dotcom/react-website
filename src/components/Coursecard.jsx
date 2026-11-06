function Coursecard({ image, category, title, description, level }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} />

      <div className="course-info">
        <span className="course-category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="course-bottom">
          <span>{level}</span>
          <a href="#contact">Pelajari →</a>
        </div>
      </div>
    </div>
  )
}

export default Coursecard
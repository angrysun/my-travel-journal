export default function Card(props) {
  return (
    <div className='card--container'>
      <div className="card">
        <div className='card--image-container'>
          <img src={`../images/${props.item.coverImg}`} alt="Nara" className="card--image" />
        </div>
        <div className='card--details'>
          <a href={props.item.mapsLink} target="_blank" rel="noreferrer" id="location-icon"><i class="fa-solid fa-location-dot"></i></a>
          <a href={props.item.mapsLink} target="_blank" rel="noreferrer" className='location--title'>{props.item.prefecture}</a>
          <a href={props.item.mapsLink} target="_blank" rel="noreferrer" className='location--maps'>View on Google Maps</a>
          <div>
            <h1 className='card--title'>{props.item.placeLocation}</h1>
            <p className='card--date'>{props.item.date}</p>
            <p className='card--paragraph'>{props.item.paragraphContent}</p>
          </div>
        </div>
      </div>
      <hr className='solid'></hr>
    </div>
  )
}

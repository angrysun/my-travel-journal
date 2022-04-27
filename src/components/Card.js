import Nara from '../images/Nara.JPG'

export default function Card() {
  return (
    <div className="card">
      <div className='card--image-container'>
        <img src={Nara} alt="Nara" className="card--image" />
      </div>
      <div className='card--details'>
        <a href="#" target="_blank" rel="noreferrer" id="location-icon"><i class="fa-solid fa-location-dot"></i></a>
        <a href="#" target="_blank" rel="noreferrer" className='location--title'>NARA</a>
        <a href="#" target="_blank" rel="noreferrer" className='location--maps'>View on Google Maps</a>
        <div>
          <h1 className='card--title'>Nara Park | Kofuku-ji Temple</h1>
          <p className='card--date'>August 2018</p>
          <p className='card--paragraph'>Nara Park (奈良公園, Nara Kōen) is a public park located in the city of Nara, Japan, at the foot of Mount Wakakusa. Established in 1880 it is one of the oldest parks in Japan. According to local folklore, shika deer from this area were considered sacred due to a visit from Takemikazuchi, one of the four gods of Kasuga Shrine.</p>
        </div>
      <br></br>
      </div>
    </div>
  )
}

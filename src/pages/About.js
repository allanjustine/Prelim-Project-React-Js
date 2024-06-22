import image from '../assets/mdc-memorial-wall.png'
import Carousel from 'react-bootstrap/Carousel';
const About = () => {
    return (
        <div>
            <h1>
                About Mater Dei College
            </h1>
            <div style={{ height: "90vh", overflow: "auto" }}>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img src={image} alt="image" title='mdc memorial wall' className='mt-3 mx-auto d-block' />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img src={image} alt="image" title='mdc memorial wall' className='mt-3 mx-auto d-block' />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img src={image} alt="image" title='mdc memorial wall' className='mt-3 mx-auto d-block' />
                    </Carousel.Item>
                </Carousel>
                <div className="card mt-5">
                    <div className="card-body">
                        <h5>Mater Dei College</h5>
                        <p>Mater Dei College also referred to by its acronym MDC is a private, Roman Catholic, co-educational basic and higher education institution located located in Tubigon, Bohol, Philippines. It was established in 1983.<br/>
                            Address: Tubigon, Bohol<br/>
                            You visited yesterday<br/>
                            Hours: <br/>
                            Open ⋅ Closes 7PM<br/>
                            Phone: (038) 508 8106<br/>
                            President: Lourdes H. Torrefranca<br/>
                            Founded: 1983<br/>
                            Campus: 1<br/>
                            Total enrollment: 1,000 (2010)<br/>
                            Motto: Sapientia, Caritas, Oratio (Wisdom, Love, Prayer, Latin)<br/>
                            Colors: White, Blue<br/>
                            School types: Catholic school, Independent school, Private school<br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;
import { Carousel } from 'react-bootstrap';

/*function MyComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/1.jpg"
          alt="Primera imagen"
        />
        <Carousel.Caption>
          <h3>Primera imagen</h3>
          <p>Esta es la primera imagen del carrusel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/2.jpg"
          alt="Segunda imagen"
        />
        <Carousel.Caption>
          <h3>Segunda imagen</h3>
          <p>Esta es la segunda imagen del carrusel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/3.jpg"
          alt="Tercera imagen"
        />
        <Carousel.Caption>
          <h3>Tercera imagen</h3>
          <p>Esta es la tercera imagen del carrusel.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyComponent;*/




function Carrusel() {
  const repos = [
    {
      name: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      //image: '/images/1.jpg',
      url: 'https://github.com/Caro20/Prueba1_CarolinaSegura'
    },
    {
      name: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      image: '/images/2.jpg',
      url: 'https://github.com/Caro20/asignacion_2'
    },
    {
      name: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      image: '/images/3.jpg',
      url: 'https://github.com/Caro20/tarea_2'
    }
  ];

  return (
    <Carousel>
      {repos.map((repo) => (
        <Carousel.Item key={repo.name}>
          <a href={repo.url} target="_blank">
            <img
              className="d-block w-100"
              //src={repo.image}
              alt={repo.name}
            />
          </a>
          <Carousel.Caption>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;


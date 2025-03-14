import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"
import Carousel from "../components/Carousel"
import { Container, Row, Col, Card } from "react-bootstrap"

const LandingPage = observer(() => {
  return (
    <div className="bg-whitesmoke">
      {/* Hero Section */}
      <div className="py-5 text-dark text-center">
        <Container>
          <h1 className="display-4 fw-bold mb-3">Bienvenido a RECU AlnokioGaming</h1>
          <p className="lead mb-4">
            Explora los mejores videojuegos, descubre nuevos títulos y encuentra información sobre tus publishers
            favoritos.
          </p>
        </Container>
      </div>

      {/* Carrusel de juegos destacados */}
      <Container className="mb-5">
        <h2 className="text-dark fw-bold mb-4">
          <i className="bi bi-stars me-2"></i> Juegos Destacados
        </h2>
        <Carousel />
      </Container>

      {/* Secciones de navegación */}
      <Container className="py-5">
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow-lg text-center border-0">
              <Card.Body className="p-5">
                <div className="mb-3 text-danger">
                  <i className="bi bi-controller landing-icon"></i>
                </div>
                <Card.Title className="fw-bold fs-3 mb-3">Explorar Videojuegos</Card.Title>
                <Card.Text className="text-muted mb-4">
                  Descubre miles de videojuegos, filtra por géneros y encuentra tu próxima aventura.
                </Card.Text>
                <Link to="/" className="btn btn-lg btn-danger text-white">
                  <i className="bi bi-grid me-1"></i> Ver Juegos
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-lg text-center border-0">
              <Card.Body className="p-5">
                <div className="mb-3 text-danger">
                  <i className="bi bi-building landing-icon"></i>
                </div>
                <Card.Title className="fw-bold fs-3 mb-3">Descubrir Publishers</Card.Title>
                <Card.Text className="text-muted mb-4">
                  Conoce las compañías detrás de tus juegos favoritos y explora sus catálogos.
                </Card.Text>
                <Link to="/publishers" className="btn btn-lg btn-danger text-white">
                  <i className="bi bi-building me-1"></i> Ver Publishers
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="py-5 text-dark text-center">
        <Container>
          <h2 className="fw-bold mb-3">¿Listo para jugar?</h2>
          <Link to="/" className="btn btn-lg btn-danger text-white font-bold">
            <i className="bi bi-rocket me-1"></i> HOME
          </Link>
        </Container>
      </div>
    </div>
  )
})

export default LandingPage


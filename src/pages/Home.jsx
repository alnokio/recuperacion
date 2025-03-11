import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"
import Games from "./Games"
import { Container, Card, Button } from "react-bootstrap"

const Home = observer(() => {
  return (
    <div>
      {/* Banner con enlace a la landing page */}
      {/* <div className="bg-primary-gradient py-3 text-white text-center">
        <p className="mb-0">
          ¿Primera vez aquí?
          <Link to="/landing" className="ms-2 text-white fw-bold">
            <u>Visita nuestra página de inicio</u>
          </Link>
        </p>
      </div> */}

      {/* Lista de Juegos */}
      <Games />

      {/* Sección de navegación a Publishers */}
      <Container className="py-5 text-center">
        <Card className="shadow-lg border-0 p-4">
          <Card.Body>
            <h2 className="fw-bold mb-3">Busca según los publishers más recomendados</h2>
            <p className="text-muted mb-4">Explora sus catálogos</p>
            <Button as={Link} to="/publishers" variant="primary" className="btn-danger btn-lg">
              <i className="bi bi-building me-1"></i> Ver Publishers
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
})

export default Home


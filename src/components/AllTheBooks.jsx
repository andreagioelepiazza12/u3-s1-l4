import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from "../data/fantasy.json"
import { Container } from 'react-bootstrap';

const AllTheBooks = () => (

    <Container className="d-flex flex-wrap justify-content-center">


    {books.map((book) => 
    
    <Card key={book.asin} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.category}</Card.Text>
        <Card.Text>{book.price + "$"}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    )}

    

    </Container>

    
)

export default AllTheBooks;
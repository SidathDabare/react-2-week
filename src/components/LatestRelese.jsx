import { Component } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import arrayOfBooks from "../books/history.json"

class LatestRelese extends Component {
    state = {
        selectedBook: null,
    }
    render() {
        return (
            <Container>
                <h3>Latest Release </h3>
                <Row>

                    <Carousel className="mt-3 bg-dark col-6 ">
                        {arrayOfBooks.map((book) => (
                            <Carousel.Item key={book.asin}>
                                <img
                                    className="bg-dark carosal-image"
                                    src={book.img}
                                    alt="First slide"
                                    onClick={() => {
                                        console.log('you clicked an image!' + book.asin)
                                        this.setState({
                                            selectedBook: book,
                                        })

                                    }}
                                />
                                <Carousel.Caption className="bg-dark">
                                    <h6>{book.title}</h6>
                                    <p>Category : {book.category}</p>
                                    <p>${book.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className="col-6">


                    </div>

                </Row>
            </Container>
        );
    }
}
export default LatestRelese 
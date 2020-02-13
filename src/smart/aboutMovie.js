import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'

const Info = (props) => {
    const id = props.match.params.number
    const { name, image, summary } = props.items[id].show
    return (
        <Container className="pt-4 About">
            <Row>
                <Col>
                <h1>{name}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <img src={image.original} alt={name}/>
                </Col>
            </Row>
            <Row className="pt-4 pb-5">
                <Col>
                <h3>
                {summary ? summary.replace(/<[^>]+>/g, '') : null}
                </h3>
                </Col>
            </Row>
        </Container>
    )
}

export default connect(
    state => ({
        items: state.items
    })
)(Info)
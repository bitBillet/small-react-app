import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col} from 'reactstrap'

const Info = (props) => {
    const id = props.match.params.number
    const { name, image, summary } = props.items[id].show
    return (
        <Container style={{textAlign: 'center'}} className="pt-4">
            <Row>
                <Col>
                <h2>{name}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                <img src={image.medium} alt={name}/>
                </Col>
            </Row>
            <Row className="pt-4">
                <Col>
                {summary ? summary.replace(/<[^>]+>/g, '') : null}
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
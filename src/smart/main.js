import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap'
import { itemsFetchData } from '../actions'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Header from './header'


class Main extends Component {
    componentDidMount() {
        this.props.fetchData(`http://api.tvmaze.com/search/shows?q=stargate`)
    }
    render() {
        let gallery,
            rows = []
        const { items, isLoad } = this.props
        if (isLoad) {
            gallery = items.map((item, index) => {
                const { id, image, name } = item.show
                return (
                    <Col key={index}>
                     <Link to={`/info/${index}`}>
                         <img src={image ? image.medium : null} alt={id}/>
                     </Link>
                     <p style={{marginTop: 10}}> {name} </p>
                    </Col>
                )
            })
            for (let i = 0; i < gallery.length; i++) {
                rows.push(
                    <Row key = {i} lg="3" className="gallery">
                        {gallery[i]}
                        {gallery[++i]}
                        {gallery[++i]}
                    </Row>
                )
            }
        }
        console.log(items)
        return (
            <div>
                <Header/>
                <Container>
                {isLoad ? rows : 'Loading...'}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        isLoad: state.itemsIsLoading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

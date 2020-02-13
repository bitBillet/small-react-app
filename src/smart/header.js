import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { itemsFetchData } from '../actions'
import { connect } from 'react-redux'

class Header extends Component{
    searchHandler = (event) =>{
        let text = event.target.value
        if (!text) this.props.fetchData(`https://api.tvmaze.com/search/shows?q=stargate`)
        else this.props.fetchData(`https://api.tvmaze.com/search/shows?q=${text}`)
    }
    render() {
        return (
          <Container fluid={true} className="header">
            <Container>
              <div>ИСКАТЬ ФИЛЬМ →</div>
              <input
                type="search"
                placeholder="search movie(eng only)"
                onChange={this.searchHandler}
              />
              <div>↓ СМОТРЕТЬ ИНФОРМАЦИЮ О ФИЛЬМЕ ПО КЛИКУ</div>
            </Container>
          </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    }
}

export default connect(null, mapDispatchToProps)(Header)


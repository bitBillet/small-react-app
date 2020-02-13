import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { itemsFetchData } from '../actions'
import { connect } from 'react-redux'

class Header extends Component{
    searchHandler = (event) =>{
        let text = event.target.value
        if (!text) this.props.fetchData(`http://api.tvmaze.com/search/shows?q=stargate`)
        else this.props.fetchData(`http://api.tvmaze.com/search/shows?q=${text}`)
    }
    render() {
        return (
            <Container 
             style={{ 
                backgroundColor: 'green', 
                height: 50, 
                position: 'fixed', top: 0, zIndex: 1000, 
                display: 'flex', alignItems: 'center', 
                 justifyContent: 'center'
              }}
              fluid={true}>
             <input type='search' placeholder='search movie' onChange={this.searchHandler}/>
          </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    }
}

export default connect(null, mapDispatchToProps)(Header)


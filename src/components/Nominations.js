import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { deleteNominee } from '../actions/deleteNominee'
import { connect } from 'react-redux';

const buttonStyle = {
    borderRadius: "30px"
}
class Nominations extends Component {

    handleOnClick = (e) =>{
        this.props.deleteNominee(this.props.movie);
    }

    render() {
        return (
            <div style={{display:"flex", padding:"10px 10px"}}>
                <li>{this.props.movie.Title}{" ("+this.props.movie.Year+")"}</li>&nbsp;
                <Button style={{buttonStyle}} variant="secondary" size="sm" onClick={this.handleOnClick}>Remove</Button>          
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mainPageState: state.mainPageState
});

export default connect(mapStateToProps,{ deleteNominee })(Nominations)



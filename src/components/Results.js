import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { addNominee } from '../actions/addNominee'
import { connect } from 'react-redux';

const buttonStyle = {
    borderRadius: "30px"
}
class Results extends Component {

    handleOnClick = (e) =>{
        this.props.addNominee(this.props.movie);
    }

    render() {
        return (
            <div style={{display:"flex", padding:"10px 10px"}}>
                <li>{this.props.movie.Title}{" ("+this.props.movie.Year+")"}</li>&nbsp;
                {(this.props.mainPageState.nominations.find(movie=>{ return movie.imdbID === this.props.movie.imdbID}) === undefined) ? (
                    <Button style={{buttonStyle}} variant="primary" size="sm" onClick={this.handleOnClick}>Nominate</Button>
                ):(
                    <Button style={{buttonStyle}} variant="primary" size="sm" disabled>Nominate</Button>
                )}                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mainPageState: state.mainPageState
});

export default connect(mapStateToProps,{ addNominee })(Results)



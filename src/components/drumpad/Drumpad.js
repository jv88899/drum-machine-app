import React, { Component } from 'react';
import './drumpad.css';

class Drumpad extends Component {
    handleClick = id => {
        let audio = document.getElementById(id);
        audio.play();
    }

    render() {
        return (
            <div
                className="drum-pad"
                id={this.props.id}
                onClick={() => this.handleClick(this.props.keyLetter)}
            >
                <p>{this.props.keyLetter}</p>
                <audio
                    src={this.props.audioLink}
                    className="clip"
                    id={this.props.keyLetter}
                >
                </audio>
            </div>
        )
    }
}

export default Drumpad;
import React, { Component } from 'react';
import './drumpad.css';

class Drumpad extends Component {
    componentDidMount = () => {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = e => {
        e.preventDefault();
        const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        
        let index = keys.indexOf(e.key.toUpperCase());
        if (index === -1) {
            return;
        }
        let audio = document.getElementById(e.key.toUpperCase());
        audio.play();
    }

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
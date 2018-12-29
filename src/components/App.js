import React, { Component } from 'react';
import Drumpad from './drumpad/Drumpad';

class App extends Component {
    state = {
        drumpad: [
            {
                keyCode: 81,
                keyLetter: 'Q',
                audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
                id: 'heater-1'
            },
            {
                keyCode: 87,
                keyLetter: 'W',
                audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
                id: 'heater-2'
            },
            {
                keyCode: 69,
                keyLetter: 'E',
                audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
                id: 'heater-3'
            },
            {
                keyCode: 65,
                keyLetter: 'A',
                audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
                id: 'heater-4'
            },
            {
                keyCode: 83,
                keyLetter: 'S',
                audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
                id: 'heater-6'
                
            },
            {
                keyCode: 68,
                keyLetter: 'D',
                audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
                id: 'dsc-0h'
            },
            {
                keyCode: 90,
                keyLetter: 'Z',
                audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
                id: 'kick-n-hat'
            },
            {
                keyCode: 88,
                keyLetter: 'X',
                audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
                id: 'kick'
            },
            {
                keyCode: 67,
                keyLetter: 'C',
                audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
                id: 'cev-h2'
            }
        ]
    }

    render() {
        return (
            <div id="drum-machine">
                <div id="display"></div>
                {
                    this.state.drumpad.map( item => (
                        <Drumpad
                            key={item.keyCode}
                            keyCode={item.keyCode}
                            keyLetter={item.keyLetter}
                            audioLink={item.audioLink}
                            id={item.id}
                        />
                    ))
                }
            </div>
        )
    }
}

export default App;
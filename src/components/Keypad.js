// Code Keypad Component Here
import React, { Component } from 'react';


class Keypad extends React.Component {


    handleKeyUp = (event) => {
            console.log('Entering password...')
        }
<<<<<<< HEAD

=======
       
>>>>>>> b965c405d5f8fca277b9e9720cc6fd323941c04d

    render () {
        return (
        <div>
            <input type="password" onKeyUp={this.handleKeyUp} />
        </div>
        )}
}
<<<<<<< HEAD
export default Keypad
=======
export default Keypad
>>>>>>> b965c405d5f8fca277b9e9720cc6fd323941c04d

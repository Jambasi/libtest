/* ============================================================================= */
/* Renders information structured by a FieldGroup and an object holding the data */
/* use position: 'left' or position:'right' in FieldGroup to structure fields    */
/* All fields without a position attribute will be rendered after fields with    */
/* position attributes                                                           */
/* ============================================================================= */

import React, { Component } from 'react';

class Button extends Component {

  handleClick() {
    window.open('http://localhost:6060')
  }

  render() {
  
    return (
      <button onClick={this.handleClick}
       
      >
        {"Documentation"}
      </button>
    );
  }
}

export default Button;

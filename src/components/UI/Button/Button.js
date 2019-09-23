import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
@media only screen and (max-width: 500px) {
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 8rem;
  background: transparent;
  color: #01b4fe;
  border: 2px solid #01b4fe;
  cursor: pointer;
  font-family:'Oswald', sans-serif;
  font-size: 1.5rem; 
}
@media only screen and (min-width: 961px) {
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 10rem;
  background: transparent;
  color: #01b4fe;
  border: 2px solid #01b4fe;
  cursor: pointer;
  font-family:'Oswald', sans-serif;
  font-size: 1.8rem;
}
  :hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0,0,0, 0.2); }
  :hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0.3; }

`

export default Button;
import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  height: 48,
  color: 'red',
  background: 'linear-gradient(45deg, lightblue 30%, gray 90%)',
  padding: '0 30px',
  letterSpacing: '5px',
  fontSize: '24px',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(10, 100, 50, .3)',
});

function ButtonM(props) {
  return (
    <div>
      <MyButton disabled={props.dis} onClick={props.click}>{props.text}</MyButton>
    </div>
  )
}

export default ButtonM

import React, { ButtonHTMLAttributes } from 'react';

import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from '../../../styles/StyledButton.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: IconProp,
  action?: String,
  active?: boolean,
  type_button: String,
}

const StyledButton: React.FC<ButtonProps> = ({ icon, type_button, action, ...rest }) => {
  return (
    <Button 
      className={(type_button == "red") ? styles.red_button : styles.blue_button} 
      {...rest}
    >
      { icon && <FontAwesomeIcon icon={icon} className={action && "mr-2"} /> }
      { action }
    </Button>
  )
}

export default StyledButton;
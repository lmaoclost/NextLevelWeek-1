import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const CreatePointConfirm = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push('/'), 2000);
    // eslint-disable-next-line
  }, []);

  return(
    <div id="page-create-point-confirm">
      <span>
        <FiCheckCircle />
      </span>
      <h1>Cadastro Concluído!</h1>
    </div>
  )
}

export default CreatePointConfirm;
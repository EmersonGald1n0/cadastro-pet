import React from 'react';
import { DivCadastro } from '../../style/styled'
import pet1 from '../../img/pet1.png'

export default function Cadastro(props) {
  return (
    <DivCadastro>
      <p className='nome'>{props.nome}</p>
      <div>
        <figure>
            <img src={pet1} alt="" width="200px"/>
        </figure>
      </div>
      <p>{props.idade}</p>
      <p>{props.raca}</p>
      <p>{props.tamanho}</p>
      <p>{props.dono}</p>
      <p>{props.tel}</p>
      <p>{props.foto}</p>
      <p>{props.obs}</p>
    </DivCadastro>
  );
}



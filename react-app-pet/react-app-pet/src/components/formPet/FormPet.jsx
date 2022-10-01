import React from 'react'
import { DivForm } from '../../style/styled'

export default function FormPet(props) {
  return (
    <DivForm>
        <div>
            <h2>Formulário Pet</h2>
            <form method="post" onSubmit={props.funcaoAddCadastro}>
                <div>
                    <input type="text" name="nome" placeholder='Nome do Pet...' value={props.novoCadastro.nome} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    
                    <input type="text" name="idade" placeholder='Idade...' value={props.novoCadastro.idade} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="raca" placeholder='Raça...' value={props.novoCadastro.raca} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="tamanho" placeholder='Tamanho...' value={props.novoCadastro.tamanho} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="dono" placeholder='Nome do dono...' value={props.novoCadastro.dono} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    
                    <input type="text" name="tel" placeholder='Telefone do dono...' value={props.novoCadastro.tel} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <textarea name="obs" cols="30" rows="10" placeholder='Observações...' value={props.novoCadastro.observacoes} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <button type="submit">Adicionar</button>
                </div>
            </form>
        </div>
    </DivForm>
  )
}



import styled from 'styled-components'
type BotaoProps = {
  principal: boolean
}
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
`

const BotaoPerigo = styled(Botao)`
  background-color: orange;
  color: #fff;
`
function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao principal={false}>No </Botao>
      <BotaoPerigo principal>Perigo</BotaoPerigo>
    </>
  )
}

export default Teste

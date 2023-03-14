import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import Theme from "../config/theme"

const Button = styled.button`
  font-size: 1.5rem;
  background-color: ${Theme.dark};
  color: ${Theme.lightest};
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  &:hover{
    background-color: ${Theme.light};
  }
  &:active{
    transform: translate(0, 5px);
  }
`

interface Props{
  onClick: () => void
}

const HelloButton: React.FC<Props> = ({ onClick }) =>{

  const [msg, setMsg] = useState<string | null>(null)

  const fetchHello = async () =>{
    const res = await axios.get('/api/hello')
    setMsg(res.data.message)
  }

  const handleClick = async () =>{
    if(!msg){
      await fetchHello()
    }else{
      setMsg(null)
    }
    onClick()
  }
  
  return(
    <Button onClick={handleClick}  data-testid="hello-button">
      Click Me! {msg}
    </Button>
  )
}

export default HelloButton
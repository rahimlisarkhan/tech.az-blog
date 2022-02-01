import { MainStyled } from "./Main.styled"
import React, { ReactNode } from 'react'


type Props = {
    children?: ReactNode
  }
  
const Main = ({children}:Props) => {
    return(
        <MainStyled>
             {children}
        </MainStyled>
    )
}

export default Main
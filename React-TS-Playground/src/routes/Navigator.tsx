import { Outlet } from 'react-router-dom';
import * as Styled from './Navigator.style.ts'

const Root=()=>{
    return (
        <>
        <Styled.Container>
        <Styled.Sidebar>
          <h1><a href={`/`}>HomePage</a></h1>
          <nav>
            <ul>
              <li>
                <a href={`link1`}>A Link</a>
              </li>
              <li>
                <a href={`link2`}>Not Working Link</a>
              </li>
            </ul>
          </nav>
        </Styled.Sidebar>
        <Styled.OutletContainer>

        <Outlet/>
        </Styled.OutletContainer></Styled.Container>
      </>)
}
export default Root;
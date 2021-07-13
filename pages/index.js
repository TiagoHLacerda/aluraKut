import styled from 'styled-components';
//import { AlurakutStyles } from '../src/lib/AlurakutCommons';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AluraKutCommons";
import {ProfileRelationsBoxWrapper} from "../src/components/ProfileRelations"



function ProfileSideBar(props) {
  // const gitHubUser ='TiagoHLacerda';
  return (

    <Box >
      <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}





// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `




export default function Home() {

  const gitHubUser = 'TiagoHLacerda';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className=" profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar gitHubUser={gitHubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title"> 
             Bem Vindo(a)</h1>
           <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper >
           <h2 className="smallTitle">
           Pessoas da Comunidade  ({pessoasFavoritas.length})
           </h2> 
      
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                      <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>

                  </a>
                  </li>
                
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

        </div>







      </MainGrid>
    </>
  )
}

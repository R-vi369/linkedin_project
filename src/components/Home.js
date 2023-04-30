import React from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide'
import Main from './Main'
import RightSide from './RightSide'
const Home = (props) => {
  return (
    <Container>
    <Section>
      <h5>
        <a>Hiring in a hurry? - </a>
      </h5>
      <p>Find talented pros in record time with Upwork and keep business moving.</p>
    </Section>
    <Layout>
     <LeftSide/>
     <Main/>
     <RightSide/>
    </Layout>
    </Container>
  )
}

const Container =styled.div`
padding-top:52px;
max-width: 100%;
`;
const Content= styled.div`
max-width: 1128px;
margin-left:auto;
margin-right:auto;
`;
const Section = styled.section`
min-height: 50%;
padding: 16px 0;
box-sizing: content-box;
text-align: center;
text-decoration: underline;
display: flex;
justify-content: center;
h5{
  color: #0a66c2;
  font-size: 14px;
  a{
    font-weight: 700;
  }
}

p{
  font-size: 14px;
  color: #434649;
  font-weight: 600;

}
@media (max-width: 768px) {
  flex-direction: column;
  padding: 0 5px;
  
}
`;



  const Layout= styled.div`
  display:grid ;
  grid-template-areas: 'left  middle right';
  grid-template-columns: minmax(0,5px) minmax(0, 12px) minmax(300px 7px);
  column-gap: 25px;
  row-gap: 25px;
  grid-tamplate-row:auto;
  margin: 25px 0;
  @media (max-width:768px){
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
  
  `;

export default Home
import React from 'react'
import styled from 'styled-components'

const Layout=styled.div`
margin-top:100px;  
display: grid;
 grid-template-columns:repeat(3,1fr);
 grid-auto-rows:auto;
 grid-gap:1rem;
 @media (max-width:900px) {
  grid-template-columns:repeat(2,1fr);
 };
 @media (max-width:534px) {
   grid-template-columns:auto
 }
`

const StyledContainer = styled.div`
  margin:10px;  
  height:auto;
  padding:20px;
  text-align:center;
  background: rgb(30,0,36);
  background: linear-gradient(90deg, rgba(30,0,36,0.9772727272727273) 0%, rgba(121,9,119,1) 1%, rgba(221,204,223,1) 85%);
  
 
`

const Title = styled.h2`
  color: black;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Date = styled.div`
  color: balck;
  font-weight: 300;
  
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

const Description = styled.p`
  color: balck;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const StyledPhoto = styled.img`
 width:90%;
  height: 70%;
  border: 1px solid gray ;
`




class Card extends React.Component {

render(){
  const{data}=this.props

  return (
<Layout>


  {data&&data.map((item)=>(
 <StyledContainer key={item.id}>
    <StyledPhoto src={item.avatar}/>
     <Title>Name : {item.first_name}</Title>
    <Date>
      {item.last_name}</Date>
  <Description>{item.email}</Description>
  </StyledContainer>
    

  ))} 

</Layout>
  )
}

      }

export default Card
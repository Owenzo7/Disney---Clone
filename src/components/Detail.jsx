import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
                <img src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg"  />
            </Background>
                <ImageTitle>
                        <img src="data:image/jpeg;base64,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" />
                    </ImageTitle>

                        <Controls>
                             <PlayButton>
                                <img src="/images/play-icon-black.png"  />
                                <span>PLAY</span>
                             </PlayButton>

                              <TrailerButton>
                                <img src="/images/play-icon-white.png"  />
                                <span>Trailer</span>
                              </TrailerButton>

                              <AddButton>
                              <span>+</span>

                              </AddButton>

                              <GroupWatchButton>

                                  <img src="/images/group-icon.png"  />
                              </GroupWatchButton>


                          </Controls>

                                    <SubTitle>

                                        2018 • 7m • Family, Fantasy, Kids, Animation
                                          </SubTitle>

                                                    <Description>

                                                          A Chinese mom who's sad when her grown
                                                          son leaves home gets another chance at
                                                          motherhood when one of her dumplings springs
                                                          to life. But she finds that nothing stays cute
                                                          and small forever.
                                                          </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
   min-height:calc(100vh - 70px); 
   padding: 0 calc(3.5vw + 5px);
   position: relative;


`
const Background = styled.div`
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:-1;
    opacity: 0.8;


    img{

        width: 100%;
        height: 100%;
        object-fit:cover;
    }

`

const ImageTitle = styled.div`

height: 30vh;
min-height:170px;
width: 35vw;
min-width:200px;
margin-top:60px;

img{

  width: 100%;
  height: 100%;
  object-fit:contain;
}
`


const Controls = styled.div`
  display: flex;
  align-items: center;

`

const PlayButton = styled.button`
  border-radius:4px;
  font-size:15px;
  padding: 0px 24px;
  margin-right:22px;
  display: flex;
  align-items: center;
  height: 56px;
  background:rgb(249, 249, 249);
  border:none;
  letter-spacing:1.8px;
  cursor:pointer;


  &:hover{

    background:rgb(198, 198, 198);
  }
  
`
const TrailerButton = styled(PlayButton)`
  background:rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color:rgb(249, 249, 249);
  text-transform:uppercase;

`
const AddButton = styled.button`
  margin-right: 16px;
  width:44px;
  height:44px;
  display: flex;
  align-items:center;
  justify-content: center;
  border-radius:50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor:pointer;

  span{

    font-size:30px;
    color:white;


  }

`
const GroupWatchButton= styled(AddButton)`
 background: rgb(0, 0, 0); 

`


const SubTitle = styled.div`

color:rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;

`

const Description = styled.div` 

 line-height: 1.4;
 font-size: 20px;
 margin-top: 16px;
 color: rgb(249, 249, 249);
 max-width:760 px;
`
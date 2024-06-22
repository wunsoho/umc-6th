import styled from "styled-components";

export const CustomSlider = styled.div`
  .slide-container{
    background-color : #000000;
    color: #ffffff;
    height:40vh;
    text-align:center;
  }
  .slide_text{
    margin-top : 17vh;
    font-size : 2em;
    font-weight:bold;
  }
`;
export const Search = styled.div`
  margin-top : 5vh;
  text-align : center;
  color : #ffffff;
  font-size : 1.8em;
  font-weight : bold;
  .movieimg{
    border-radius : 5vw;
  }
  .search1{
    padding-left : 1vw;
    margin-top : 5vh;
    width : 23vw;
    height : 3.5vh;
    border-radius : 5vw;
  }
`
export const Title = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  .title1{
    margin-left : 1vw;  
  }
`
export const Info = styled.div`
  background-color : #11264f;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5vh;
  width: 70vw;
  max-height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const Component = styled.div`
    margin-left : 2vw;
    margin-top : 2vh;
    background-color: #373b69;
    position: relative;
    display:inline-block;
`;

export const Movieimg = styled.div`
    width: 200px;
    background-color: #373b69;
    position: relative;
`;
export const Img = styled.img`
  width: 100%;
`;
export const Movieinfo = styled.div`
  font-size : 0.5em;
  margin-left: 1vw;
  margin-top: 0.5vh;
  margin-bottom : 3vh;
  color: #FFFFFF;
  display:flex;
  justify-content: space-between;
  align-items: flex-start;
  #average {
    margin-right: 1vw;
    white-space: nowrap;
  }
  .title {
    flex: 1;
    margin-right: 1vw;
  }
`;
export const Hideinfo = styled.div`
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    color: #c7c7c7;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 13px;
    height: 100%;
    border-radius: 0 0 5px 5px;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    text-overflow: ellipsis;
`;

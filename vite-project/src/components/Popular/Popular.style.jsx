import styled from "styled-components";

export const component = styled.div`
    margin-left : 2vw;
    margin-top : 2vh;
    background-color: #373b69;
    position: relative;
    display:inline-block;
`;

export const movie_img = styled.div`
    width: 200px;
    background-color: #373b69;
    position: relative;
`;
export const img = styled.img`
    width: 100%;
`;
export const movie_info = styled.div`
    font-size : 0.5em;
    margin-left: 1vw;
    margin-top: 1vh;
    margin-bottom : 1vh;
    color: #FFFFFF;
    display:flex;
    #average{
        margin-left : 1vw;
    }
`;
export const hide_info = styled.div`
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
export const detailContainer = styled.div`
    display: flex;
`
export const detail = styled.div`
    font-size : 1em;
    color : #ffffff;
    margin-left : 5vw;
    margin-top : 15vh;
    .title1{
        font-size : 1.5em;
    }
    .vote{
        dispaly: inline-block;
        margin-top : 3vh;
    }
    .date{
        margin-top : 3vh;
    }
    .viewT{
        margin-top : 3vh;
    }
    .viewD{
        width : 50vw;
        margin-top : 3vh;
    }
    .star_icon {
        margin-left : 5px;
        display: inline-flex;
    }
`
export const detailimg = styled.div`
    width : 250px;
    margin-left : 15vw;
    margin-top : 10vh;
`
export const castContainer = styled.div`
    margin-left : 5vw;
    margin-top : 20vh;
    width : 90vw;
    text-align : center;
    .castTitle{
        font-weight : bold;
        color : #ffffff;
    }
`

export const castList = styled.div`
    margin-top: 5vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #ffffff;
`;

export const castItem = styled.div`
    margin: 2vw;
    .profile { 
        width: 5vw;
        height: 5vw;
        border-radius: 50%;
    }
`;
import styled from "styled-components";

export const component = styled.div`
    margin-left : 1vw;
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
        margin-left : 0.8vw;
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
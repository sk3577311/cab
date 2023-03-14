import React,{ FunctionComponent, useRef } from "react";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";

import { color } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import Profile from "../Header/Profile";
import {SendMoneyProps } from "./types";
import { ScreenWidth } from "../shared";

const SendMoneyItemContainer = styled.TouchableHighlight`
height:130px;
width:${ScreenWidth * 0.27}px;
padding:10px;
border-radius:15px;
justify-content:space-around;
margin: 0px 10px 10px 0px;
`;



const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
    return (
        <SendMoneyItemContainer underlayColor={color.secondary}
        style={{backgroundColor:props.background}}
        onPress={()=> {
            alert("Send Money")
        }}
        >
            <>
            <Profile img={props.img} imgContainerStyle={{marginBottom:10}} />
            <SmallText textstyles={{textAlign:"left",color:color.white,fontSize:12}} childern={props.name}></SmallText>
            <RegularText textstyles={{color:color.white,textAlign:"left",fontSize:13}} childern={props.amount}></RegularText>
            </>
        </SendMoneyItemContainer>
    );
}
export default SendMoneyItem;   

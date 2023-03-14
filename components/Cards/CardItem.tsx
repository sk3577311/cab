import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { CardProps } from "./types";
import { ScreenWidth } from "../shared";
import { color } from "../colors";
import bt from '../../assets/line.png'
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { View } from "react-native";

const CardBackground = styled.ImageBackground`
height:75%;
width:${ScreenWidth * 0.67}px;
resize-mode: cover;
background-color:#0e0863;
border-radius:25px;
margin-right:25px;
overflow:hidden;
`;

const CardTouchable = styled.TouchableHighlight`
height:100%;
border-radius:25px;
`;

const TouchableView = styled.View`
justify-content: space-between;
align-items: center;
padding:30px;
flex:1;
`;

const CardRow = styled.View`
flex-direction: row;
justify-content: space-between;
width:100%;
align-items: center;
`;

const Logo = styled.Image`
width:100%;
height:80%;
resize-mode:contain;
flex:1;
`;

const CardItem:FunctionComponent<CardProps>=(props)=>{

    const handlePress=()=>{};


    return(
    <CardBackground source={bt}>
        <CardTouchable underlayColor={color.secondary}>
            <TouchableView>
                <CardRow>
                    <RegularText childern={["******",props.accountNo.slice(6,10)]} textstyles={{fontSize:20,color:color.white}}></RegularText>
                </CardRow>
                <CardRow>
                    <View style={{flex:3}}>
                        <SmallText textstyles={{marginBottom:5,color:color.graylight}} childern={"Total Balance"}>
                        </SmallText>
                        <RegularText textstyles={{fontSize:19}} childern={["$ ",props.balance]}></RegularText>
                    </View>
                    <Logo source={props.logo}/>
                </CardRow>
            </TouchableView>
        </CardTouchable>
    </CardBackground>
    );
};


export default CardItem;
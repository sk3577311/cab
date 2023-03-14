import React,{FunctionComponent} from "react";
import styled from "styled-components/native";

import { color } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { TransactionAviProps } from "./types";
import { Ionicons } from '@expo/vector-icons'

const StyledView = styled.View`
height:45px;
width:45px;
border-radius:10px;
justify-content:center;
align-items:center;
`;

const TransactionAvi: FunctionComponent<TransactionAviProps>=(props)=>{
    return(
        <StyledView style={{backgroundColor:props.background}}>
            <Ionicons name={props.icon} size={25} color={color.white}/>
        </StyledView>
    );
};


export default TransactionAvi
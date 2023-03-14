import React,{FunctionComponent} from "react";
import styled from "styled-components/native";

import { color } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { TransactionSectionProps } from "./types";
import { Ionicons } from '@expo/vector-icons'
import TransactionItem from "./TransactionItem";

const TransactionSectionBackground =styled.View`
width:100%;
flex:2;
padding-horizontal:25px;
padding-top:5px;
`;
const TransactionRow = styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
`;
const TransactionList = styled.FlatList`
width:100%;
`;

const TransactionSection: FunctionComponent<TransactionSectionProps>=(props)=>{
    return(
        <TransactionSectionBackground>
            <TransactionRow style={{marginBottom:25}}>
                <RegularText textstyles={{fontSize:19,color:color.secondary}} childern={"Transaction"}></RegularText>
                <SmallText textstyles={{color:color.secondary}} childern={'Recent'}>
                    <Ionicons name="caret-down" size={13} color={color.graydark} />
                </SmallText>
            </TransactionRow>
            <TransactionList 
            data={props.data}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom:25,
            }}
            keyExtractor={({id}:any)=>id.toString()}
            renderItem={
                ({item}:any)=> <TransactionItem {...item}/>
            }
            />
        </TransactionSectionBackground>
    );
};


export default TransactionSection
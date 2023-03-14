import React,{ FunctionComponent, useRef } from "react";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";

import { color } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

import {SendMoneySectionProps } from "./types";
import SendMoneyItem from "./SendMoneyItem";
const SendMoneytSectionBackground = styled.View`
width:100%;
paddong-top:15px;
background-color:${color.white};
`;

const SendMoneyRow = styled.View`
flex-direction:row;
padding-horizontal:25px;
justify-content:space-between;
align-items:center;
width:100%;
`;

const SendMoneyList = styled.FlatList`
width:100%;
flex:auto;
min-height:80%;
padding-horizontal:25px;
`;

const TextButton = styled.TouchableOpacity``;



const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {
  const sheetRef = useRef<BottomSheet>(null);

  const renderContent =()=>{
    return (
    <SendMoneytSectionBackground>
        <SendMoneyRow  style={{marginBottom:25}}>
            <RegularText textstyles={{fontSize:19,color:color.secondary,marginTop:10}} childern={"Send Money To"}></RegularText>
            <TextButton onPress={()=>alert("Add")}>
                <SmallText textstyles={{fontWeight:"bold",color:color.tertiary,flex:1,marginTop:10}} childern={"Add"}>
                </SmallText>
            </TextButton>
        </SendMoneyRow>
        <SendMoneyList data={props.data}
        contentContainerStyle={{
            alignItems:"flex-start",
        }}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        keyExtractor={({id}:any)=>id.toString()}
        renderItem={({item}:any)=> <SendMoneyItem {...item}/>}/>
    </SendMoneytSectionBackground>);    
  };


  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[240, 85]}
      borderRadius={25}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

export default SendMoneySection;

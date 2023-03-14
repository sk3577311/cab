import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { color } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { TransactionProps } from "./types";
import { Ionicons } from "@expo/vector-icons";
import TransactionAvi from "./TransactionAvi";
import { View } from "react-native";

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  marginBottom:20;
  align-items: center;
  flex: 2;
`;
const RightView = styled.View`
  flex: 1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{ marginLeft: 20 }}>
          <RegularText
            textstyles={{
              color: color.secondary,
              textAlign: "left",
              marginBottom: 5,
            }}
            childern={props.title}
          ></RegularText>
          <SmallText
            textstyles={{
              textAlign: "left",
              color: color.graydark,
            }} childern={props.subtitle}
          ></SmallText>
        </View>
      </LeftView>
      <RightView>
      <RegularText
            textstyles={{
              color: color.secondary,
              textAlign: "right",
              marginBottom: 5,
            }}
            childern={props.amount}
          ></RegularText>
          <SmallText
            textstyles={{
              textAlign: "right",
              color: color.graydark,
            }} childern={props.date}
          ></SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;

import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { StyleProp, TextStyle } from "react-native";

import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { color } from "../colors";

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const Greetings: FunctionComponent = (props) => {
  return (
    <StyledView>
      <RegularText
        textstyles={[
          {
            color: color.secondary,
            fontSize: 25,
            fontWeight:800
          },
          props.mainTextStyles,
        ]}
        childern={props.mainText}
      ></RegularText>
      <SmallText
        textstyles={[
          {
            color: color.graydark,
          },
          props.subTextStyles,
        ]}
        childern={props.subText}
      ></SmallText>
    </StyledView>
  );
};

export default Greetings;

import React, { FunctionComponent } from "react";
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { color } from "../colors";
import RegularText from "../Texts/RegularText";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color:#fff;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

//types
interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<ViewStyle>;
  childern: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps>= (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText textstyles={{color:"#000"}} childern={props.childern}></RegularText>
    </ButtonView>
  );
};

export default RegularButton;

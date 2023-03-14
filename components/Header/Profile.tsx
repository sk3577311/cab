import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { GestureResponderEvent, ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { color } from "../colors";
import { StyledProps } from "styled-components";

const StyledView = styled.View`
  flex-direction: column;
  height: 45px;
  width: 45px;
  boder-radius: 15px;
`;

const StyledImage = styled.Image`
  resize-mode: cover;
  height: 100%;
  width: 100%;
`;
interface ProfileProps {
    img:ImageSourcePropType;
    imgStyle?:StyledProps<ImageStyle>;
    imgContainerStyle?:StyledProps<ViewStyle>;
    onPress?:((event:GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent = (props) => {
  return(
    <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
        <StyledImage style={props.imgStyle} source={props.img} />
    </StyledView>
  )
};

export default Profile;

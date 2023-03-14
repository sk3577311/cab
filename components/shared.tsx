import styled from "styled-components/native";
import { color } from "./colors";
import { Dimensions } from "react-native";

export const Container = styled.View`
flex:1;
align-items:center;
background-color: ${color.white}`;

export const ScreenWidth = Dimensions.get('screen').width
export const ScreenHeight = Dimensions.get('screen').height
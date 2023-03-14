import React,{FunctionComponent} from "react";
import styled from "styled-components/native";
import { color } from "../colors";


const StyledText = styled.Text`
font-size: 45px;
color: ${color.white};
text-align: left;
font-family: Lato-Bold;
`;

import { TextProps } from "./types";


const BigText: FunctionComponent<TextProps> = (props)=> {
    return <StyledText style={props.textstyles}>{props.childern}</StyledText>;
};

export default BigText;
import React,{FunctionComponent} from "react";
import styled from "styled-components/native";
import { color } from "../colors";


const StyledText = styled.Text`
font-size: 14px;
color: ${color.gray};
text-align: left;
font-family: Lato-Regular;
`;

import { TextProps } from "./types";


const SmallText: FunctionComponent<TextProps> = (props)=> {
    return <StyledText style={props.textstyles} > {props.childern}</StyledText>;
};

export default SmallText;
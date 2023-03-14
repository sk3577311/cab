import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

//fonts
import SmallText from "../components/Texts/SmallText";
import BigText from "../components/Texts/BigText";
import RegularButton from "../components/Button/RegularButton";

//custom elememnt
import { color } from "../components/colors";
import { Container } from "../components/shared";

const WelcomeContainer = styled(Container)`
  background-color: ${color.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;
const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;
const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: center;
`;
import background from "../assets/background.png";

export const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText
            textstyles={{ width: "70%", marginBottom: 25 }}
            childern={"Best way to get a ride easily"}
          />
          <SmallText
            textstyles={{ width: "70%", marginBottom: 25 }}
            childern={"Choose From The Best Here"}
          />
          <RegularButton
            onPress={() => {}}
            childern={"Get Started"}
          />
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

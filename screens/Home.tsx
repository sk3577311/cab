// imports
import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Container } from "../components/shared";
import { color } from "../components/colors";
// logos
import visa from "../assets/visa.png";
import master from "../assets/master.png";
// images
import w2 from '../assets/w2.png';
import black from '../assets/black.png';
import w1 from '../assets/w1.png';

// cardsection
import CardSection from "../components/Cards/CardSection";
// Transactionsection
import TransactionSection from "../components/Transactions/TransactionSection";
// sendmoneysection
import SendMoneySection from "../components/SendMoney/SendMoneySection";
const HomeContainer = styled(Container)`
  background-color: ${color.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "7894561239",
      balance: 20000.15,
      alias: "Work Debit",
      logo: visa,
    },
    {
      id: 2,
      accountNo: "8523697410",
      balance: 80000.15,
      alias: "Work credit",
      logo: master,
    },
    {
      id: 3,
      accountNo: "45698523147",
      balance: 40000.15,
      alias: "Salary",
      logo: visa,
    },
    {
      id: 4,
      accountNo: "7744562982",
      balance: 5498.15,
      alias: "Fuds",
      logo: master,
    },
  ];
  const TransactionData = [
    {
      id: 1,
      amount: "-$86.02",
      date: "14 Sep 2021",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: color.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$203.02",
      date: "15 Sep 2021",
      title: "Shopping",
      subtitle: "Ali Express",
      art: {
        background: color.tertiary,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount: "-$507.02",
      date: "25 Sep 2021",
      title: "Travel",
      subtitle: "Emiratess",
      art: {
        background: color.accent,
        icon: "airplane",
      },
    },
  ];
  const sendMoneyData = [
    {
      id: 1,
      amount: "788",
      name: "Josh",
      background: color.tertiary,
      img:w1
    },
    {
      id: 2,
      amount: "8566",
      name: "Ramon",
      background: color.primary,
      img:black
    },
    {
      id: 3,
      amount: "4669",
      name: "Elvis",
      background: color.accent,
      img:w2
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData}></CardSection>
      <TransactionSection data={TransactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;

import React from 'react';
import * as H from '@/styles/HomeStyle';
import ChatApp from '@/components/ChatApp'
import Header from '@/components/Header'
import RuleCard from '@/components/RuleCard';

const Game = ({ }) => {


  return (
    <>
      <H.Home>
        <H.Tab>
          <Header />
          <H.RowBox>
            <RuleCard />
            <ChatApp />
          </H.RowBox>
        </H.Tab>
      </H.Home>
    </>
  )
}

export default Game;
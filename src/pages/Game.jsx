import React from 'react';
import * as H from '@/styles/HomeStyle';
import ChatApp from '@/components/ChatApp'
import Header from '@/components/Header'
import RuleCard from '@/components/RuleCard';
import Bookmark from '@/components/Bookmark';

const Game = ({ }) => {


  return (
    <>
      <H.Home>
        <Bookmark />
        <H.Tab>
          <Header />
          <H.RowBox>
            <ChatApp />
          </H.RowBox>
        </H.Tab>
      </H.Home>
    </>
  )
}

export default Game;
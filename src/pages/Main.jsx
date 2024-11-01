import React from 'react';
import MainHeader from '@/components/user/MainHeader'
import Login from '@/components/user/Login';
import RuleCard from '@/components/RuleCard';
import * as H from '@/styles/HomeStyle';
import * as R from '@/styles/RuleStyle';

const Main = ({ }) => {


  return (
    <>
      <H.Home>
        <H.Tab>
          <MainHeader />
          <H.RowBox>
            <Login />
            <RuleCard />
          </H.RowBox>
        </H.Tab>
      </H.Home>
    </>
  )
}

export default Main;
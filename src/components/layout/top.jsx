import React, { useEffect, useState, useCallback, useRef, Children } from 'react';
import styled, { keyframes }  from 'styled-components';

import { flex, flexAlign, flexBetween, flexJustBetween } from '../css.common'

import { Info, User } from './css'
import UserAva from '../../static/images/default-ava.png'

const Root = styled.div`
  ${flexBetween}
  margin-bottom: 25px;
`

const Top = ({ children }) => {
  const [ava, setAva] = useState(UserAva);
  // const email = '097376394@dmail.ai'
  const email = ''

  return (
    <>
      <Root className="chunks">
        <Info>
          <p>
            <strong>Principal ID:</strong>
            <span>2e2zr-ylqej-iruuu-ugkd3-bmv6e-cvceo-davpx-6lbbm-v</span>
          </p>
          {email ? (
             <p>
              <strong>NFT Domain Account:</strong>
              <span>{email}</span>
            </p>
          ) : (
            <p>
              <strong>NFT Domain Account</strong>
              <a href="" className='binding'>Binding</a>
            </p>
          )}
         
        </Info>
        <User>
          <div className="ava"><img src={ava} alt="" /></div>
          <div className="logout">
            <i></i>
            <strong>Quit</strong>
          </div>
        </User>
      </Root>
    </>
  );
}

export default Top;
  
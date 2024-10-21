import React, { useEffect, useState, useCallback, useRef } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import styled, { keyframes }  from 'styled-components';
import { observer, inject } from 'mobx-react';

import { Logo, Nav, SplitLine } from './css'
import { NavList, NavLineBeforeItem } from './utils'
import NavLogo from '../../static/images/nav-logo.png'

const Root = styled.div`
  width: 338px;
  background: #272524;
  overflow-y: auto;
`

const Header = ({ location: { pathname }, store }) => {
  const unReadList = store.common.unReadList
  const history = useHistory();
  const toPath = (path) => () => {
    history.push(path);
  }

  // useEffect(() => {

  // }, [commonStore.unReadList])

  return (
    <>
      <Root>
        <Logo>
          <img src={NavLogo} alt="" />
        </Logo>
        <Nav>
          {NavList.map(({ key, name, path }) => (
            <div key={name}>
              {NavLineBeforeItem === name ? <SplitLine></SplitLine> : null}
              <div className={path === pathname ? 'on li' : 'li'} onClick={toPath(path)}>
                <i className={key || name}></i>
                <span className='name'>{name}</span>
                <span className={unReadList[name] ? 'unread show' : 'unread'}>{unReadList[name]}</span>
              </div>
            </div>
          ))}
        </Nav>
      </Root>
    </>
  );
}
  
export default inject('store')(observer(withRouter(Header)));
  
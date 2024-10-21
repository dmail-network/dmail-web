import React, { useEffect, useState, useCallback, useRef } from 'react';
import Container from '@/components/container'
import { http, transformPrincipalId } from '../../api/index'
import { Root, Content } from './css'

import Logo from '../../static/images/login-logo.png'
import Empty from '../../static/images/empty.png'
import UserAva from '../../static/images/setting-ava.png'

const Index = () => {
    // const [domainCount, setDomainCount] = useState('')

  return (
    <Root>
        <Content>
            <div className="logo">
                <img src={Logo} alt="" />
                <p>Connecting the parallel world and the real world</p>
            </div>
            <div className="login">
                <div className="item welcome">
                    <i></i><span>WELCOME!!!</span>
                </div>
                <div className="btns">
                    <div className="item">
                        <i className='plug'></i>
                        <a>PLUG LOGIN</a>
                    </div>
                    <div className="item">
                        <i className='identity'></i>
                        <a>INTERNET IDENTITY LOGIN</a>
                    </div>
                </div>
            </div>
        </Content>
    </Root>
  );
}

export default Index;

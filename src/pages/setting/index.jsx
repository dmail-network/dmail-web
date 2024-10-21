import React, { useEffect, useState, useCallback, useRef } from 'react';
import Container from '@/components/container'
import { http, transformPrincipalId } from '../../api/index'
import { Root, Title, Account } from './css'

import EmailAva from '../../static/images/setting-email.png'
import Empty from '../../static/images/empty.png'
import UserAva from '../../static/images/setting-ava.png'



const Index = () => {
    const [domainCount, setDomainCount] = useState('')
    const [domainList, seDomainList] = useState([
        {
            email: 'isneigzw@dmail.ai',
            id: '#435435',
            img: EmailAva,
            type: 'Permanent',
            num: 1,
            useing: true,
        },
        {
            email: 'isneigzw@dmail.ai',
            id: '#435435',
            img: EmailAva,
            type: 'Permanent',
            num: 1,
            useing: false,
        }
    ])

  return (
    <Container noSearch="false">
    <Root>
        <Title>Setting</Title>
        <Account>
            <ul className="form">
                <li>
                    <div className="label">Avatar</div>
                    <div className="item ava">
                        <img src={UserAva} alt="" />
                        <a>upload avatar</a>
                    </div>
                </li>
                <li>
                    <div className="label">Principal ID</div>
                    <div className="item">32967564</div>
                </li>
                <li>
                    <div className="label">NFT Domain Account</div>
                    <div className={`item ${domainCount ? '' : 'unbound'}`}>{domainCount || 'Unbound'}</div>
                </li>
            </ul>
        </Account>
        <Account>
            {!domainList.length ? (
                <div className="domain-list">
                    <div className="label">My NFT Domain Account</div>
                    <ul>
                        {domainList.map(({ email, id, type, num, img, useing }) => (
                            <li>
                                <img src={img} alt="" />
                                <div className="user">
                                    <p>{email}</p>
                                    <p>{id}</p>
                                </div>
                                <span>{type}</span>
                                <span>{num}</span>
                                <a className={`${useing ? 'useing' : ''}`}>
                                    <i></i>
                                    <span>{useing ? 'In Use' : 'Binding'}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <ul className='form'>
                    <li>
                        <div className="label">My NFT Domain Account</div>
                        <div className="item upload-domain">
                            <div className="upload">
                                <img src={Empty} alt="" />
                                <p>Empty</p>
                            </div>
                            <div className="btn">
                                <a>Get Now</a>
                            </div>
                        </div>
                    </li>
                </ul>
            )}
        </Account>
    </Root>
    </Container>
  );
}

export default Index;

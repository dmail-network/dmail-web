import React, { useEffect, useState, useCallback, useRef } from 'react';
import Container from '@/components/container'
import SearchBar from '@/components/layout/searchBar';
import { getPosToParent } from '@/utils/index'
import { mailHeaderId, http, transformPrincipalId } from '../../api/index'
import { Root, Left, Menus, SearchActions, List, Body, Info, More, FlexWrapper, FlexBetweenWrapper, FlexAlignWrapper, FlexJustBetweenWrapper } from './css'
import { withRouter, useHistory } from 'react-router-dom';

const MenuList = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Have read',
    value: 'readed',
  },
  {
    name: 'Unread',
    value: 'unread',
  },
]

const testData = [
  {
    unread: true,
    email: 'Eee@gmail.com',
    id: 'yhv98-n097376394',
    date: '17 Feb,20:30',
    title: 'Arun S K,here is what happening on Twitter',
    desc: 'Hello! I am in the process of developing an online. magazine dedicated to everything men fashion. magazine dedicated to everything men fashion. magazine dedicated to everything men fashion',
  },
  {
    unread: false,
    email: 'Eee@gmail.com',
    id: 'yhv98-n097376394',
    date: '17 Feb,20:30',
    title: 'Arun S K,here is what happening on Twitter',
    desc: 'Hello! I am in the process of developing an online. magazine dedicated to everything men fashion. magazine dedicated to everything men fashion',
  }
]

const Index = () => {
  const [currentMenu, setCurrentMenu] = useState(MenuList[0].value);
  const [emailList, setEmailList] = useState(testData);
  const menusRef = useRef(null);
  const focusLineRef = useRef(null);

  useEffect(() => {
    if (!focusLineRef.current || !menusRef.current) {
      return;
    }
    const index = MenuList.findIndex(({ value }) => value === currentMenu)
    const currentLi = menusRef.current.querySelectorAll('li')[index]
    const left = getPosToParent(menusRef.current, currentLi)
    const width = currentLi.clientWidth
    focusLineRef.current.style = `left: ${left}px; width: ${width}px;`
  }, [currentMenu])

  useEffect(async () => {
    const res = await http(mailHeaderId, 'query_send_header_by_pid', [transformPrincipalId('6cjya-hnrph-ohcs7-pt7m4-dxzwj-zax3s-b5f2w-n472d-mulap-7jaeg-2ae'), {
      offset: window['BigInt'](0),
      // 起点
      limit: window['BigInt'](3),
      // keyword: 'test',
    }])
    console.log(res.Ok);
    if (res.Ok && ('data' in res.Ok)) {
      const { data, limit, offset, total } = res.Ok
      const list = Array.isArray(data) ? data : [];
      const emails = list.map(({ email_list }) => {
        return '';
      })
      // setEmailList()
    }
    console.log(111, res);
  }, [])

  return (
    <Container>
      <SearchBar>
        <SearchActions>
          <div className="chunk">
            <div className="checkbox"></div>
            <div className="email1"></div>
            <div className="email2"></div>
          </div>
          <div className="chunk">
            <div className="delete"></div>
          </div>
          <div className="chunk">
            <div className="collect"></div>
            <div className="report"></div>
          </div>
        </SearchActions>
      </SearchBar>
      <Root>
        <Left>
          <Menus>
            <ul ref={menusRef}>
              {MenuList.map(({ name, value }) => (
                <li className={value === currentMenu ? 'on' : ''} onClick={()=> setCurrentMenu(value)} key={value}>{name}</li>
              ))}
            </ul>
            <div className="focusLine" ref={focusLineRef}></div>
            <div className="orders">
              <span>latest</span>
              <i></i>
            </div>
          </Menus>
          <List>
            <ul>
              {emailList.map((item, index) => (
                <li className={item.unread ? "unread" : ""} key={index}>
                  <div className="chunk">
                    <FlexBetweenWrapper>
                      <FlexAlignWrapper>
                        <div className="checkbox"></div>
                        <div className="ava"></div>
                        <div>
                          <div className="ename">
                            <i></i>
                            <span>{item.email}</span>
                          </div>
                          <div className="id">{item.id}</div>
                        </div>
                      </FlexAlignWrapper>
                      <div className="actions">
                        <FlexAlignWrapper className="icons">
                          <div className='coin'></div>
                          <div className='files'></div>
                          <div className='collection'></div>
                        </FlexAlignWrapper>
                        <div className="date">{item.date}</div>
                      </div>
                    </FlexBetweenWrapper>
                    <div className="content">
                      <div className="title">{item.title}</div>
                      <div className="desc">{item.desc}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </List>
        </Left>
        <Body>
          <FlexBetweenWrapper className='actions'>
            <FlexAlignWrapper>
              <div className='reply'></div>
              <div className='share'></div>
            </FlexAlignWrapper>
            <FlexAlignWrapper>
              <div className='collection'></div>
              <div className='warn'></div>
              <div className='delete'></div>
            </FlexAlignWrapper>
          </FlexBetweenWrapper>
          <div className="title">
            <h1>Arun S K,here is what happening on Twitter</h1>
          </div>
          <Info>
            <FlexAlignWrapper className='item'>
              <div className="label">Sender:</div>
              <FlexJustBetweenWrapper className="value">
                <FlexAlignWrapper className="sender">
                  <a>Lily998@dmail.cn</a>
                  <i></i>
                </FlexAlignWrapper>
                <FlexAlignWrapper className='icons'>
                  <div className='coin'></div>
                  <div className='files'></div>
                  <div className='collection'></div>
                </FlexAlignWrapper>
              </FlexJustBetweenWrapper>
            </FlexAlignWrapper>
            <FlexWrapper className='item'>
              <div className="label">Recipient:</div>
              <div style={{ flex: '1' }}>
                <FlexJustBetweenWrapper className="value">
                  <FlexAlignWrapper className="recipient">
                    <span>32967564@dmail.cn</span>
                  </FlexAlignWrapper>
                  <div className="date">17 Feb,20:30 2021</div>
                </FlexJustBetweenWrapper>
                <div className="id">2e2zr-ylqej-iruuu-ugkd3-bmv6e-cvceo-davpx-6lbbm-vyfh4-ply3e-qae</div>
              </div>
            </FlexWrapper>
            <FlexAlignWrapper className='item'>
              <div className="label">Status:</div>
              <FlexJustBetweenWrapper className="value">
                <FlexAlignWrapper className="status failed">
                  <span>Failed to send</span>
                  <i></i>
                </FlexAlignWrapper>
              </FlexJustBetweenWrapper>
            </FlexAlignWrapper>
          </Info>
          <div className="content">
          There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real! Dream what you want to dream;go where you want to go;be what you want to be,because you have only one life and one chance to do all the things you want to do.
          May you have enough happiness to make you sweet,enough trials to make you strong,enough sorrow to keep you human,enough hope to make you happy? Always put yourself in others’shoes.If you feel that it hurts you,it probably hurts the other person, too.
          The happiest of people don’t necessarily have the best of everything;they just make the most of everything that comes along their way.Happiness lies for those who cry,those who hurt, those who have searched,and those who have tried,for only they can appreciate the importance of people
          </div>
          <More>
            {/* <div className="item">
              <FlexBetweenWrapper>
                <h2>Tokens:</h2>
                <div className="action">View in Assets</div>
              </FlexBetweenWrapper>
              <ul className="tokens">
                <li>
                  <FlexAlignWrapper>
                    <div className="ava"></div>
                    <span>ICP</span>
                  </FlexAlignWrapper>
                  <div className="price">45244.976</div>
                  <div className="status">completion</div>
                </li>
                <li>
                  <FlexAlignWrapper>
                    <div className="ava"></div>
                    <span>USDT</span>
                  </FlexAlignWrapper>
                  <div className="price">3634.976</div>
                  <div className="status">in progress</div>
                </li>
              </ul>
            </div> */}
            <div className="item">
              <FlexBetweenWrapper>
                <FlexAlignWrapper>
                  <h2>Appendix</h2>
                  <div className="desc">136KB in total</div>
                </FlexAlignWrapper>
                <div className="action">download all</div>
              </FlexBetweenWrapper>
              <ul className="appendix">
                <li>
                  <FlexAlignWrapper>
                    <div className="img"></div>
                    <span>4655789098765432</span>
                    <span>(34KB)</span>
                  </FlexAlignWrapper>
                  <a href="" className="down"></a>
                </li>
                <li>
                  <FlexAlignWrapper>
                    <div className="img"></div>
                    <span>4655789098765432</span>
                    <span>(34KB)</span>
                  </FlexAlignWrapper>
                  <a href="" className="down"></a>
                </li>
                <li>
                  <FlexAlignWrapper>
                    <div className="img"></div>
                    <span>4655789098765432</span>
                    <span>(34KB)</span>
                  </FlexAlignWrapper>
                  <a href="" className="down"></a>
                </li>
                <li>
                  <FlexAlignWrapper>
                    <div className="img"></div>
                    <span>4655789098765432</span>
                    <span>(34KB)</span>
                  </FlexAlignWrapper>
                  <a href="" className="down"></a>
                </li>
              </ul>
            </div>
          </More>
        </Body>
      </Root>
    </Container>
  );
}

export default Index;

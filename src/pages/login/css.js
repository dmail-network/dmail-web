import styled, { keyframes }  from 'styled-components';
import { 
  flex, flexAlign, flexBetween, flexJustBetween, 
  FlexWrapper, FlexAlignWrapper, FlexBetweenWrapper, FlexJustBetweenWrapper 
} from '../../components/css.common'

import Bg from '../../static/images/login-bg.jpg'
import Star from '../../static/images/star.png'
import Identity from '../../static/images/login-identity.png'
import Plug from '../../static/images/login-plug.png'


export { FlexWrapper, FlexAlignWrapper, FlexBetweenWrapper, FlexJustBetweenWrapper }

export const Root = styled.div`
    background: url(${Bg});
    background-size: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    &:before {
        content: '';
        background: url(${Star});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        left: 0;
        right: 0;
        height: 100%;
    }
`

export const Content = styled.div`
    position: absolute;
    width: 640px;
    left: 50%;
    top: 13%;
    transform: translateX(-50%);

    .logo {
        text-align: center;
        color: #fff;
        font-size: 22px;

        p {
            margin-left: -100px;
            margin-right: -100px;
            margin-top: 30px;
            line-height: 22px;
        }
    }

    .login {
        margin-top: 56px;
        background: rgba(255, 255, 255, 0.08);
        padding: 58px 140px 82px 88px;
        border-radius: 10px;

        .btns {
            margin-top: 56px;
        }

        .item {
            ${flexAlign}
            margin-bottom: 18px;

            &:last-child {
                margin-bottom: 0;
            }

            i {
                width: 64px;
                margin-right: 15px;
                background: center no-repeat;
                background-size: contain;
            }

            .plug {
                height: 47px;
                background-image: url(${Plug});
            }

            .identity {
                height: 32px;
                background-image: url(${Identity});
            }

            a, span {
                flex: 1;
                color: #fff;
                text-align: center;
            }

            span {
                line-height: 30px;
                font-size: 28px;
            }

            a {
                line-height: 48px;
                background: #FF563F;
                border-radius: 8px;
                font-size: 18px;
                cursor: pointer;

                &:hover {
                    background: #DF4631;
                }
            }
        }
    }
`
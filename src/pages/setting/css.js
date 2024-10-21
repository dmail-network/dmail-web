import styled, { keyframes }  from 'styled-components';
import { 
  flex, flexAlign, flexBetween, flexJustBetween, 
  FlexWrapper, FlexAlignWrapper, FlexBetweenWrapper, FlexJustBetweenWrapper 
} from '../../components/css.common'

import Use from '../../static/images/setting-use.png'


export { FlexWrapper, FlexAlignWrapper, FlexBetweenWrapper, FlexJustBetweenWrapper }

export const Root = styled.div`
    padding: 0 80px;
`

export const Title = styled.div`
    margin-bottom: 25px;
    font-size: 30px;
    font-weight: bold;
    color: #393431;
    text-align: center;
`

export const Account = styled.div`
    border-top: 2px solid  #EAE9E9;
    padding: 48px 60px 0;
    color: #393431;

    .form li {
        ${flex}
        margin-bottom: 50px;
        line-height: 32px;
    }

    .label {
        width: 340px;
        font-size: 22px;
        font-weight: 600;
    }

    .item {
        flex: 1;
        font-size: 20px;
        font-weight: 600;
        color: #4D4D4D;
    }
    .unbound {
        color: rgba(77, 77, 77, 0.4);
    }
    .ava {
        ${flex}
        img {
            width: 160px;
            height: 160px;
            margin-right: 28px;
        }
        a {
            height: 40px;
            line-height: 40px;
            color: #777;
            padding: 0 15px;
            background: #E6E6E6;
            border-radius: 3px;
            cursor: pointer;
        }
    }

    .upload-domain {
        width: 360px;

        .upload {
            ${flexAlign}
            flex-direction: column;
            align-items: center;
            background: #F6F6F6;
            padding: 30px;
            border-radius: 10px;
            line-height: 1;
            color: #777;
            cursor: pointer;

            img {
                width: 76px;
                height: 67px;
                margin-bottom: 15px;
            }
        }

        .btn {
            margin-top: 30px;

            a {
                display: block;
                height: 48px;
                line-height: 48px;
                background: #FF5640;
                border-radius: 5px;
                text-align: center;
                color: #fff;
                cursor: pointer;
            }
        }
    }

    .domain-list {
        font-size: 24px;
        font-weight: 600;
        color: #393431;

        .label {
            margin-bottom: 40px;
        }

        li {
            ${flexAlign}
            justify-content: space-between;
            margin-bottom: 24px;

            .user {
                p:last-child {
                    font-size: 20px;
                    color: #B3B3B3;
                }
            }

            img {
                width: 60px;
                height: 60px;
                background: #ddd;
                border-radius: 50%;
            }

            a {
                width: 120px;
                line-height: 32px;
                background: #FF5640;
                border-radius: 6px;
                font-size: 16px;
                text-align: center;
                color: #fff;
                cursor: pointer;
            }

            .useing {
                ${flexAlign}
                justify-content: center;
                background: #282524;
                
                i {
                    width: 16px;
                    height: 16px;
                    background: #fff;
                    margin-right: 10px;
                    background: url(${Use});
                    background-size: 100%;
                }
            }
        }
    }
`

import styled, { keyframes }  from 'styled-components';
import { 
  flex, flexAlign, flexBetween, flexJustBetween, 
  FlexWrapper, FlexAlignWrapper, FlexBetweenWrapper, FlexJustBetweenWrapper 
} from '../../components/css.common'

import File from '../../static/images/icon-file.png'
import Coin from '../../static/images/icon-coin.png'
import Email1 from '../../static/images/email.png'
import Email2 from '../../static/images/email2.png'
import Delete from '../../static/images/delete.png'
import Collect from '../../static/images/collect.png'
import Report from '../../static/images/report.png'

export { FlexWrapper, FlexAlignWrapper, FlexBetweenWrapper, FlexJustBetweenWrapper }

export const Root = styled.div`
    ${flex}
`

export const Left = styled.div`
    padding-top: 30px;
    width: 520px;
    border-right: 3px solid #F4F5F5;

    // @media (max-width: 1800px) {
    //     width: 400px;
    // }

    // @media (max-width: 1600px) {
    //     width: 300px;
    // }
`


export const SearchActions = styled.div`
  ${flexAlign}
  
  .chunk {
    ${flexAlign}
    border-right: 3px solid #F4F5F5;
    margin-right: 35px;

    &:last-child {
      border-right: none;
      margin-right: 0;
    }
    
    div {
      margin-right: 35px;
      cursor: pointer;
    }
  }

  .checkbox {
    width: 30px;
    height: 30px;
    margin-right: 18px;
    border: 3px solid #F4F3F3;
    border-radius: 5px;
  }

  .email1 {
    width: 27px;
    height: 20px;
    background: url(${Email1}) no-repeat;
    background-size: 100%;
  }

  .email2 {
    width: 25px;
    height: 25px;
    background: url(${Email2}) no-repeat;
    background-size: 100%;
  }

  .collect {
    width: 25px;
    height: 24px;
    background: url(${Collect}) no-repeat;
    background-size: 100%;
  }

  .delete {
    width: 22px;
    height: 25px;
    background: url(${Delete}) no-repeat;
    background-size: 100%;
  }

  .report {
    width: 27px;
    height: 24px;
    background: url(${Report}) no-repeat;
    background-size: 100%;
  }

  @media (max-width: 1800px) {
    .chunk {
      margin-right: 25px;
      
      div {
        margin-right: 25px;
      }
    }
  }
`

export const Menus = styled.div`
    ${flexBetween}
    height: 40px;
    line-height: 40px;
    padding-bottom: 20px;
    padding-right: 24px;
    border-bottom: 3px solid #F4F5F5;
    position: relative;
    font-size: 20px;

    ul {
        ${flexAlign}
    }
    
    li {
        padding: 0 8px;
        font-size: 16px;
        color: #B8B2B2;
        font-weight: bold;
        margin-right: 25px;
        font-size: 20px;
        cursor: pointer;

        &.on {
            color: #E9624B;
        }
    }

    .orders {
        ${flexAlign}
        color: #BCBCBC;
        font-weight: 500;
        cursor: pointer;

        i {
            width: 18px;
            height: 18px;
            margin-left: 8px;
            background: #ddd;
        }
    }

    .focusLine {
        position: absolute;
        top: 100%;
        left: 0;
        height: 3px;
        background: #E9624B;
        transition: all .3s ease-out;
    }

    // @media (max-width: 1800px) {
        
    // }
`

export const List = styled.div`

    li {
        margin-left: -32px;
        cursor: pointer;

        &:hover, &.on {
            background: rgba(233, 98, 75, 0.15);
        }

        .chunk {
            margin-left: 32px;
            padding: 24px 24px 20px 0;
            border-bottom: 3px solid #F4F5F5;
        }

        &:last-child {
            border-bottom: none;
        }
        
        .checkbox {
            width: 30px;
            height: 30px;
            margin-right: 18px;
            border: 3px solid #F4F3F3;
            border-radius: 5px;
        }
        .ava {
            width: 66px;
            height: 66px;
            background: rgba(254, 175, 162, 0.5);
            border-radius: 50%;
            margin-right: 18px;
        }
        .ename {
            ${flexAlign}
            color: #38302E;
            font-size: 22px;
            font-weight: 600;

            i {
                display: none;
                width: 20px;
                height: 20px;
                background: linear-gradient(180deg, #FFB76B, #FF5E5C);
                border-radius: 50%;
                margin-right: 8px;
            }
        }
        .id {
            font-weight: 600;
            color: #BCBCBC;
            font-size: 18px;
        }

        .content {
            margin-top: 25px;
            padding-left: 35px;
            font-size: 20px;
            font-weight: bold;

            .title {
                color: #38302E;
            }

            .desc {
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                margin-top: 5px;
                font-size: 18px;
                color: #B8B2B2;
            }
        }
    }

    .actions {
        .icons {
            div {
                width: 24px;
                height: 24px;
                background-color: #ddd;
                margin-right: 15px;
            }
        }
        .date {
            margin-top: 6px;
            font-weight: bold;
            color: #BCBCBC;
        }
    }

    .unread {
        .ename {
            i {
                display: inline-block;
            }
        }
        .content {
            .desc {
                color: #696260;
            }
        }
        .id {
            color: #605B59;
        }
        .actions {
            .date {
                color: #38302E;
            }
        }
    }
`

export const Body = styled.div`
    flex: 1;
    padding: 30px 10px 30px 32px;

    .actions {
        div {
            div {
                width: 60px;
                height: 60px;
                border: 3px solid #F4F3F3;
                border-radius: 5px;
                margin-right: 15px;
                box-sizing: border-box;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .title {
        margin-top: 22px;

        h1 {
            line-height: 52px;
            font-size: 48px;
            font-weight: bold;
            color: #38302E;
        }
    }

    .content {
        margin-top: 20px;
        line-height: 36px;
        font-size: 20px;
        font-weight: bold;
        color: #A59D9D;
    }
`

export const Info = styled.div`
    margin-top: 32px;
    line-height: 24px;
    font-size: 24px;
    color: #38302E;

    .item {
        ${flex}
        margin-bottom: 12px;
    }

    .label {
        margin-right: 8px;
        font-weight: bold;
    }

    .value {
        flex: 1;
    }

    .sender {
        color: #0014E4;
    }

    .id {
        margin-top: 8px;
        font-size: 16px;
        color: #A59D9D;
    }

    .icons {
        div {
            width: 24px;
            height: 24px;
            background-color: #ddd;
            margin-right: 15px;
        }
    }

    .date {
        font-size: 18px;
        font-weight: bold;
        color: #BCBCBC;
    }

    .status {
        font-size: 16px;
        line-height: 24px;

        &.failed {
            color: #E96243;
        }

        i {
            margin-left: 8px;
            width: 22px;
            height: 22px;
            background-color: #ddd;
        }
    }
`

export const More = styled.div`
    margin-top: 40px;

    .item {
        border-top: 3px solid #F4F5F5;
        margin-top: 35px;
        padding-top: 35px;
    }

    h2 {
        font-size: 18px;
        font-weight: bold;
        color: #38302E;
    }

    .desc {
        margin-left: 20px;
        font-size: 16px;
        font-weight: 500;
        color: #B8B2B2;;
    }

    .action {
        font-size: 16px;
        font-weight: 500;
        color: #FF9E8E;
    }

    ul {
        margin-top: 15px;
    }

    .tokens {
        li {
            ${flexBetween}
            padding: 0 35px 0 30px;
            height: 52px;
            border: 2px solid #F4F5F5;
            border-bottom: none;
            font-size: 18px;
            font-weight: 500;
            color: #38302E;

            &:last-child {
                border-bottom: 2px solid #F4F5F5;
            }
        }

        .ava {
            width: 35px;
            height: 35px;
            background-color: #ddd;
            margin-right: 15px;
            border-radius: 50%;
        }

        .price {
            color: #EF9F13;
        }
    }

    .appendix {
        ${flexAlign}
        flex-wrap: wrap;

        li {
            ${flexBetween}
            min-width: 40%;
            flex: 1;
            margin-right: 20px;
            margin-bottom: 12px;
            height: 40px;
            padding: 0 8px;
            border: 2px solid #F4F5F5;
            border-radius: 7px;
            font-size: 16px;
            font-weight: 500;
            color: #38302E;

            &:nth-child(2n+2) {
                margin-right: 0;
            }

            .img {
                width: 21px;
                height: 21px;
                background: #F9EBE6;
                margin-right: 8px;
                border-radius: 3px;
            }

            span:nth-child(3) {
                margin-left: 18px;
                color: #B8B2B2;
            }

            a {
                width: 18px;
                height: 18px;
                background: #ddd;
            }
        }
    }
`

export const Form = styled.div`
    padding: 30px 10px 10px;

    .item {
        ${flexAlign}
        margin-bottom: 32px;
    }

    .label {
        padding-right: 30px;
        width: 120px;
        text-align: right;
        font-size: 22px;
        font-weight: 500;
        color: #272524;
    }

    .chunk {
        flex: 1;
    }

    input {
        width: 100%;
        line-height: 32px;
        border: none;
        border-bottom: 1px solid rgba(39, 37, 36, 0.14);
        font-size: 18px;
        color: #272524;

        &::-webkit-input-placeholder {
            color: #ACAAAA;;
            font-size: 16px;
        }
    }

    .actions {
        ${flexAlign}
        justify-content: space-around;
        width: 550px;
        margin: 0 auto;

        a {
            padding: 0 25px;
            line-height: 36px;
            background: #D2D1D3;
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            border-radius: 8px;
            cursor: pointer;

            &:hover {
                background: #B7B7B7;
            }
        }

        .send {
            background: #FF563F;

            &:hover {
                background: #DF4631;
            }
        }
    }

    .static {
        & > div {
            width: 50%;
        }

        i {
            background-size: 100%;
        }

        dt {
            ${flexAlign}

            font-size: 18px;
            font-weight: 600;
            color: #8E8785;

            strong {
                margin: 0 10px 0 12px;
                font-size: 20px;
                font-weight: 600;
                color: #E9624A;
            }
        }

        dd {
            ${flexBetween}
            width: 100%;
            // width: 70%;
            margin-top: 12px;
            height: 30px;
            background: #FFF0ED;
            padding: 0 8px;

            font-size: 18px;
            color: #000000;

            p {
                ${flexAlign}
            }
        }

        .delete {
            color: #8E8785;
            cursor: pointer;
        }
    }

    .attach {
        dt {
            i {
                width: 24px;
                height: 24px;
                background-image: url(${File});
            }
        }

        dd {
            i {
                width: 17px;
                height: 17px;
                margin: 0 8px;
                background-image: url(${File});
            }
        }
    }

    .assets {
        dt {
            i {
                width: 18px;
                height: 26px;
                background-image: url(${Coin});
            }
        }

        dd {
            img {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin-right: 12px;
            }
        }
    }
`

import React, { useEffect, useState, useCallback, useRef, Children } from 'react';
import styled, { keyframes }  from 'styled-components';

import Nav from './layout/nav'
import Top from './layout/top'

import { flex, flexAlign, flexBetween, flexJustBetween } from './css.common'

const Root = styled.div`
    // min-width: 1400px;
    ${flex}
    height: 100%;
    overflow: auto;
`

const Main = styled.div`
    padding: 28px;
    flex: 1;
    overflow-y: auto;

    .main-chunk {
        padding: 0 32px 30px;
    }

    .no-search {
        border-top: none;

        .content-chunk {
            padding-top: 30px;
        }
    }
`

const Container = ({ children, noTop, ...props }) => {

    return (
        <>
        <Root>
            <Nav />
            <Main>
                {noTop ? null : <Top />}
                <div className="chunks main-chunk">
                    <div className="content-chunk">
                        {children}
                    </div>
                </div>
            </Main>
        </Root>
        </>
    );
}

export default Container;

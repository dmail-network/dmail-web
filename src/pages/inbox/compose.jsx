import React, { useEffect, useState, useCallback, useRef } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled, { keyframes }  from 'styled-components';
import Container from '@/components/container'

import { Form, FlexWrapper } from './css'
import EmailAva from '../../static/images/setting-email.png'

const richTextOptions = {
  modules: {
      // https://quilljs.com/docs/modules/toolbar/
      toolbar: [
        [{ 'header': [1, 2, false] }],
        [{ 'size': ['small', false, 'large', 'huge'] }], 
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
      ],
      history: { // History module
        delay: 2000,
        maxStack: 500,
        userOnly: true
      }
  },
  theme: "snow"
}

const QuillWrapper = styled.div`
  margin-top: 22px;
  
  .ql-toolbar.ql-snow {
    border: 1px solid #E1E0E0;
    border-radius: 5px;
    display: inline-block;
  }

  .ql-toolbar.ql-snow .ql-formats {
    &:last-child {
      margin-right: 0;
    }
  }

  .ql-container.ql-snow {
    margin-top: 8px;
    height: 320px;
    border: none;
    background: #F9F9F9;
    border-radius: 5px;
    font-size: 16px;
  }
`

const Index = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    to: '',
    id: '',
    subject: '',
    attachs: [],
    assets: '',
    content: '',
  })

  const changeFormDate = (key, value) => {
    setFormData({
        ...formData,
        ...{ [key]: value },
    })
  }

  const onChange = (key) => ev => {
    const value = typeof ev === 'string' ? ev : ev.target.value;
    changeFormDate(key, value); 
  }

  const onClose = () => {
    history.push('/inbox');
  }

  const onSend = () => {
    console.log(formData.content)
  }

  const onSave = () => {
    console.log(formData);
  }

  useEffect(() => {

  }, [])

  return (
    <Container noSearch={true}>
      <Form>
          <div className="item">
              <div className="label">To</div>
              <div className="chunk">
                  <input type="text" value={formData.to} onInput={onChange('to')} placeholder="Enter NFT Domain Account or Web2.0 email address" />
              </div>
          </div>
          <div className="item">
              <div className="label">Principal ID</div>
              <div className="chunk">
                  <input type="text" value={formData.id} onInput={onChange('id')} placeholder="The email initial contact,or the NFT Domain Account of the email above has changed,please input the ptincipal ID." />
              </div>
          </div>
          <div className="item">
              <div className="label">Subject</div>
              <div className="chunk">
                  <input type="text" value={formData.subject} onInput={onChange('subject')} placeholder="Enter the subject" />
              </div>
          </div>
          <div className="item">
            <div className="label"></div>
            <div className="chunk">
              <FlexWrapper className="static">
                <div className="attach">
                  <dl>
                    <dt>
                      <i></i><strong>Attach</strong><span>(maximum 3M)</span>
                    </dt>
                    <dd>
                      <p>
                        <strong>68.4KB</strong>
                        <i></i>
                        <span>2 attachments</span>
                      </p>
                      <span className='delete'>Delete</span>
                    </dd>
                  </dl>
                </div>
                {/* <div className="assets">
                  <dl>
                    <dt>
                      <i></i><strong>Assets</strong><span>(Dfinity assets only)</span>
                    </dt>
                    <dd>
                      <p>
                        <img src={EmailAva} alt="" />
                        <strong>68.4 ICP</strong>
                      </p>
                      <span className='delete'>Delete</span>
                    </dd>
                  </dl>
                </div> */}
              </FlexWrapper>
              <QuillWrapper>
                <ReactQuill {...richTextOptions} value={formData.content} onChange={onChange('content')}/>
              </QuillWrapper>
            </div>
          </div>
          <div className="actions">
              <a className="close" onClick={onClose}>Close</a>
              <a className="save" onClick={onSave}>Save</a>
              <a className="send" onClick={onSend}>Send</a>
          </div>
      </Form>
    </Container>
  );
}

export default Index;

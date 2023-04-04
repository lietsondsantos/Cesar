import React, { useState, useEffect } from 'react'

import { Wrapper } from './styles/pages/Home'
import { encrypt, decrypt } from './util/algorithm'

const MyApp: React.FC = () => {
  const [text, setText] = useState<string>('')
  const [encodedText, setEncodedText] = useState<string>('')
  const [options, setOptions] = useState<string>('encrypt')
  const [root, setRoot] = useState<number>(1)


  const handleChangeOption = (value: string): string => {
    return options === 'encrypt' ? encrypt(value, root) : decrypt(value, root)
  }

  useEffect(() => {
    setEncodedText(handleChangeOption(text))
  }, [text])

  return (
    <Wrapper>
      <div className='context'>
        <div className='context__leftSide'>
          <div className='leftSide__topBar'>
            <select
              name="action"
              id="action"
              className='topBar__select'
              defaultValue='encrypt'
              onChange={(e) => setOptions(e.target.value)}
            >
              <option value='encrypt'>
                Encriptar
              </option>

              <option value='decrypt'>
                Desencriptar
              </option>
            </select>

            <input 
              type="number"
              name="root"
              id="root"
              min={1}
              max={127}
              defaultValue={1}
              className='topBar__root'
              onChange={(e) => setRoot(e.target.value)}
            />
          </div>

          <textarea
            name='inputText'
            id='inputText'
            value={text}
            placeholder='Digite o texto'
            className='leftSide__textarea'
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <textarea
          name='outputText'
          id='outputText'
          value={encodedText}
          className='rightSide__textarea'
          disabled
        ></textarea>
      </div>
    </Wrapper>
  )
}

export default MyApp

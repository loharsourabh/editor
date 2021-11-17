import './Editor.css';
import CodeInput from './CodeInput.js';
import CodeOutput from './CodeOutput.js';
import {useState} from 'react';

function Editor() {
    const [codeString, setCodeString] = useState('');

    return (
        <div className='Editor'>
            <CodeInput
                codeString={codeString}
                updateCodeString={value => {setCodeString(value)}}
            />
            <CodeOutput
                codeString={codeString}
            />
        </div>
    );
}

export default Editor;
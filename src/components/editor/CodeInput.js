import './CodeInput.css';

function CodeInput({codeString, updateCodeString}) {

    return (
        <div className='CodeInput'>
            <textarea
                className='code_input'
                spellCheck='false'
                value={codeString}
                onChange={event => {updateCodeString(event.target.value)}}
            ></textarea>
        </div>
    );
}

export default CodeInput;
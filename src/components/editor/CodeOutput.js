import './CodeOutput.css';

function CodeOutput({codeString}) {
    const parser = new DOMParser();

    return (
        <div className='CodeOutput'>
            <iframe
                width='100%'
                height='100%'
                srcDoc={codeString}
            ></iframe>
        </div>
    );
}

export default CodeOutput;
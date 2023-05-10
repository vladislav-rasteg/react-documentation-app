import s from './CodeSnippet.module.css';
import { ReactComponent as CopyIcon } from './assets/icon_copy.svg';
import { ReactComponent as CopiedIcon } from './assets/icon_copied.svg';
import { useState } from 'react';

interface CodeSnippetProps {
    code: string;
}

function CodeSnippet({ code }: CodeSnippetProps): JSX.Element {
    const [isCopied, setIsCopied] = useState(false);

    function copied(){
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false)
        }, 2000);
    }

    function copyCode(event: React.MouseEvent<HTMLButtonElement>){
        var code = String(event.currentTarget.parentElement?.lastElementChild?.lastElementChild?.innerHTML).replaceAll("&amp;", '&',).replaceAll("&gt;", '>').replaceAll("&lt;", '<').replaceAll("&quot;", '"').replaceAll("&nbsp;", ' ');
        navigator.clipboard.writeText(code)
        copied();


    }

    return (
        <div className={s.codeBlock}>
            <div className={s.codeBlock_line}></div>
            <button className={isCopied ? s.button_copied : s.codeBlock_copy} onClick={copyCode}>{isCopied ? <CopiedIcon className={s.icon_copied}/> : <CopyIcon className={s.icon_copy}/>}</button>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
        
    )
}

export default CodeSnippet;



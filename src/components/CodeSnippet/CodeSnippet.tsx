import s from './CodeSnippet.module.css';
import { ReactComponent as CopyIcon } from './assets/icon_copy.svg';
import { ReactComponent as CopiedIcon } from './assets/icon_copied.svg';

interface CodeSnippetProps {
    code: any;
  }

function CodeSnippet({ code }: CodeSnippetProps): JSX.Element {

    function copyCode(event: React.MouseEvent<HTMLButtonElement>){
        var code = String(event.currentTarget.parentElement?.lastElementChild?.lastElementChild?.innerHTML).replaceAll("&amp;", '&',).replaceAll("&gt;", '>').replaceAll("&lt;", '<').replaceAll("&quot;", '"').replaceAll("&nbsp;", ' ');
        navigator.clipboard.writeText(code)
    }

    return (
        <div className={s.codeBlock}>
            <div className={s.codeBlock_line}></div>
            <button className={s.codeBlock_copy} onClick={copyCode}><CopyIcon className={s.icon_copy} /></button>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    )
}

export default CodeSnippet;


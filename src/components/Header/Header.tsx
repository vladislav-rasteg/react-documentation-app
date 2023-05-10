import s from './Header.module.css';
import Fuse from "fuse.js";
import pages from "../../components/content/search_content.json"
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as SearchIcon } from './assets/icon_search.svg';
import { useState } from 'react';

const Header = () => {

    const fuse = new Fuse(pages, {
        keys: ["page", "headers"],
      });

    const[query, setQuery] = useState('');

    const results = fuse.search(query);
    const searchResults = results.map(result => result.item)

    function search({ currentTarget = {} }){
        const {value}:any = currentTarget;
        setQuery(value)
    }

    return <header className={s.header}>
        <Logo />
        <div className={s.custom_input_search}>
            <SearchIcon />
            <input type="text" name="field-search" placeholder="Поиск по документации..." value={query} onChange={search}></input>
            <div className={searchResults.length > 0 ? s.searchResultsList : s.invisible}>
                {
                    searchResults.map(search => {
                        const { page, category, headers, link } = search;
                        return(
                            <>
                            <a className={s.searchResult} href={link}>
                                <h2>{page}</h2>
                                <h3>{category}</h3>
                            </a>
                            <div className={s.divider}></div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </header>
}

export default Header;


import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import HeadlessTippy from '@tippyjs/react/headless';
import useDebounce from '../../../hooks/useDebounce';
import { wrapper as PopperWapper } from '../../Popper';

import 'tippy.js/dist/tippy.css';
import styles from './Search.module.scss';
import {} from '../../../components/Icons';
import SearchItem from '../../../components/SearchItem/SearchItem';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as searchSrvices from '../../../services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const debouncedValue = useDebounce(searchValue, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const result = await searchSrvices.search(debouncedValue);
            console.log(result);
            setSearchResult(result);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleOnchange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    return (
        <div style={{ width: '100%', position: 'relative' }}>
            <HeadlessTippy
                interactive
                theme="custom"
                placement="bottom-start"
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs} style={{ width: '100%' }}>
                        <PopperWapper>
                            <h4 className={cx('search-title')}>Gợi ý tìm kiếm</h4>
                            {searchResult.map((result) => (
                                <SearchItem data={result} key={result._id} />
                            ))}
                        </PopperWapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        spellCheck={false}
                        onChange={handleOnchange}
                        onFocus={() => setShowResult(true)}
                        className={cx('input-search')}
                    />
                    <button className={cx('btn-primary btn', 'btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-search')} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

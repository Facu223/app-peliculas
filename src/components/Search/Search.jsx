import SearchStyles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useQuery} from '../hooks/useQuery'

const Search = () => {

    const [searchText, setSearchText] = useState("")
    const history = useHistory();
    const query = useQuery()
    const search = query.get("search")

    useEffect(() => {
        setSearchText(search || "")
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + searchText)
    }

    console.log(searchText)

  return (
    <form className={SearchStyles.form__container} onSubmit={handleSubmit}>
      <div className={SearchStyles.input__container}>
        <input value={searchText} type="text" className={SearchStyles.input__style} onChange={(e) => setSearchText(e.target.value)}/>
        <button type="submit" className={SearchStyles.button__style}>
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default Search;

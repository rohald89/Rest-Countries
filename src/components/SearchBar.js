import { useContext } from "react";
import styled from "styled-components"
import { CountriesContext } from "./context";

const SearchBarStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 18px auto 32px auto;
    width: 100%;
    max-width: 1280px;
    .inputfield {
        position: relative;
        i {
            position: absolute;
            top: 50%;
            left: 32px;
            transform: translate(-50%, -50%);
        }
    }

    input {
        /* width: 100%; */
        margin: 0 16px;
        height: 56px;
        padding: 24px 74px;
        background: var(--background-element);
        box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
        border-radius: 5px;
        border: none;
        &::placeholder {
            color: var(--white);
        }
        &:before {
            content: 'TEST';
        }
    }
    select {
        width: 90%;
        max-width: 200px;
        margin-left: 16px;
        margin-top: 40px;
        padding: 18px 24px;
        box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
        border-radius: 5px;
        border: none;
        outline: none;
        background: var(--background-element);
    }
    @media (min-width: 768px) {
        flex-direction: row;
        margin: 48px auto;
        width: 90%;
        input {
        margin: 0;
        width: 480px;
        }
        select {
            margin: 0;
        }
    }    
`;

const SearchBar = () => {
    const {setQuery, setRegion} = useContext(CountriesContext);
    return (
        <SearchBarStyles>
            <div className="inputfield">
                <i className="far fa-search"></i>
                <input type="text" placeholder="Search for a country..." onChange={(e) => setQuery(e.target.value)}/>
            </div>
            <select name="region" id="region" onChange={(e) => { setQuery(''); setRegion(e.target.value)}}>
                <option value="">Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </SearchBarStyles>
    )
}

export default SearchBar

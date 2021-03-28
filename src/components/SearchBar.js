import styled from "styled-components"

const SearchBarStyles = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 48px auto;
    max-width: 1280px;
    input {
        width: 90%;
        max-width: 480px;
        height: 56px;
        padding: 18px 74px;
        background: var(--dark-elements);
        &::placeholder {
            color: var(--white);
        }
    }
    select {
        padding: 18px 24px;
        background: var(--dark-elements);
    }`;

const SearchBar = () => {
    return (
        <SearchBarStyles>
            <input type="text" placeholder="Search for a country..."/>
            <select name="region" id="region">
                <option disabled value="Filter by Region">Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </SearchBarStyles>
    )
}

export default SearchBar

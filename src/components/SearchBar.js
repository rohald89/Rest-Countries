import styled from "styled-components"

const SearchBarStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 18px auto 32px auto;
    width: 100%;
    max-width: 1280px;
    input {
        /* width: 100%; */
        margin: 0 16px;
        height: 56px;
        padding: 24px 74px;
        background: var(--dark-elements);
        &::placeholder {
            color: var(--white);
        }
    }
    select {
        width: 90%;
        max-width: 200px;
        margin-left: 16px;
        margin-top: 40px;
        padding: 18px 24px;
        background: var(--dark-elements);
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

const SearchBar = ({setQuery, setRegion}) => {
    return (
        <SearchBarStyles>
            <input type="text" placeholder="Search for a country..." onChange={(e) => setQuery(e.target.value)}/>
            <select name="region" id="region" onChange={(e) => { setQuery(''); setRegion(e.target.value)}}>
                <option disabled selected value="Filter by Region">Filter By Region</option>
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

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CountriesContext } from "./context";

const CountryStyles = styled.div`
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    a {
        display: flex;
        width: 136px;
        height: 40px;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin-top: 80px;
        font-size: 16px;
        i {
            margin-right: 10px;
        }
    }
    .country {
        margin-top: 80px;
        display: flex;
        height: 401px;
        align-items: center;
    }
    img {
        width: 100%;
        border-radius: 5px;
        max-width: 560px;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        margin-right: 120px;
    }
    .country-details {
        font-size: 16px;
        line-height: 32px;
        width: 100%;
        h1 {
            font-size: 32px;
            line-height: 44px;
            margin-bottom: 23px;
        }
        span {
            font-weight: 600;
        }
    }
    .country-info {
        display: flex;
        justify-content: space-between;
    }
    .country-borders {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 68px;
        span {
            margin-right: 15px;
        }
        a {
            margin: 5px;
            width: 96px;
            box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
            border-radius: 2px;
            background: var(--background-element);
        }
    }
`;

const Country = () => {
    const {id} = useParams();
    const {country, setCountry, getNameFromCode} = useContext(CountriesContext);
    // const {name, flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages} = countries[id];
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function dataFetching() {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${id}`);
            const data = await response.json();
            setCountry(data[0]);
            setLoading(false);
        }
        dataFetching();
    }, [id]);
    
    return (
        <div>
            {
                loading ? <h1>Loading...</h1> 
                : 
                <CountryStyles>
                    <Link to="/"><i className="far fa-long-arrow-left"></i>Back</Link>
                    <div className="country">
                        <img src={country.flag} alt={`Flag of ${country.name}`}/>
                        <div className="country-details">
                            <h1>{country.name}</h1>
                            <div className="country-info">
                                <div>
                                    <p><span>Native Name: </span>{country.nativeName}</p>
                                    <p><span>Population: </span>{new Intl.NumberFormat().format(country.population)}</p>
                                    <p><span>Region: </span>{country.region}</p>
                                    <p><span>Subregion: </span>{country.subregion}</p>
                                    <p><span>Capital: </span>{country.capital}</p>
                                </div>
                                <div>
                                    <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                                    <p><span>Currencies: </span>{country.currencies.map(currency => currency.name).join(', ')}</p>
                                    <p><span>Languages: </span>{country.languages.map(language => language.name).join(', ')}</p>
                                </div>
                            </div>
                            <div className="country-borders">
                                <p><span>Border Countries:</span></p>
                                {
                                    country.borders.map(border => <Link to={`/${getNameFromCode(border)}`} key={border}>{getNameFromCode(border)}</Link>)
                                }
                            </div>
                        </div>
                    </div>
                </CountryStyles>
            }
        </div>
    )
}

export default Country

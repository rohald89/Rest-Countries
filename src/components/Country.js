import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";

const Country = () => {
    const {id} = useParams();
    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let url = `https://restcountries.eu/rest/v2/name/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
        .then(setLoading(false));
    }, [id]);
    
    return (
        <div>
            {
                loading ? 
                <h1>Fetching data</h1>
                : <div className="container">
                    <Link to="/">Back</Link>
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
                                    <p><span>Currencies: </span>{country.currencies.filter(currency => currency.name).join(', ')}</p>
                                    <p><span>Languages: </span>{country.languages.forEach(language => language.name)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Country

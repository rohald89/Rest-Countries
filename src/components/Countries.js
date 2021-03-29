import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CountriesContext } from './context';

const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  width: 90%;
  max-width: 1281px;
  grid-template-columns: repeat(auto-fit, 264px);
  align-items: center;
  justify-content: center;
  gap: 75px;
`;

const CountryCard = styled.div`
  width: 264px;
  height: 336px;
  background: var(--background-element);
  color: var(--text);
  img {
  aspect-ratio: 16 / 9.697;
  width: 100%;
  object-fit: cover;
}
.country__details {
  padding: 24px;
  h2 {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 16px;
  }
  p {
    span{
      font-weight: 600;
      line-height: 16px;
    }
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}

`;

const Countries = () => {

  const {countries} = useContext(CountriesContext);
  return (
    <Grid className="grid">
      { countries.length ? 
        countries.map(country => {
        const { name, capital, flag, population, region, numericCode } = country;
        return (
          <CountryCard className="country" key={numericCode}>
            <Link to={`/${name}`}>
              <img src={flag} alt={name} />
            </Link>
            <div className="country__details">
              <h2>{name}</h2>
              <p><span>Population:</span> {new Intl.NumberFormat().format(population)}</p>
              <p><span>Region:</span> {region}</p>
              <p><span>Capital:</span> {capital}</p>
            </div>
          </CountryCard>
        )
      }) :
      'Sorry no results found'
    }
    </Grid>
  );
}

export default Countries;
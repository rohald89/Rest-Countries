import {useEffect, useContext} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { CountriesContext } from './components/context';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Countries from "./components/Countries";
import Country from './components/Country';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${props => props.theme.mode === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'};
    --background-element: ${props => props.theme.mode === 'light' ? '#fff' : 'hsl(209, 23%, 22%)' };
    --text: ${props => props.theme.mode === 'light' ? 'hsl(200, 15%, 8%)' : '#fff'}
  };
`;

const App = () => {
  const {theme, query, region, setCountries} = useContext(CountriesContext);

  useEffect(() => {
    let url = 'https://restcountries.eu/rest/v2/';
    if(query === '' && region === '') {
      url = url + 'all';
    } else if (query !== '') {
      url = url + `name/${query}`;
    } else {
      url = url + `region/${region}`;
    }
    fetch(url)
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [query, region])

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Router>
          <Route path='/' exact>
            <SearchBar/>
            <Countries/>
          </Route>
          <Route path='/:id'>
            <Country />
          </Route>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from 'react';

export const CountriesContext = React.createContext();

export const Provider = (props) => {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState({ mode: 'light' });
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

//   const changeTheme = () => () => theme.mode === 'light' ? setTheme({ mode: 'dark'}) : setTheme({ mode: 'light' });

//   const handleScoreChange = (index, delta) => {
//     setPlayers(prevState => {
//       const updatedPlayers = [ ...prevState ];
//       const updatedPlayer = { ...updatedPlayers[index] };

//       updatedPlayer.score += delta;
//       updatedPlayers[index] = updatedPlayer;

//       return updatedPlayers;
//     });
//   };

//   const handleAddPlayer = (name) =>  {
//     setPlayers(prevState => {
//       return [
//         ...prevState, 
//         {
//           name,
//           score: 0,
//           id: id += 1
//         }
//       ]
//     });    
//   };

//   const handleRemovePlayer = (id) => { 
//     setPlayers( prevState => prevState.filter(p => p.id !== id) );
//   };

  return (
    <CountriesContext.Provider value={{ 
      countries,
      setCountries,
      theme,
      setTheme,
      query,
      setQuery,
      region,
      setRegion,
    //   actions: {
    //     changeScore: handleScoreChange,
    //     addPlayer: handleAddPlayer,
    //     removePlayer: handleRemovePlayer
    //   }
    }}>
      { props.children }
    </CountriesContext.Provider>
  );
};
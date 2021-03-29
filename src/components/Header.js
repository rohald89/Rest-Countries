import { useContext } from "react";
import styled from "styled-components"
import { CountriesContext } from "./context";

const HeaderStyles = styled.header`
background: var(--background-element);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
width: 100%;
.header-content{
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 80px;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    h1 {
        font-size: 14px;
        line-height: 20px;
        @media (min-width: 768px) {
            font-size: 24px;
            line-height: 32.74px;
        }
    }
    .fa-moon:before {
        margin: 10px;
    }
    i {
        cursor: pointer;
    }
}
`;

const Header = () => {
    const {theme, changeTheme} = useContext(CountriesContext);
    return (
        <HeaderStyles className="header">
            <div className="header-content">
                <h1>Where in the world?</h1>
                <i 
                onClick={changeTheme}
                className={ theme.mode === 'light' ? "fal fa-moon" : "fas fa-moon"}>
                    Dark Mode
                </i>
            </div>
        </HeaderStyles>
    )
}

export default Header

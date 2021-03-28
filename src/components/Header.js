import styled from "styled-components"

const HeaderStyles = styled.header`

background: var(--dark-elements);
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
}
`;

const Header = () => {
    return (
        <HeaderStyles className="header">
            <div className="header-content">
                <h1>Where in the world?</h1>
                <h2>dark mode toggle</h2>
            </div>
        </HeaderStyles>
    )
}

export default Header

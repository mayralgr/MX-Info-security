import styled from 'styled-components';
const SidebarLink = styled.div`
    background-color: ${({ active }) =>
        active
            ? '#8A7090'
            : '#89A7A7'}; //Conditional styling the background color
    display: block;
    cursor: pointer;
    color: black;
    padding: 16px;
    text-decoration: none;
    &:hover:not(.active) {
        color: white;
    }
    @media (max-width: 400px) {
        font-size: 2vh;
        margin: 0;
        padding-left: 0;
        padding-right: 0;
    }
`;
export default SidebarLink;
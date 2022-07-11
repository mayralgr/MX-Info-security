import styled from 'styled-components';
const SidebarWrapper = styled.div`
    padding-left: ${({ open }) => !open ? '10%' : '25%'}; //Conditional padding left
    width: 20%;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
`;

export default SidebarWrapper;
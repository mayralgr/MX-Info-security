import styled from "styled-components";
const DelitoCardWrapper = styled.div`
  width: ${({ open }) => (open ? "60%" : "75%")};
  float: right;
`;
export default DelitoCardWrapper;

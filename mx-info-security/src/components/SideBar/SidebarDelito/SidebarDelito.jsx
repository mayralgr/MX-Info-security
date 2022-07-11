import PropTypes from 'prop-types';
import SidebarLink from '../Styles/SidebarLink.styled';
const SideBarDelito = ({ handleClick, delito, active }) => {
    return (
        <SidebarLink
            active = {active}
            id={delito.id}
            key={delito.id + 'inner'}
            onClick={handleClick}>
            {delito?.name}
        </SidebarLink>
    );
};

SideBarDelito.propTypes = {
    category: PropTypes.object.isRequired,
};

export default SideBarDelito;
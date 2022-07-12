import PropTypes from 'prop-types';
import SidebarWrapper from './Styles/SidebarWrapper.styled';
import SideBarDelito from './SidebarDelito/SidebarDelito';
import { useMenu } from '../../contexts/MenuContext';

const Sidebar = ({
    delitos,
    handleClick,
    currentDelitoInfo
}) => {
    const {state} = useMenu();
    return (
        <SidebarWrapper open={state.open} >
            {delitos?.map((delito) => {
                return (
                    <SideBarDelito
                        active={currentDelitoInfo.id === delito.id}
                        key={delito.id}
                        handleClick={handleClick}
                        delito={delito}
                    />
                );
            })}
        </SidebarWrapper>
    );
};

Sidebar.propTypes = {
    delitos: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
    currentDelitoInfo: PropTypes.object.isRequired
};
export default Sidebar;
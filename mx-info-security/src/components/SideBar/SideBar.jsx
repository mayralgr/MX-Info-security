import PropTypes from 'prop-types';
import SidebarWrapper from './Styles/SidebarWrapper.styled';
import SideBarDelito from './SidebarDelito/SidebarDelito';
import { useMenu } from '../../contexts/MenuContext';

const Sidebar = ({
    delitos,
    handleClick
}) => {
    const {state} = useMenu();
    return (
        <SidebarWrapper open={state.open} >
            {delitos?.map((delito) => {
                return (
                    <SideBarDelito
                        key={delito.id}
                        handleCategoryClick={handleClick}
                        delito={delito}
                    />
                );
            })}
        </SidebarWrapper>
    );
};

Sidebar.propTypes = {
    categories: PropTypes.object.isRequired,
};
export default Sidebar;
import PropTypes from 'prop-types';
import SidebarWrapper from './Styles/SidebarWrapper.styled';
import SideBarDelito from './SidebarDelito/SidebarDelito';

const Sidebar = ({
    delitos,
    handleClick
}) => {
    return (
        <SidebarWrapper open={true} >
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
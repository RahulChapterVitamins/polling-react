import PropTypes from 'prop-types';
import './sidebar-button.css';

const SideBarButton = ({ buttonText }) => {
  return (
    <button className="sidebar-button">{buttonText}</button>
  );
};


SideBarButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default SideBarButton;

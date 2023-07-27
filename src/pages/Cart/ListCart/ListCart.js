import PropTypes from 'prop-types';
function ListCart({ children }) {
    return (
        <>
            <nav>{children}</nav>
        </>
    );
}
ListCart.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ListCart;

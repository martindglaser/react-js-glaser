import Logo from '../assets/img/logo.png';
const logoStyle = {
    height: 40,
}


const CartWidget = () => {
    return (
        <img style={logoStyle} src={Logo} />
    );
}

export default CartWidget;
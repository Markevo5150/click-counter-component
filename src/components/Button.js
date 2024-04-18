import '../styles/Button.css';
function Button ({ text, isClickButton, clickManage }){
    return (
        <button 
            className={ isClickButton ? 'clickPlus': 'reboot' }
            onClick={clickManage}>
            {text}
        </button>
    );
}
export default Button;

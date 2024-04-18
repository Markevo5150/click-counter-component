import '../styles/Counter.css';
function Counter ({ clickNum }){
    return (
        <div className='counter'>
            {clickNum}
        </div>
    );
}
export default Counter;
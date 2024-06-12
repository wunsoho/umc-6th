import {useNavigate} from 'react-router-dom';
import * as A from './NotFound.style.jsx';

function NotFound () {
    const Navigate = useNavigate();
    const onClick = () => {
        Navigate(`/`);
    }
    return(
        <A.notfound>
            <h1>Oops!</h1>
            <div>예상치 못한 에러가 발생했습니다 : ~~</div>
            <div className = "d1">Not found</div>
            <button className = "b1" onClick={onClick}>메인으로 이동하기</button>
        </A.notfound>
    )
}

export default NotFound;

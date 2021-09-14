import React  from 'react';
import {useRecoilState} from 'recoil';
import {clickAccount} from '../store/clickAtom';

const Input = () => {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useRecoilState<number>(clickAccount);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br/>
      <button onClick={() => setCount(0)}>
        to 0
      </button>
    </div>
  );
}
export default Input
import React, { useState } from 'react';

function Counter() {
    // OK : const [count, setCount] = useState<number>(0);
    // OK : const [count, setCount] = useState(0);
    // useState는 알아서 type을 유추하기 때문에 타입을 명시해줘도 되고, 안해줘도 된다.
    // 그럼 어떨때 타입을 명시해주어야 하는가? : nullable 한 값이 들어올 때
    const [count, setCount] = useState(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter;
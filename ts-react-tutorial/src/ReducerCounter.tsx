import React, { useState, useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; // 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.

function reducer(state: number, action: Action) {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function ReducerCounter() {
    /*
        - useReducer
        const [state, dispatch] = useReducer(reducer, initialState);
        state : 우리가 '앞으로' 컴포넌트에서 사용할 수 있는 상태
        dispatch : 액션을 발생시키는 함수 - dispatch( { type: 'INCREMENT' });
        useReducer의 첫번째 파라미터 : reducer 함수
        useReducer의 두번째 파라미터 : 초기 상태(state)값
    */
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch( {type: 'INCREASE'} );
    const onDecrease = () => dispatch( {type: 'DECREASE'} );

    return (
        <div>
        <h1>{count}</h1>
        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
        </div>
    );
}

export default ReducerCounter;
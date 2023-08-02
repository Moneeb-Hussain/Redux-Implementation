import React, { useState } from 'react';
import styles from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementbyamount } from './counterSlice';


export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    const addbyamount=(incrementAmount)=>{
    dispatch((incrementbyamount(Number(incrementAmount))))
    }
    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement(incrementAmount))}
                >
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() => addbyamount(incrementAmount)}
                >
                    Add Amount
                </button>
            </div>
        </div>
    );
}

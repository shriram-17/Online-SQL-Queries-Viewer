import { Component, createSignal } from "solid-js";

const Helloworld: Component = () => {
    const [count, setCount] = createSignal<number>(0);
    
    const increment = () => {setCount((count) => count + 1)}  
    
    return (
        <div>
            <p class="font-bold font-mono">
                {count()}
            </p>

            <button onClick={increment}>
            +
            </button>
        </div>
    );
};

export default Helloworld;
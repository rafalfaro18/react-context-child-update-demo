import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext()

const MyComponent = () => {
    const { count, increment } = useContext(MyContext)
    
    return (
        <div onClick={increment}>price: {count}</div>
	)
}

const App = () => {
    const [count, updateCount] = useState(0)
    function increment() {
        updateCount(count + 1)
    }
    
    return (
	    <MyContext.Provider value={{ count, increment }}>
    		<div>
    			<MyComponent />
		    	<MyComponent />
    		</div>
    	</MyContext.Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
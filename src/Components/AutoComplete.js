import {useState,useEffect,useRef} from 'react';


const AutoComplete = ({options}) =>{
    const [value,setValue] = useState("");
    const [showSuggestions,setShowSuggestions] = useState(false);
    const suggestions = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase()));

    const autocompleteRef = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
                setShowSuggestions(false)
            }
        };
        document.addEventListener("onkeyup", handleClick);
        return () => {
            document.removeEventListener("onkeyup", handleClick)
        }
    }, [])

    const handleChange =(e)=>{
        setValue(e.target.value)
    }

    const handleSuggestionClick = (suggetion) => {
        setValue(suggetion);
        setShowSuggestions(false);
    }

    return (
        <div className="autocomplete" ref={autocompleteRef}>
            <input 
                value ={value}
                placeholder='Search'
                onChange={handleChange}
                onFocus={()=> setShowSuggestions(true)}
            />
            {showSuggestions && (
                <ul className='suggestions'>
                    {suggestions.map(suggestion =>(
                        <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>{suggestion}</li>
                    ))}
                </ul>
            )}
        </div>
    )
};

export default AutoComplete;
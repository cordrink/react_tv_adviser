import s from './style.module.css';
import {Search as SearchIcon} from "react-bootstrap-icons";

function SearchBar({onSubmit}) {
    const submit = e => {
        if (e.key === 'Enter' && e.target.value.trim() !== "") {
            console.log('***',e.target.value )
            onSubmit(e.target.value)
        }
    }

    return (
        <>
            <SearchIcon size={18} className={s.icon}/>
            <input
                onKeyUp={submit}
                type="text"
                placeholder="Cherche un tv show que tu pourrais apprecier"
                className={s.input}
            />
        </>
    );
}

export default SearchBar;
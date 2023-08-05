import Styles from './Search.module.css';
const SearchList = ({ values, setSearchClick }) => {
    return(
        <div className={Styles.search}>{
        values.map((item, index)=>{
            return <div key = {index} onClick={() =>setSearchClick(item["&id"])}>{item["&id"]}</div>
        })
    }</div>)
  }
  
  export default SearchList
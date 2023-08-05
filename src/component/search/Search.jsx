import { useEffect, useState } from 'react'
import SearchList from './SearchList'

const Search = ({ value, onChange, orders,orderTimeStamp, setSelectedOrderDetails, setSelectedOrderTimeStamps }) => {
  const [searchClick, setSearchClick] = useState("");
  const [filtereOrders, setFiltereOrders] = useState([]);

  useEffect(()=>{
    const data = orders.filter(order => order["&id"] === searchClick);
    const time = orderTimeStamp.filter(order => order["&id"] === searchClick);
    data[0] && setSelectedOrderDetails(data[0].executionDetails)
    time[0] && setSelectedOrderTimeStamps(time[0].timestamps);
  },[searchClick])

  useEffect(()=>{
    setFiltereOrders(orders.filter(order => order["&id"].toUpperCase().includes(value.toUpperCase()) && value.length));
  },[value])

  return (
  <div>
    <input type="text" value={value} onChange={onChange} />
    <SearchList values = {filtereOrders} setSearchClick={setSearchClick}/>
  </div>)
}

export default Search

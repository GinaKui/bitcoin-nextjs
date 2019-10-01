/**
 * Display bitcoin price 
 */
const Prices = props => {
  const [currency, setCurrency] = React.useState('USD');
  const { description, code, rate } = props.bpi[currency];
  
  return (
    <div className="Prices">
      <ul className="list-group">
        <li className="list-group-item">
          Current Bitcoin rate for {description}:
          &nbsp;<strong>{rate}</strong>
          &nbsp;<span className="badge badge-primary">{code}</span>
        </li>
      </ul>
      <hr />
      <select className="form-control" onChange={e => setCurrency(e.target.value)}>   
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
}

export default Prices;
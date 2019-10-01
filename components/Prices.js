/**
 * Display bitcoin price
 * expect bpi: { USD : { description, code, rate } } 
 */
const Prices = props => {
  const [currency, setCurrency] = React.useState('USD');
  const { description, code, rate } = props.bpi[currency];

  const handleChange = evt => {
    setCurrency(evt.target.value);
  };
  
  return (
    <div className="Prices">
      <ul className="list-group">
        <li className="list-group-item">
          Current Bitcoin rate for {description}:&nbsp;
          <strong>{rate}</strong>&nbsp;
          <span className="badge badge-info">{code}</span>
        </li>
      </ul>
      <hr />
      <select className="form-control" onChange={handleChange} value={currency}>   
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

Prices.defaultProps = {
  bpi: {
    'USD': {},
    'GBP': {},
    'EUR': {}
  }
};

export default Prices;
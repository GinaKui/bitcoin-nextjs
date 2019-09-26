/*
*  this Display the bitcoin price
*/
class Prices extends React.Component {
  state = {
    currency: 'EUR'
  }

  render() {
    const { description, code, rate } = this.props.bpi[this.state.currency];  
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {description}
            : <span className="badge badge-primary">{code}</span>
            <strong>{rate}</strong>
          </li>
        </ul>
        <select className="form-control" onChange={e => this.setState({currency: e.target.value})}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
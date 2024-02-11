import './index.css'

const CryptocurrencyItem = props => {
  const {data} = props
  const {currencyName, euroValue, currencyLogo, usdValue} = data
  return (
    <div className="cryptocurrency-item-each-list">
      <div className="cryptocurrency-type">
        <img
          src={currencyLogo}
          className="cryptocurrency-list-image"
          alt={currencyName}
        />
        <p className="cryptocurrency-list-type"> {currencyName} </p>
      </div>
      <div className="cryptocurrency-money-type">
        <p className="cryptocurrency-list-usd"> {usdValue} </p>
        <p className="cryptocurrency-list-euro"> {euroValue} </p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem

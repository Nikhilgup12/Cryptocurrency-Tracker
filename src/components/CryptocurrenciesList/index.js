import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrencyData()
  }

  getCryptoCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedata = data.map(eachCrypto => ({
      id: eachCrypto.id,
      currencyName: eachCrypto.currency_name,
      usdValue: eachCrypto.usd_value,
      euroValue: eachCrypto.euro_value,
      currencyLogo: eachCrypto.currency_logo,
    }))
    this.setState({cryptocurrencyData: updatedata, isLoading: false})
  }

  render() {
    const {cryptocurrencyData, isLoading} = this.state
    return (
      <div data-testid="loader">
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          <div className="CryptocurrenciesList-list-container">
            <h1 className="Cryptocurrency-heading"> Cryptocurrency Tracker </h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                className="cryptocurrency-image"
                alt="cryptocurrency"
              />
            </div>

            <div className="cryptocurrency-item-container">
              <div className="cryptocurrency-item-list">
                <div className="cryptocurrency-type">
                  <p className="cryptocurrency-coin"> coin </p>
                  <p className="cryptocurrency"> Type </p>
                </div>
                <div className="cryptocurrency-money-type">
                  <p className="cryptocurrency-usd"> USD </p>
                  <p className="cryptocurrency-euro"> EURO </p>
                </div>
              </div>
              {cryptocurrencyData.map(each => (
                <CryptocurrencyItem data={each} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList

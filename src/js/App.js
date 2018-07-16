import React from 'react';
import image from '../images/cash-calculator.svg';

import data from './data/Data';
import SelectCurrency from './components/SelectCurrency';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAVal: data.currencies[0].sellRate,
      currencyBVal: data.currencies[1].sellRate
    };
  }

  onSelectCurrency = code => {
    //console.log(code);
    const { currencies } = this.state;
    const currency = currencies.filter(currency => currency.code == code)[0];
    this.setState({
      currencyB: currency
    });
  };

  render() {
    const { currencies, currencyA, currencyAVal, currencyB, currencyBVal } = this.state;
    return (
      <div>
        <header>
          <img src={image} />
          <h1>Currency Converter</h1>
        </header>
        <div className="content">
          <div className="row row-select-currency">
            <div className="col-md-6 col-md-offset-3">
              <h2>Select Currency</h2>
              <p>
                {
                  //Select currency
                }
                <SelectCurrency currencies={currencies} onSelectCurrency={this.onSelectCurrency} />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 currency-from-input">
              <h3 className={`currency-flag ${currencyA.code}`}>${currencyA.name}</h3>
              {
                //Currency A input
              }
              <div className="input-group">
                <span className="input-group-addon">${currencyA.sign}</span>
                <input
                  type="number"
                  defaultValue={0}
                  className="form-control"
                  aria-describedby="basic-addon2"
                  step="1"
                  pattern="\d\.\d{2}"
                />
                <span className="input-group-addon" id="basic-addon2">
                  ${currencyA.code}
                </span>
              </div>
            </div>
            <div className="col-sm-6 currency-to-input">
              <h3 className={`currency-flag ${currencyB.code}`}>{currencyB.name}</h3>
              {
                //Currency B input
              }
              <div className="input-group">
                <span className="input-group-addon">${currencyB.sign}</span>
                <input
                  type="number"
                  defaultValue={0}
                  className="form-control"
                  aria-describedby="basic-addon3"
                  step="1"
                  pattern="\d\.\d{2}"
                />
                <span className="input-group-addon" id="basic-addon3">
                  {currencyB.code}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {
                //Update to currently selected currency
              }
              <p>
                Exchange Rate
                {`${currencyA.sign} ${currencyA.sellRate} ${currencyA.code} 
              = ${currencyB.sign} ${currencyB.sellRate} ${currencyB.code}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

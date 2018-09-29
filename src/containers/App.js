import React, { Component, Fragment } from 'react';
import CalculatorBody from '../components/CalculatorBody/CalculatorBody';
import LcdArea from '../components/LcdArea/LcdArea';
import KeyboardArea from '../components/KeyboardArea/KeyboardArea';
import Button from '../components/Button/Button';
import Row from '../components/Row/Row';

const obj = {
  width: '23%',
  fontFamily: '"Quantico", sans-serif',
  fontWeight: '700',
  fontSize: '1.3em'
}

const obj2 = {
  width: '48.7%',
  fontFamily: '"Quantico", sans-serif',
  fontWeight: '700',
  fontSize: '1.3em'
}

const obj3 = {
  width: '23%',
  height: '38.5%',
  position: 'absolute',
  bottom: '0',
  right: '0',
  fontFamily: '"Quantico", sans-serif',
  fontWeight: '700',
  fontSize: '1.3em'
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      calculation: '',
      value: '0',
      solution: false,
      continue: false,
      limit: 'Data Limit'
    }
  }

  resetValueHandle = () => this.setState({ value: '0', calculation: '', solution: false, continue: false })

  decimalHandle = () => {
    this.setState((state) => {
      const regex = /^[^.]*$/;
      return regex.test(state.value) ? { value: state.value + ".", calculation: state.calculation + "." } : null
    })
  }

  renderNumsHandle = (event) => {
    const numValue = event.target.value;
    const regex = /^[0-9]/g;
    this.setState((state) => {
    return regex.test(state.value) && state.value !== '0' && !(state.solution) ? { value: state.value + numValue, calculation: state.calculation + numValue } : 
    { value: numValue, calculation: numValue === '0' && state.calculation === '' ? '' : state.solution ? numValue : state.calculation.replace(/\0?0+$/, '') + numValue }
  }) 
  }

  renderSymbolsHandle = (event) => {
    const symbol = event.target.value;
    const regex = /[+-/*]+$/
    this.setState((state) => {
      return !(regex.test(state.calculation)) ? { calculation: state.continue ? state.value + symbol : state.calculation + symbol, value: symbol, solution: false } : 
      { calculation: state.calculation.replace(regex, symbol), value: symbol }
    })
  }

  renderResultHandle = (event) => {
    const equalSymbol = event.target.value;
    this.setState((state) => {
      const result = state.calculation.length === 0 ? equalSymbol + "NaN" : 
      state.calculation.length === 1 || !(/[+-|/|*]/.test(state.calculation)) ? state.calculation + equalSymbol + state.calculation : parseFloat(eval(state.calculation).toFixed(4).toString());
      return { value: result, calculation: state.calculation, solution: true, continue: true }
    })
  }

  render() {

    { this.state.value.length > 14 ? setTimeout(() => this.setState({ limit: this.state.value.substring(0, 14) }), 2500) : null }

    return (
      <Fragment>
        <CalculatorBody>
          <LcdArea value={this.state.value} message={this.state.limit} calculation={this.state.calculation} />
          <KeyboardArea>
            <Row classes="w-100 flex justify-between relative">
              <Button id="clear" value="AC" style={obj2} clicked={this.resetValueHandle} />
              <Button id="divide" value="/" style={obj} clicked={this.renderSymbolsHandle} />
              <Button id="multiply" value="*" style={obj} clicked={this.renderSymbolsHandle} />
            </Row>
            <Row classes="w-100 flex justify-between relative">
              <Button id="seven" value="7" style={obj} clicked={this.renderNumsHandle} />
              <Button id="eight" value="8" style={obj} clicked={this.renderNumsHandle} />
              <Button id="nine" value="9" style={obj} clicked={this.renderNumsHandle} />
              <Button id="subtract" value="-" style={obj} clicked={this.renderSymbolsHandle} />
            </Row>
            <Row classes="w-100 flex justify-between relative">
              <Button id="four" value="4" style={obj} clicked={this.renderNumsHandle} />
              <Button id="five" value="5" style={obj} clicked={this.renderNumsHandle} />
              <Button id="six" value="6" style={obj} clicked={this.renderNumsHandle} />
              <Button id="add" value="+" style={obj} clicked={this.renderSymbolsHandle} />
            </Row>
            <Row classes="w-100 flex justify-between relative">
              <Button id="one" value="1" style={obj} clicked={this.renderNumsHandle} />
              <Button id="two" value="2" style={obj} clicked={this.renderNumsHandle} />
              <Button id="three" value="3" style={obj} clicked={this.renderNumsHandle} />
              <div style={obj}></div>
            </Row>
            <Row classes="w-100 flex justify-between relative">
              <Button id="zero" value="0" style={obj2} clicked={this.renderNumsHandle} />
              <Button id="decimal" value="." style={obj} clicked={this.decimalHandle} />
              <div style={obj}></div>
            </Row>
            <Button style={obj3} id="equals" value="=" clicked={this.renderResultHandle} />
          </KeyboardArea>
        </CalculatorBody>
      </Fragment>
    );
  }
}

export default App;

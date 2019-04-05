import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';
import './css/Home.css';



const suggestions = [
  { label: 'AC' },
  { label: 'AL' },
  { label: 'AP' },
  { label: 'AM' },
  { label: 'BA' },
  { label: 'CE' },
  { label: 'DF' },
  { label: 'ES' },
  { label: 'GO' },
  { label: 'MA' },
  { label: 'MT' },
  { label: 'MS' },
  { label: 'MG' },
  { label: 'PA' },
  { label: 'PB' },
  { label: 'PR' },
  { label: 'PE' },
  { label: 'PI' },
  { label: 'RR' },
  { label: 'RO' },
  { label: 'RJ' },
  { label: 'RN' },
  { label: 'RS' },
  { label: 'SC' },
  { label: 'SP' },
  { label: 'SE' },
  { label: 'TO' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

class Home extends Component {
  constructor() {
    super();
    this.state = {
      single: 'SP'
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchAds = this.searchAds.bind(this);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  searchAds = () => {
    this.props.updateAds(this.state.single);
  }

  render() {
    console.log(this.state);
    return (
      <div className="home">
        <div className='texts'>

          <div className='margin-top-bottom-20 bg-white seletor'>
          <div className='margin-top-bottom-20 texto'>
            <div>
              <h1 style={{"font-size": "24px"}}>NOVOS SERVIÇOS</h1>
              <h2 style={{"font-size": "23px"}}>PARA NOVAS NECESSIDADES</h2>
            </div>
          </div>


            <h5 className='text-center' style={{"font-family": 'Lora'}}>Selecione um Estado</h5>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select" value={this.state.single}
                name="single"
                onChange={e => this.handleChange(e)} >
                {suggestions.map(option => (
                  <option>{option.value}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <div className="text-center">
              <Link to={`/itens?estado=${this.state.single}`}>
                <Button type='submit' className='bg-dark'>Pesquisar</Button>
              </Link>
            </div>
          </div>

        </div >
      </div >
    );
  }
}

export default Home;
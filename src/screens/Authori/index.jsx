import { Col, Form, Row, Button } from 'react-bootstrap';
import { fetchCustom } from '../../utils/fetch';
import { useContext, useState } from 'react';
import { APIS } from '../../constans';
import queryString from 'query-string';
import Register from './Register';
import Login from './Login';
import { AppContext } from '../../hooks/useContext';

const Author = () => {
  return (
    <div >
      <Login />
    </div>
  );
};

export default Author;

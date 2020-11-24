import React, { useState} from 'react';
import Header from '../Header/Header';
import './Login.css';
import frontlogo from '../../images/frontlogo.png';
import {LoginUser} from '../../redux/actions/loginActions';
import { useDispatch } from 'react-redux';


export default function Login(){
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({email: "", password:""})

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(
      formData =>  ({ ...formData, [e.target.name]: e.target.value})
    )
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    setSubmitting(false);
    console.log(formData);
    console.log('Here')
    dispatch(LoginUser(formData));
    console.log('Past there')

  }
  return (
    <div className="login-wrapper">
      <Header />
      <h4>Log In</h4>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={onChange}/>
        <input name="password" type="password" placeholder="Password" onChange={onChange}/>
        <button type="submit">Sign In</button>
      </form>
      <div className="login-bottom">
      <img src={frontlogo} alt="logo" />
      <p>All Rights Reserved &copy; IBU Clinic</p>
      </div>
    </div>
  );
}

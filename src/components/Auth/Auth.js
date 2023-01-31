import { NavLink, Redirect, useParams } from 'react-router-dom';
import './Auth.css';
import { useState } from 'react';
import { authUser } from '../../services/auth.js';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();
  if (user) {
    return <Redirect to="/items" />;
  }
}

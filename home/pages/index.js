import React from 'react';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <>
      <Nav/>
      <h1>
        I am home
      </h1><br/>
      <a href="http://localhost:3001/consumer">
        Go to consumer
      </a>
    </>
  )
}

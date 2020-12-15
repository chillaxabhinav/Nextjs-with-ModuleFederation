import React from 'react';
import dynamic from 'next/dynamic';
const Nav = dynamic(() => import("home/nav"));


export default function Home() {
  return (
    <div>
		    <Nav/>
        <h1>
            I am consumer
        </h1>
    </div>
  )
}


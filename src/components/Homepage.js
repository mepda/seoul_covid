import React from 'react';
import './Homepage.css'
import DailyChart from './DailyChart';
import {
  Link
} from "react-router-dom";



export default function Homepage() {

  return (
    <div>
      <main>
        <article>
          <header>
            Open API for tracking daily Corona count in Seoul.
          </header>
          <section>
            From April 20th, this app has been running collecting data from government and public sites and saving that data so that it can be used by anyone who wants to refer to historical data for Covid in Seoul and Korea.
          </section>
        </article>
        <article>
          <DailyChart />
        </article>
        <article>
          <header>Looking for Programmatic Access? Join below</header>
          <section className="users">
            <Link to="/signup" className="user sign-up">
              Sign Up
            </Link>
            <Link to="/signup" className="user sign-in">
              Sign In
            </Link>
          </section>
        </article>
      </main>
    </div>
  )
}

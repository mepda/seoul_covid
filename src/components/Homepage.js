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
        <DailyChart className="DailyChart" />
        <article>
          <header>
            Open API tracking Corona in Seoul & Korea.
          </header>
          <section>
            From April 8th, 2021 this app has been running collecting data from government and public sites and saving that data so that it can be used by anyone who wants to refer to historical data for Covid in Seoul and Korea.
          </section>
        </article>


        <article>
          <header>Looking for Programmatic Access? Check below</header>
          <section className="users">
            <Link to="/API" className="user sign-up">
              API Docs
            </Link>
            <a className="user sign-in" rel="noreferrer" href="https://github.com/mepda/seoul_covid" target="_blank">
              Github
            </a>
          </section>
        </article>
      </main>
    </div>
  )
}

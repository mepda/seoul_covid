import React from 'react'
import './Homepage.css'
import DailyChart from './DailyChart';
import microbe from './microbe.png'

export default function Homepage() {
  return (
    <div>
      <h1 className="homePageTitle">Seoul Covid API <img className="homePageTitleImg" src={microbe}></img></h1>
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
            <button className="user sign-up">
              Sign Up
            </button>
            <button className="user sign-in">
              Sign In
            </button>
          </section>
        </article>
      </main>
    </div>
  )
}

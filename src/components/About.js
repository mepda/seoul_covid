import React from 'react'
import './About.css'
export default function About() {
  return (
    <div>
      <main>
        <article>
          <header>
            What's the deal with this site? 👨🏻‍💻
          </header>
          <section>
            I wanted to make a UI for a system I made on AWS. The system I made
            texts me each day at 10am with the most recent data regarding Corona virus in
            Seoul and Korea. I was inspired to try out React more formally from
            a very excellent meetup group called <a className="aLink" target="_blank" rel="noreferrer" href="https://www.meetup.com/New-York-JavaScript-Study-Group/">New York JavaScript Study Group</a>so
            I put 2 + 2 together and got 22. <br /><br />Okay JavaScript string concatenation
            jokes aside, I wanted to let other people easily consume data about
            the status of Covid in Korea. It's my earnest hope that this site helps
            in some small way.<br /><br />
            --Ben🖖🏻
          </section>
        </article>
      </main>
    </div>
  )
}

import React, { useRef } from 'react';
import './API.css';
export default function API() {
  const api_url = useRef();
  function copy() {
    document.getElementsByClassName('apiExample')[0].select()
    document.execCommand('copy');

    // document.execCommand('')
  }
  return (
    <main>
      <article>
        <header>
          Seoul / Korea Open API
        </header>
        <section>
          <span className="green">GET</span> Get a range of Dates
        </section>
        <section >
          <p>Returns JSON with the URL specified ISO 8601 dates. Example:</p>
          <textarea className="apiExample" ref={api_url} onClick={copy}>https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api?start_date=2021-07-07&end_date=2021-07-10</textarea>

          <p>Gives a response of JSON with Items from 2021-07-07 to 2021-07-10</p>
        </section>
        <section>
          Parameters
          <p>start_date :: Must be in ISO 8601 format (YYYY-MM-DD)</p>
          <p>end_date :: Must be in ISO 8601 format (YYYY-MM-DD)</p>
        </section>
      </article>
    </main>
  )
}

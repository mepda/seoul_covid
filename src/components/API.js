import React, { useRef, useState } from 'react';
import axios from 'axios';
import './API.css';
export default function API() {
  const api_url = useRef();
  const [seven_days_data, load_seven_days_data] = useState()
  const [custom_range_data, load_custom_range_data] = useState()
  function copy() {
    document.getElementsByClassName('apiExample')[0].select()
    document.execCommand('copy');
  }
  function testAPI(arg) {
    if (arg === 'week') {
      load_seven_days_data('testing...')
      axios.get('https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api').then(data => {
        load_seven_days_data(data.data)
      })
    }
    else if (arg === 'custom') {
      load_custom_range_data('testing...')
      axios.get('https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api?start_date=2021-07-07&end_date=2021-07-10').then(data => {
        load_custom_range_data(data.data)
      })
    }

  }

  return (
    <main>
      <article>
        <header>
          Seoul / Korea Open API
        </header>
        <section>
          <h4><span className="green">GET</span> Get past seven days</h4>
        </section>
        <section >
          Returns JSON array of Corona virus cases for the past 7 days. Example:
          <textarea readOnly className="apiExample" ref={api_url} onClick={() => copy()} value="https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api"></textarea>
          Gives a response of JSON with Items from 2021-07-07 to 2021-07-10
          <h4 className="parameters">Parameters</h4>
          <code className="paramExamples">
            <div>None</div>
          </code>
          <div className="testAPI">
            <button onClick={() => testAPI('week')}>Test</button>
            <div className="results">
              {JSON.stringify(seven_days_data)}
            </div>
          </div>
        </section>
        <p className="break"></p>
        <section>
          <h4><span className="green">GET</span> Get a range of Dates</h4>
        </section>
        <section>
          Returns JSON with the URL specified ISO 8601 dates. Example:
          <textarea readOnly className="apiExample" ref={api_url} onClick={() => copy('custom')} value="https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api?start_date=2021-07-07&end_date=2021-07-10"></textarea>
          Gives a response of JSON with Items from 2021-07-07 to 2021-07-10 in an unordered array of objects
          <h4 className="parameters">Parameters</h4>
          <code className="paramExamples">
            <div><span className="underline">start_date</span> :: Must be in ISO 8601 format (YYYY-MM-DD)</div>
            <div><span className="underline">end_date</span> :: Must be in ISO 8601 format (YYYY-MM-DD)</div>
          </code>
          <div className="testAPI">
            <button onClick={() => testAPI('custom')}>Test</button>
            <div className="results">
              {JSON.stringify(custom_range_data)}
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

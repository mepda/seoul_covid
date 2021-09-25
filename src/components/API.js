import React, { useRef, useState } from 'react';
import axios from 'axios';
import './API.css';
export default function API() {
  const api_url = useRef();
  const [sevenDaysData, setSevenDaysData] = useState()
  const [customRangeData, setCustomRangeData] = useState()
  const [csvData, setCsvData] = useState()

  const setStateMethods = {
    week: setSevenDaysData,
    custom: setCustomRangeData,
    csv: setCsvData
  }

  let epoch_time_now = new Date().getTime();
  let day = 1000 * 60 * 60 * 24;
  let sevenDaysAgo = epoch_time_now - (day * 7);
  let today_date_obj = new Date(epoch_time_now);
  let seven_days_ago_obj = new Date(sevenDaysAgo);
  let ISO_8601_date = `${today_date_obj.getFullYear()}-${today_date_obj.getMonth() + 1}-${today_date_obj.getUTCDate()}`
  let ISO_8601_seven_days_ago_date = `${seven_days_ago_obj.getFullYear()}-${seven_days_ago_obj.getMonth() + 1}-${seven_days_ago_obj.getUTCDate()}`

  function copy(url) {
    if (url === 'week') {
      document.getElementsByClassName('apiExample1')[0].select()
    }
    else if (url === 'custom') {
      document.getElementsByClassName('apiExample2')[0].select()
    }
    document.execCommand('copy');
  }
  function testAPI(arg) {
    if (arg === 'week') {
      setSevenDaysData('testing...')

      axios.get('https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api').then(data => {
        setSevenDaysData(data.data)
      })
    }
    else if (arg === 'custom') {
      setCustomRangeData('testing...')
      axios.get('https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api?start_date=2021-07-07&end_date=2021-07-15').then(data => {
        setCustomRangeData(data.data)
      })
    }
    else if (arg === 'csv') {
      setCsvData('testing...')
      axios.get('https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api?start_date=2021-07-07&end_date=2021-07-15&encoding=csv').then(data => {
        setCsvData(data.data)
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
          <textarea readOnly className="apiExample apiExample1" ref={api_url} onClick={() => copy('week')} value="https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api"></textarea>
          Gives a response of JSON with Items from {ISO_8601_seven_days_ago_date} to {ISO_8601_date}
          <h4 className="parameters">Parameters</h4>
          <code className="paramExamples">
            <div>None</div>
          </code>
          <div className="testAPI">
            <button onClick={() => testAPI('week')}>Test</button>
            <div className="results">
              {JSON.stringify(sevenDaysData)}
            </div>
          </div>
        </section>
        <p className="break"></p>
        <section>
          <h4><span className="green">GET</span> Get a range of Dates</h4>
        </section>
        <section>
          Returns JSON with the URL specified ISO 8601 dates. Example:
          <textarea readOnly className="apiExample apiExample2" ref={api_url} onClick={() => copy('custom')} value="https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api?start_date=2021-07-07&end_date=2021-07-15"></textarea>
          Gives a response of JSON with Items from 2021-07-07 to 2021-07-15 in an unordered array of objects
          <h4 className="parameters">Parameters</h4>
          <code className="paramExamples">
            <div><span className="underline">start_date</span> (optional) Must be in ISO 8601 format (YYYY-MM-DD)</div>
            <div><span className="underline">end_date</span> (optional) Must be in ISO 8601 format (YYYY-MM-DD)</div>
            <div><span className="underline">encoding</span> (optional) Default response is in JSON. Can specify this to have results returned in csv</div>

          </code>
          <div className="testAPI">
            <button onClick={() => testAPI('custom')}>Test</button>
            <div className="results">
              {JSON.stringify(customRangeData)}
            </div>
          </div>
          <div className="testAPI">
            <button onClick={() => testAPI('csv')}>Test CSV</button>
            <div className="results">
              {JSON.stringify(csvData)}
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

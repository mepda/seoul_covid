import React from 'react'
import image from './example text message.PNG'
import './About.css'
export default function About() {
  return (
    <div>
      <main>
        <article>
          <header>
            How & Why I built this Project 👨🏻‍💻
          </header>
          <section className="explanation">
            <div>
              This project was built using serverless AWS technologies. It's set up to record the data published on a <a target="_blank" rel="noreferrer" href="http://ncov.mohw.go.kr/en/bdBoardList.do?brdId=16&brdGubun=162&dataGubun=&ncvContSeq=&contSeq=&board_id=">Korean government website</a>and keeping a tab of Corona Virus daily numbers in Seoul and Korea. Every day a CloudWatch set with a cron time expression triggers a lambda function at 10am KST. The lambda function then extracts the data I'm looking for from the Korean governmental website, pushes the data into a DynamoDB table, and sends it to an SNS topic. SNS then fires off which is set up to send a SMS to my cellphone with the most recent data allowing me to keep an eye easily on recent changes in Korea and Seoul.
            </div>
            <br />
            <img src={image} className="exampleTextMessage" alt="an image of recent text messages showing Seoul and Koreas daily covid counts" />
            <br />
            After some reflection, I thought that others might be interested in this data for analysis or implenting it in their own way, so a few days back I set up an API Gateway that calls another lambda that talks to the DB and passes back a response to the client.
            <br /><br />
            Ultimately, this service was made so other people could easily consume data about the status of Covid in Korea. It's my earnest hope that this site helps others in some small way.<br /><br /><br />
            --Ben🖖🏻
          </section>
        </article>
      </main>
    </div>
  )
}

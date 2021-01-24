import React from 'react';
import Advantage from './Advantage';
import Feedback from './Feedback';
import FeedbackImages from './Feedback-images';

export default function Home(props) {
  return (
    <div className="home">
      <Advantage />

      <section className="home_feedback page_block">
        <div className="container">
          <div className="row">
            <div className="cell-xl-6 cell-sm-12">
              <Feedback />
            </div>

            <div className="cell-xl-6 cell-sm-12">
              <FeedbackImages />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
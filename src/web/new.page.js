import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";

const SpeechtoText = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
    console.log("start lisrnting");
  }, []);
  return (
    <>
      <HeaderNav />

      <>
        <section className="page-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8">
                <div className="title-block">
                  <h1>AI Voice Recognition</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding page">
          <div className="container">
            <div className="row justify-content-center">
              <div class="col-lg-12">
                <div class="form-group">
                  <textarea
                    id="message"
                    name="message"
                    cols="30"
                    rows="6"
                    class="form-control"
                    placeholder="Your Message"
                    value={transcript}
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <button className="btn btn-main btn-sm mx-2" onClick={SpeechRecognition.startListening({continuous:true})}>Start</button>
                <button
                  className="btn btn-main btn-sm mx-2"
                  onClick={() => {
                    SpeechRecognition.stopListening();
                    console.log("listening stops");
                  }}
                >
                  Stop
                </button>
                <button
                  className="btn btn-main btn-sm mx-2"
                  onClick={resetTranscript}
                >
                  Clear text
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
      <>
        <SmallCentered />
      </>
    </>
  );
};

export default SpeechtoText;

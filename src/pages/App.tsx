import React from 'react';
import './style.scss';

import { 
  Contacts,
  Skills,
  Languages,
  MainInfo,
  WorkHistory,
  Education,
  Interests 
} from '../components';

const App = () => {
  return (
    <section className="page-wrap">
      <main id="app" role="main">
        <section className="page-wrapper">
          <div className="page-final">
            <section className="container">
              <div className="body-resume d-flex ">
                <div
                  className="preview-container position-relative"
                  id="resumeDoc"
                >
                  <div
                    className="section-loader-new d-none"
                    id="resumeLoader"
                  ></div>
                  <div className="spellcheck-notification ">
                    <i className="fas fa-check "></i>
                  </div>
                  <div className="">
                    <div
                      id="document"
                      className="document fontsize fontface vmargins hmargins pagesize skn-srz9 SRZ9  ZTY"
                    >
                      <div id="CONTAINER_PARENT_0" className="parentContainer">
                        <div id="CONTAINER_0" className="left-box">
                          <Contacts />
                          <Skills />
                          <Languages />
                        </div>
                        <div id="CONTAINER_1" className="right-box">
                          <MainInfo />
                          <WorkHistory />
                          <Education />
                          <Interests />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="svgPreviewHidden" hidden></div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </section>
  );
};

export default App;
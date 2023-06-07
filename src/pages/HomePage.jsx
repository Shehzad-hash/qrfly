import LivePromo from "@/components/LivePromo";
import Navbar from "@/components/Navbar";
import React from "react";
export default function HomePage() {
  return (
    <div>
      {/* <!-- Header --> */}
      <div class="customHeader">
        <div class="container">
         <div className="row">
          <div className="col-lg-10 mx-auto">
          <div class="row">
            <div class="col-lg-5">
              <a class="mainLogo" href="#">
                <img src="/assets/fly.png" alt="" />
              </a>
            </div>
          </div>
          </div>
         </div>
        </div>
      </div>

      {/* <!-- Navbar --> */}
      <div className="navBar">
      <Navbar />
      </div>

      {/* <!-- Page Contents --> */}
      <div class="pageContents">
        <div class="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
            <div class="row g-5">
            <div class="col-lg-6">
              <h1 class="mainHeading">VCF (vCard File) Generator</h1>
              <p class="mainText">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                porro vero quos libero et iure aspernatur ipsa ut quia omnis?
              </p>

              <h1 class="subTitle">Logo Upload</h1>

              <div className="uploadLogo">
                <input type="file" id="upload" className="d-none" />
                <label htmlFor="upload">+</label>
                <div>
                  <h1 className="mainTitle">Upload your logo</h1>
                  <span>suggested formate:svg,png or jpg</span>
                </div>
              </div>

              <h1 class="subTitle">URL Destination</h1>
              <input
                type="text"
                placeholder="https://example.com"
                className="customInput"
              />

              <div className="rangeContainer my-3">
                <label for="customRange1" class="form-label">
                  Bit size: 30
                </label>
                <input type="range" class="form-range" id="customRange1" />
                <label for="customRange2" class="form-label">
                  Error Correction: 3
                </label>
                <input type="range" class="form-range" id="customRange2" />
                <label for="customRange3" class="form-label">
                  Border Size: 0
                </label>
                <input type="range" class="form-range" id="customRange3" />
              </div>

              <div className="backgroundChk d-flex align-items-center gap-2 my-3">
                <input type="checkbox" name="" id="backChk" />
                <label htmlFor="backChk">White background</label>
              </div>
              <h1 className="subTitle">Choose QR Code For Eyes</h1>
              {/* <!-- Accordion 1 Start --> */}
              <div class="toggleContainer">
                <h1 class="accordionHeading">Yes i'll pick custom eyes</h1>
                <h3 class="hideButton">
                  <label for="switch1"></label>
                </h3>
                <div class="trainingToggle">
                  <input
                    type="checkbox"
                    class="switch switchInput"
                    id="switch1"
                  />
                  <label class="switchLabel" for="switch1">
                    Toggle
                  </label>
                  <div className="accordionContents">
                    <div className="radioContainer">
                      <div>
                        <input type="radio" id="radio1" name="radio"/>
                        <label htmlFor="radio1"></label>
                      </div>
                      <div>
                        <input type="radio" id="radio2" name="radio"/>
                        <label htmlFor="radio2"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 1 End --> */}

              <h1 className="subTitle">Choose QR Code Colors</h1>
              {/* <!-- Accordion 2 Start --> */}
              <div class="toggleContainer">
                <h1 class="accordionHeading">Yes i'll pick custom colors</h1>
                <h3 class="hideButton">
                  <label for="switch2"></label>
                </h3>
                <div class="trainingToggle">
                  <input
                    type="checkbox"
                    class="switch switchInput"
                    id="switch2"
                  />
                  <label class="switchLabel" for="switch2"></label>
                  <div class="accordionContents">
                    <label class="commonLabel mt-3" for="">
                      Background Color
                    </label>
                    <div className="colorInput">
                      <input class="commonInput" type="text" id="color1" />
                      <label htmlFor="color1" className="colorPicker">
                        <img src="/assets/colorPicker.png" alt="" />
                      </label>
                    </div>
                    <label class="commonLabel" for="">
                      Eye Outer Color
                    </label>
                    <div className="colorInput">
                      <input class="commonInput" type="text" id="color2" />
                      <label htmlFor="color2" className="colorPicker">
                        <img src="/assets/colorPicker.png" alt="" />
                      </label>
                    </div>
                    <label class="commonLabel" for="">
                      Eye inner Color
                    </label>
                    <div className="colorInput">
                      <input class="commonInput" type="text" id="color3" />
                      <label htmlFor="color3" className="colorPicker">
                        <img src="/assets/colorPicker.png" alt="" />
                      </label>
                    </div>
                    <label class="commonLabel" for="">
                      QR Code Dot Color
                    </label>
                    <div className="colorInput">
                      <input class="commonInput" type="text" id="color4" />
                      <label htmlFor="color4" className="colorPicker">
                        <img src="/assets/colorPicker.png" alt="" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Accordion 2 End --> */}

              {/* <!-- Term Div --> */}
              <div class="termDiv">
                <input checked id="termCheck" type="checkbox" />
                <label for="">
                  {" "}
                  I agree to the <a href="">terms of service</a> and{" "}
                  <a href="">privacy policy</a>{" "}
                </label>
              </div>
              <a class="mainBtn my-4" href="#">
                Download as ZIP
              </a>
              <div class="borderDiv">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum provident vel delectus pariatur perferendis repellat
                  reiciendis, maiores repudiandae id neque alias minus eos
                  tempore in totam illum iure saepe atque.
                </p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div class="col-lg-5 mx-auto">
              <LivePromo/>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <footer class="pageFooter">
        <div class="container">
          <p class="copyRightText">Copyright: Lorem ipsum dolor sit amet.</p>
          <a class="footerLink" href="#">
            Link 1
          </a>
          <a class="footerLink" href="#">
            Link 2
          </a>
          <a class="footerLink" href="#">
            Link 3
          </a>
          <a class="footerLink" href="#">
            Link 4
          </a>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

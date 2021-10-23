import './App.css';
import DataTable from '../src/components/DataTable'
import * as React from "react";

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};


function App() {
  const contentWrapper = React.useRef(null);
  return (
    <div className="App">
      <div className="navbar-table">
          <div class="navbar-left-space">
            <span><i class="fas fa-search"></i> &nbsp; &nbsp; 1 of 276 contacts <i class="fas fa-times"></i></span>
          </div>
          <div>
            <button>View</button>
            <button>Edit</button>
            <button>Status</button>
            <button>Send</button>
            <button><i class="fas fa-ellipsis-h"></i></button>
            <span className="nav-pipe-symbol">|</span>
          <button
              onClick={() => {
                sideScroll(contentWrapper.current, 25, 100, -10);
              }}
            >
              <i class="fas fa-chevron-left"></i>
              </button>
              <button onClick={() => {
                sideScroll(contentWrapper.current, 25, 100, 10);
              }}
            >
              <i class="fas fa-chevron-right"></i>
              </button>
              </div>
        </div>
        <div id="table-scroll" class="table-scroll">
          <div ref={contentWrapper} class="table-wrap">
            <table class="main-table">
              <thead>
                <tr>
                  <th class="fixed-side table-response" scope="col">
                    <input type="checkbox" />
                      Name
                      <button class="table-button"><i class="fas fa-ellipsis-h"></i></button>
                  </th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Status</th>
                  <th scope="col">Source</th>
                  <th scope="col">Date added</th>
                  <th scope="col">Company</th>
                </tr>
              </thead>
              <DataTable />
            </table>
          </div>
      </div>
    </div>
  );
}

export default App;

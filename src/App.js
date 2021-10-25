import './App.css';
import DataTable from '../src/components/DataTable'
import * as React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

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
        <div className="right-nav">
          <button className="btn-custom">View</button>
          <button className="btn-custom">Edit</button>
          <button className="status btn-custom">Status<i class="fas fa-angle-down"></i></button>
          <button className="btn-custom">Send</button>
          <button className="three-dots"><i class="fas fa-ellipsis-h"></i></button>
          <span className="nav-pipe-symbol">|</span>
          <button className="button-left"
            onClick={() => {
              sideScroll(contentWrapper.current, 25, 100, -10);
            }}
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button className="button-right" onClick={() => {
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
                <th class="fixed-side">
                  <div className="table-response">
                    <div>
                      <input type="checkbox" /> <span className="ml">Name</span>
                    </div>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle>
                          <button className="btn table-button" type="button">
                            <i class="fas fa-ellipsis-h"></i>
                          </button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item className="dropdown-color" href="#">
                            Update status
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-color" href="#">
                            Send a message
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-color" href="#">
                            View details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-color" href="#">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-color" href="#">
                            Copy
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-color" href="#">
                            Move
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-color" href="#">
                            Export
                          </Dropdown.Item>
                          <Dropdown.Item href="#" className="text-danger">
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Source</th>
                <th></th>
                <th>Date added <i class="fas fa-angle-down"></i></th>
                <th>Company</th>
              </tr>
            </thead>
            <DataTable />
          </table>
        </div>
      </div>
      <div className="footer">
        <button className="footer-button" type="button"><i class="fas fa-chevron-left"></i></button>
        <button type="button" className="footer-pagination">1</button> <span>of 28</span>
        <button className="footer-button" type="button"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  );
}

export default App;

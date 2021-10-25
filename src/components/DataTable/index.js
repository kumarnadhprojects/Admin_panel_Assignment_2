import React, { Component } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

const data = [
  {
    id: 1,
    name: 'Jane Copper',
    email:
      'alma.lawson@example.com',
    phone: '(319) 555-0115',
    status: 'Open',
    source: 'Manually added',
    date: '11/7/16',
    company: 'Starbucks',
  },
  {
    id: 2,
    name: 'Wade Warren',
    email:
      'tim.jennings@example.com',
    phone: '(229) 555-0109',
    status: 'Open',
    source: 'Manually added',
    date: '10/6/13',
    company: 'Gillette',
  },
  {
    id: 3,
    name: 'Esther Howard',
    email:
      'debra.holt@example.com',
    phone: '(208) 555-0112',
    status: 'Open',
    source: 'Manually added',
    date: '2/11/12',
    company: 'The Walt Disney Com',
  },
  {
    id: 4,
    name: 'Cameron Williamson',
    email:
      'kenzi.lawson@example.com',
    phone: '(702) 555-0122',
    status: 'In Progress',
    source: 'Web form',
    date: '7/18/17',
    company: 'Nintendo',
  },
  {
    id: 5,
    name: 'Brooklyn Simmons',
    email:
      'willie.jennings@example.com',
    phone: '(684) 555-0102',
    status: 'On Hold',
    source: 'Intercom',
    date: '3/4/16',
    company: "McDonald's",
  },
  {
    id: 6,
    name: 'Leslie Alexander',
    email:
      'georgia.young@example.com',
    phone: '(307) 555-0133',
    status: 'Open',
    source: 'Intercom',
    date: '12/4/17',
    company: 'Pizza Hut',
  },
  {
    id: 7,
    name: 'Jenny Wilson',
    email:
      'bill.sanders@example.com',
    phone: '(808) 555-0111',
    status: 'Open',
    source: 'Bulk upload',
    date: '5/7/16',
  },
  {
    id: 8,
    name: 'Guy Hawkins',
    email:
      'deanna.curtis@example.com',
    phone: '(302) 555-0107',
    status: 'Closed',
    source: 'Bulk upload',
    date: '1/31/14',
    company: 'MasterCard',
  },
  {
    id: 9,
    name: 'Robert Fox',
    email:
      'jackson.graham@example.com',
    phone: '(308) 555-0121',
    status: 'In Progress',
    source: 'Bulk upload',
    date: '12/10/13',
    company: 'Bank of America',
  },
  {
    id: 10,
    name: 'Jacob Jones',
    email:
      'sara.cruz@example.com',
    phone: '(405) 555-0128',
    status: 'Open',
    source: 'Bulk upload',
    date: '8/16/13',
    company: 'Pizza Hut',
  },
]

class DataTable extends Component {
  state = {
    customersList: data,
  }

  render() {
    const { customersList } = this.state
    return (
      <tbody>
        {customersList.map(eachCustomers => (
          <tr>
            <th class="fixed-side">
              <div className="table-response">
                <div>
                  <input type="checkbox" /> <span className="ml">{eachCustomers.name}</span>
                </div>
                <div>
                  <div className="dropdown-container">
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
              </div>
            </th>
            <td>{eachCustomers.email}
            </td>
            <td>{eachCustomers.phone}</td>
            {eachCustomers.status === "Open" ?
              <td className="bg-open">{eachCustomers.status}</td>
              :
              <></>
                && eachCustomers.status === "On Hold" ?
                <td className="bg-onhold">{eachCustomers.status}</td>
                :
                <></>
                  && eachCustomers.status === "In Progress" ?
                  <td className="bg-inprocess">{eachCustomers.status}</td>
                  :
                  <td className="bg-closed">{eachCustomers.status}</td>}
            <td>{eachCustomers.source}</td>
            <td>
              <div className="source-container">
                <span className="dot">
                  <div className="circle-icon"><i class="fas fa-share"></i></div>
                  <div className="circle-icon"><i class="fas fa-download"></i></div>
                  <div className="circle-icon"><i class="fas fa-trash-alt"></i></div>
                </span>
              </div>
            </td>
            <td>{eachCustomers.date}</td>
            <td>{eachCustomers.company}</td>
          </tr>
        ))}
      </tbody>
    )
  }
}
export default DataTable
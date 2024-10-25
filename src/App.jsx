import {useState} from 'react';
import React from 'react';
import TheAdministration from './components/TheAdministration';
import './components/styles/styleSheet.css';
import CenterContent from './components/MainContent';
import  './components/styles/mainContent.css'
import TopHeaders from './components/ImpTopheaders';
import  './components/styles/topHeader.css';
import './components/styles/newsDetails.css';
import './components/styles/warningCode.css'
import './components/styles/passenger.css';
import './components/styles/addPassenger.css';
import './components/styles/general.css';
import './components/styles/addProduct.css';
import './components/styles/customerTable.css';
import './components/styles/flight.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Core from './components/CoreCompo';
import { CORE_CONCEPt } from './components/dataJS';
import './components/styles/coreConcept.css';
import TabButtons from './components/TabButtons';
import './components/styles/example.css'
import {EXAMPLES} from './components/tabData.js';
import {COMPUTERS} from './components/computer.js';

import './components/styles/userTable.css';
import './components/styles/tab.css';
import './components/styles/todolist.css';


import ManageItems from './components/AddItem.jsx';
import ItemPrice from './components/ProductPrice.jsx';
import MyCounter from './components/Counter.jsx';
import ToDoList from './components/ToDoList.jsx';
import ExampleCounter from './components/ExampleCounter.jsx';
import GettingWarning from './components/ShowWarning.jsx';
import PassengerMod from './components/DesignMe.jsx';
import ComputerDetails from './components/ComputerData.jsx';
import {USERINFO} from './components/userinfo.js';
import { UserInformation } from './components/UserInformation.jsx';
import {CUSTOMER} from './components/customer.js';
import {PASSENGER} from './components/passenger.js';
import FlightInfo from './components/FlighInformation.jsx';
import Datastream from './components/AccessPostData.jsx';
import FetChStudentData from './components/StudentDirectory.jsx';
import StudentPage from './components/StudentPage.jsx';
import './components/styles/theNavs.css';


export const App = () => {
const [storeCustomer,setStoreCustomer]= useState(CUSTOMER);

 //For Search Computer 
const [searchTerm, setSearchTerm] = useState('');
const [searchQuery, setSearchQuery] = useState('');

//Search Flight Information
const [searchFlightInfo,setSearchFlightInfo]=useState('');

const filterFlightInformation= PASSENGER.filter(flight=>
  flight.lastname.toLowerCase().includes(searchFlightInfo.toLocaleLowerCase()) ||
  flight.passportNumber.toString().toLowerCase().includes(searchFlightInfo.toLowerCase())
);

const filteredComputer = COMPUTERS.filter(computr=>
computr.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
computr.model.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
computr.processor.toLowerCase().includes(searchTerm.toLowerCase())
);

const customerSearch = CUSTOMER.filter(selectCustomer =>
  selectCustomer.id.toString().toLowerCase().includes(searchQuery.toLowerCase()) || // Convert id to string first
  selectCustomer.name.toLowerCase().includes(searchQuery.toLowerCase()) // Correct method call for 'toLowerCase'
);

const [selectedTopic, setSelectedTopic]=useState();

function handleSelect(selectedButton){
    //Selected buttons => 'Components', 'AJX', 'Props', 'State'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
}

let tabContent = <p>Please select a topic.</p>;

if(selectedTopic){
tabContent = <div id='tab-data'>
<h3>{EXAMPLES[selectedTopic].Title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<pre>
    <code>
    {EXAMPLES[selectedTopic].code}
    </code>
</pre>
</div>

}

return (
    <>
         <TopHeaders />
         <div className='pg-navs'>
         <Router>
                <nav>
                    <ul>
                        <li><Link to="/students">Students</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/students' element={<StudentPage />} />
                </Routes>
        </Router>
        </div>

         <div className='core-concept'>
         {CORE_CONCEPt.map((conceptItem) => (
         <Core key={conceptItem.title} {...conceptItem} />
         ))}


        </div>
 

        <section id='example'>
        <h2>Examples</h2>
        <menu>
    
  <TabButtons 
    isSelected={selectedTopic === 'components'} 
    onSelect={() => handleSelect('components')} 
    label="Component" 
  />
  <TabButtons 
    isSelected={selectedTopic === 'jsx'} 
    onSelect={() => handleSelect('jsx')} 
    label="JSX" 
  />
  <TabButtons 
    isSelected={selectedTopic === 'props'} 
    onSelect={() => handleSelect('props')} 
    label="Props" 
  />
  <TabButtons 
    isSelected={selectedTopic === 'state'} 
    onSelect={() => handleSelect('state')} 
    label="State" 
  />

</menu>



        {tabContent}
        </section>
        <CenterContent />
        <TheAdministration /> 

    <div>
    </div>

    <div>
        <h1>Add Item</h1>
        <ManageItems />
        <ItemPrice />
        <PassengerMod />
        <MyCounter />
        <ToDoList />
        <ExampleCounter />
        <GettingWarning />
      </div>

      <div className='search-item'>
      <input
      type='txt'
      placeholder='Search...'
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)}
      />

      {filteredComputer.map((computerInfo, index)=>(
        <ComputerDetails key={index} comp={computerInfo} />
      ))}

      </div>


      {COMPUTERS.map((computerInfo) => (
        <ComputerDetails key={computerInfo.brand} comp={computerInfo} />
      ))}

  
      <div className='user-info'>
      {USERINFO.map((userinformtion)=>(
        <UserInformation key={userinformtion.name} user={userinformtion} />
      ))}


<div>
    {/* Search Input */}
    <input 
      type='text'
      placeholder='Search by Id, Name'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    

    {/* Customer Table */}
    <div className="st-customer">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customerSearch.map((cuInformation, index) => (
            <tr key={index}>
              <td>{cuInformation.id}</td>
              <td>{cuInformation.name}</td>
              <td>{cuInformation.age}</td>
              <td>{cuInformation.Address}</td>
              <td>{cuInformation.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>


{/* Passenger Table and Information */}
<div className='pass-info'>
  {/* Search Box */}
  <div className='search-box'>
    <input
      type='text'
      placeholder='Search by Last Name or Passport Number'
      value={searchFlightInfo}
      onChange={(e) => setSearchFlightInfo(e.target.value)}
    />
  </div>

  {/* Passenger Table */}
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Passport Number</th>
        <th>Seat Number</th>
        <th>Phone Number</th>
      </tr>
    </thead>
    <tbody>
      <p><strong>Total Passenger: </strong> {filterFlightInformation.length}</p>
      {filterFlightInformation.length > 0 ? (
        filterFlightInformation.map((pnumber, ind) => (
          <FlightInfo key={ind} personalInfo={pnumber} />
        ))
      ) : (
        <tr>
          <td colSpan="6">No matching passengers found</td>
        </tr>
      )}
    </tbody>
  </table>
</div>
<Datastream /> 
      <FetChStudentData />
      </div>
      
      </>
    );
};

export default App;








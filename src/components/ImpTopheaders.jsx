import React from 'react';
import Theader from "./TopHeader";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentPage from '../components/StudentPage';

const TopHeaders = () => {
    return (
        <>
            <div className='top-header'>
                <div className="homepagelogo">
                    <Theader logoLink="#" logoText="The Administration" />
                </div>
                <div className="hlogo">
                    <Theader hlogo="https://upload.wikimedia.org/wikipedia/commons/5/5e/US-WhiteHouse-Logo.svg" hlogolink="https://upload.wikimedia.org/wikipedia/commons/5/5e/US-WhiteHouse-Logo.svg" />
                </div>
                <Router>
                    <div className='navigation-link'>
                        <ul>
                            <li><Link to="/students">Students</Link></li>
                            <li><Theader tlinks="#" linkText="Priority" /></li>
                            <li><Theader tlinks="#" linkText="Administration" /></li>
                            <li><Theader tlinks="#" linkText="Office" /></li>
                            <li><Theader tlinks="#" linkText="Español" /></li>
                            <div className='right-menu'>
                                <li><Theader tlinks="#" linkText="Menu" /></li>
                            </div>
                        </ul>
                    </div>
                    <Routes>
                        <Route path='/students' element={<StudentPage />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
};

export default TopHeaders;

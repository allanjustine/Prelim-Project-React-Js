import './index.css';
import VisitorIndex from './visitor-pages/VisitorIndex';
import logo from './assets/mater-dei-college-logo.jpg'
import About from './pages/About';
import Home from './pages/Home';
import Venue from './venue-pages/Venue';
import _Venue from './venue-pages/_Venue';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Schedules from './venue-pages/Schedules';
import Student from './student-pages/Student';
import TeacherList from './teacher-pages/TeacherList';
import {Link} from 'react-router-dom';
import StudentContextProvider from './contexts/StudentContext';
import TeacherContextProvider from './contexts/TeacherContext';

function App() {
  return (
    <Router>
        <div className="App">
          <div className="content">
          <div class="container-fluid">
              <div class="row flex-nowrap">
                  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" id="sidebar">
                      <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                          <Link to="/" id="tag" class="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
                          <img className='logoo' src={logo} title="MDC logo"></img><span class="fs-5 d-none d-sm-inline mt-3"><p className="brandd">Mater Dei College</p></span>
                          </Link>
                          <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                              <li class="nav-item">
                                  <Link to="/dashboard" class="nav-link align-middle px-0">
                                      <i class="fa fa-tachometer" aria-hidden="true" id="iconn"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                                  </Link>
                              </li>
                              <li class="nav-item">
                                  <Link to="/visitors" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                      <i class="fa fa-user" aria-hidden="true" id="iconn"></i> <span class="ms-1 d-none d-sm-inline">Visitors</span> </Link>
                              </li>
                              <li class="nav-item">
                                  <Link to="/venues" class="nav-link px-0 align-middle">
                                      <i class="fa fa-university" aria-hidden="true" id="iconn"></i> <span class="ms-1 d-none d-sm-inline">Venues</span></Link>
                              </li>
                              <li class="nav-item">
                                  <Link to="/students" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                      <i class="fa fa-user" aria-hidden="true" id="iconn"></i> <span class="ms-1 d-none d-sm-inline">Students</span></Link>
                              </li>
                              <li class="nav-item">
                                  <Link to="/teachers" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                      <i class="fa fa-users" aria-hidden="true" id="iconn"></i> <span class="ms-1 d-none d-sm-inline">Teachers</span></Link>
                              </li>
                              <li class="nav-item">
                                  <Link to="/about" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                      <i class="fa fa-question-circle" aria-hidden="true" id="iconn"></i> <span class="ms-1 d-none d-sm-inline">About Us</span></Link>
                              </li>
                              </ul>
                      </div>
                  </div>
                  <div class="col py-3">
                  <Switch>
                        <Route exact path="/visitors">
                          <VisitorIndex />
                        </Route>
                        <Route exact path="/dashboard">
                          <Dashboard />
                        </Route>
                        <Route exact path="/">
                          <Home />
                        </Route>
                        <Route exact path="/about">
                          <About />
                        </Route>
                        <Route exact path="/venues">
                          <Venue />
                        </Route>
                        <Route exact path="/venues/:id">
                          <_Venue />
                        </Route>
                        <Route excat path="/schedules">
                          <Schedules />
                        </Route>
                        <Route excat path="/students">
                          <StudentContextProvider>
                            <Student />
                          </StudentContextProvider>
                        </Route>
                        <Route exact path="/teachers">
                          <TeacherContextProvider>
                            <TeacherList />
                          </TeacherContextProvider>
                        </Route>
                      </Switch>
                  </div>
              </div>
          </div>      
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {Link} from "react-router-dom";
import Company from './company';
import Team from './team';
import { Route } from 'react-router-dom';
class About extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <h1>About</h1>
                <div className="row">
                    <div className="col-2">
                        <ul>
                            <li>
                            <Link to="/about/team">Our Team</Link>
                            </li>
                            <li>
                                <Link to="/about/company">Our Company</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col'>
                        <Route path='/about/team' component={Team} />
                        <Route path='/about/company' component={Company} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default About;
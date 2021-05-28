import React from 'react'
import './Dashboard.css';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Footer from './Footer';

function Dashboard() {
    return (
        <div className="dashboard">
            <h2>User</h2>

            <div className="dashboard__header">
                <div className="dashboard__left">
                    <h3>Total Registered Users</h3>
                    <h3>85444</h3>
                </div>

                <div className="dashboard__middle">
                <h3>Active Users</h3>
                <h3>84722</h3>
                </div>

                <div className="dashboard__right">
                <h3>Inactive Members</h3>
                <h3>84722</h3>
                </div>
            </div>

            <h2>Club Manager</h2>

            <div className="dashboard__body">

                <div className="dashboard__bodytop">
                <div className="dashboard__left">
                    <h3>Total Club Manager</h3>
                    <h3>85444</h3>
                </div>

                <div className="dashboard__middle">
                <h3>Active club Manager</h3>
                <h3>84722</h3>
                </div>

                <div className="dashboard__right">
                <h3>Inactive Club Manager</h3>
                <h3>84722</h3>
                </div>
                </div>

                <div className="dashboard__bodybottom">
                <h3>Today Game Point Report - GP</h3>
                    <div className="dashboard__body1">
                    <div className="dashboard__body1left">
                    <h3>Today Transfered</h3>
                    <h3>90,00,000</h3>
                  </div>

                   <div className="dashboard__body1right">
                   <h3>Today In Distribution</h3>
                   <h3>7,23,232,3123,233,213,214565</h3>
                    </div>
                    </div>


                    <div className="dashboard__body2">
                    <div className="dashboard__body2left">
                    <h3>Today Transfered</h3>
                    <div className="details">
                    <h3>90,00,000</h3>
                    <p>Details</p>
                    </div>
                  </div>

                  <div className="dashboard__body2right">
                  <h3>Today In Distribution</h3>
                  <div className="details">
                  <h3>7,23,232,3123,233,213,211</h3>
                    <p>Details</p>
                    </div>
                  </div>
                    </div>
                </div>
            </div>

            <h2>Ranking</h2>

            <div className="dashboard__rank">
            
            <div className="dashboard__rankleft">
            <h3>Game Point Ranking</h3>
                <div className="ranks">
                    <div className="rank">
                        <StarIcon />
                        <h4>1 st</h4>
                    </div>
                    <div className="rank__info">
                    <AccountCircleIcon />
                        <div className="info">
                            <p>Dog Yanoljang</p>
                            <small>9 wins 5 losses (64.3%)</small>
                        </div>
                    </div>
                    <h2>1,630,765,798</h2>
                </div>

                <div className="ranks">
                    <h5 className="rank2">2nd Place</h5>
                    <div className="rank__info">
                    <AccountCircleIcon />
                        <div className="info">
                            <p>Dog Yanoljang</p>
                            <small>9 wins 5 losses (64.3%)</small>
                        </div>
                    </div>
                    <h2>169,540,000</h2>
                </div>

                <div className="ranks">
                    <h5 className="rank3">3rd Place</h5>
                    <div className="rank__info">
                    <AccountCircleIcon />
                        <div className="info">
                            <p>Dog Yanoljang</p>
                            <small>9 wins 5 losses (64.3%)</small>
                        </div>
                    </div>
                    <h2>169,540,000</h2>
                </div>

                <div className="ranks">
                    <h5 className="rank4">4th</h5>
                    <div className="rank__info">
                    <AccountCircleIcon />
                        <div className="info">
                            <p>Dog Yanoljang</p>
                            <small>9 wins 5 losses (64.3%)</small>
                        </div>
                    </div>
                    <h2>169,540,000</h2>
                </div>

                <div className="ranks">
                    <h5 className="rank5">5th</h5>
                    <div className="rank__info">
                    <AccountCircleIcon />
                        <div className="info">
                            <p>Dog Yanoljang</p>
                            <small>9 wins 5 losses (64.3%)</small>
                        </div>
                    </div>
                    <h2>169,540,000</h2>
                </div>
            </div>

            <div className="dashboard__rankright">
            <h3>Score Ranking</h3>
            <div className="ranks">
            <div className="rank">
                <StarIcon />
                <h4>1 st</h4>
            </div>
            <div className="rank__info">
            <AccountCircleIcon />
                <div className="info">
                    <p>Dog Yanoljang</p>
                    <small>9 wins 5 losses (64.3%)</small>
                </div>
            </div>
            <h2>1,630,765,798</h2>
        </div>

        <div className="ranks">
            <h5 className="rank2">2nd Place</h5>
            <div className="rank__info">
            <AccountCircleIcon />
                <div className="info">
                    <p>Dog Yanoljang</p>
                    <small>9 wins 5 losses (64.3%)</small>
                </div>
            </div>
            <h2>1,630,765,798</h2>
        </div>

        <div className="ranks">
            <h5 className="rank3">3rd Place</h5>
            <div className="rank__info">
            <AccountCircleIcon />
                <div className="info">
                    <p>Dog Yanoljang</p>
                    <small>9 wins 5 losses (64.3%)</small>
                </div>
            </div>
            <h2>1,630,765,798</h2>
        </div>

        <div className="ranks">
            <h5 className="rank4">4th</h5>
            <div className="rank__info">
            <AccountCircleIcon />
                <div className="info">
                    <p>Dog Yanoljang</p>
                    <small>9 wins 5 losses (64.3%)</small>
                </div>
            </div>
            <h2>1,630,765,798</h2>
        </div>

        <div className="ranks">
            <h5 className="rank5">5th</h5>
            <div className="rank__info">
            <AccountCircleIcon />
                <div className="info">
                    <p>Dog Yanoljang</p>
                    <small>9 wins 5 losses (64.3%)</small>
                </div>
            </div>
            <h2>1,630,765,798</h2>
        </div>
            </div>
            
            </div>


            <div className="dashboard__graph">
                <div className="graph__left">
                </div>

                <div className="graph__left">
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard

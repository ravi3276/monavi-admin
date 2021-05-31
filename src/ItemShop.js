import React from 'react'
import './ItemShop.css'
import SearchIcon from '@material-ui/icons/Search';
import TelegramIcon from '@material-ui/icons/Telegram';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import Footer from './Footer';

function ItemShop() {
    return (
        <div className="itemshop">
            <h1>All Items</h1>

            <div className="itemshop__search">
            <div className="search__left">
            <h5>Show</h5>
            <input type="number" value="25" name="quantity" min="1" max="30" />
            <p>Entries</p>
            </div>

            <div className="search__right">
            <SearchIcon />
            <input type="text" placeholder="Search"/>
            </div>

            </div>
            
            <div className="item__btn">
            <button>Add Items</button>
            </div>

            <div className="itemshop__body">
                <div className="itemshop__body1">
                    <TelegramIcon className="itemshop__icon"/>
                    <p className="title">Send random Game Point message</p>

                    <p>Randomly send 10,00,00,000 Game Point messages to 1,000 people</p>
                    <h3>9 00 000 000 GP</h3>

                    <div className="itemshop__form">
                    <input type="number" value="25" name="quantity" min="1" max="30" />
                    <button>Buy</button>
                    </div>
                </div>

                <div className="itemshop__body1">
                    <AccountBoxIcon className="itemshop__icon"/>
                    <p className="title">Right to change profile picture</p>

                    <p>Profile picture can be changed</p>
                    <div className="itemshop__cost">
                    <StarIcon />
                    <h3>8 000 000 GP</h3>
                    </div>

                    <div className="itemshop__form">
                    <input type="number" value="25" name="quantity" min="1" max="30" />
                    <button>Buy</button>
                    </div>
                </div>

                <div className="itemshop__body1">
                    <PersonIcon className="itemshop__icon"/>
                    <p className="title">Right to change profile picture</p>

                    <p>Profile picture can be changed</p>
                    <div className="itemshop__cost">
                    <StarIcon />
                    <h3>8 000 000 GP</h3>
                    </div>

                    <div className="itemshop__form">
                    <input type="number" value="25" name="quantity" min="1" max="30" />
                    <button>Buy</button>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default ItemShop

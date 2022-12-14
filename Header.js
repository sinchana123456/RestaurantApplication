import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/non veg.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SiLaKsHaN FoodZie</h1>
        {<HeaderCartButton />}
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food for Non-Veg Lovers!' />
      </div>
    </Fragment>
  );
};

export default Header;
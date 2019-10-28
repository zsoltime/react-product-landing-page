import React, { Component } from 'react';
import styles from "./Main.module.css";
import ProductFeatures from '../Sections/ProductFeatures/ProductFeatures';
import EmailForm from '../Sections/EmailForm/EmailForm';
import Pricing from '../Sections/Pricing/Pricing'
import Video from '../Sections/Video/Video';

class Main extends Component {
    render() {
        return (
            <div className={styles.main}>
                <ProductFeatures/>
                <EmailForm />
                <Pricing />
                <Video />
            </div>
        )
    }
}

export default Main

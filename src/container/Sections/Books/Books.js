import React from 'react';
import nyt from '../../API/NewYorkTimes';
import Loader from "../../../components/Loader/Loader";
import BookGroup from "./BookGroup.js";
import styles from './Books.module.css';
class Books extends React.Component {
  state = {
    books: null
  };
  componentDidMount() {
    const getResponseFromNYT = async () => {
      let response = await nyt;
      let allBookLists = response.data.results.lists;
      this.setState({
        books: allBookLists
      });
    };
    getResponseFromNYT();
  }

  render() {
    return (
      <section id="books" className={styles["books-section"]}>
        <h2>Latest Books</h2>
        {!this.state.books ? (
          <Loader />
        ) : (
          <BookGroup books={this.state.books} />
        )}
      </section>
    );
  }
}

export default Books;

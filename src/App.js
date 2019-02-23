import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export class App extends Component {
  state = {
    data: {},
    display: false,
  };

  componentDidMount() {
    axios.get('https://test-zypher.herokuapp.com/test/test').then(response => {
      this.setState({
        data: response.data,
        display: true,
      });
    });
  }

  render() {
    let { authors, themes, category } = this.state.data;
    console.log(authors);
    return this.state.display ? (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3" />
            <div className="col-md-6">
              <div className="row row-bordered">
                <div className="menu" />
                <div className="menu" />
                <div className="menu" style={{ paddingRight: '5px' }} />
                <div className="col-xs-10">#zypher</div>
                <span
                  className="glyphicon glyphicon-search"
                  style={{ paddingRight: '5px' }}
                />
                <i className="fa fa-bell" style={{ paddingRight: '5px' }} />
                <i
                  className="far fa-bookmark"
                  style={{ paddingRight: '5px' }}
                />
                <i
                  className="fa fa-shopping-bag col-mb-3"
                  style={{ paddingRight: '5px' }}
                />
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt="Avatar"
                  className="avatar"
                />
              </div>
              <h4>Authors</h4>
              <div className="row">
                <div className="col-md-12">
                  <ul className="horizontal-slide">
                    {authors.map(author => {
                      return (
                        <li className="col-md-3">
                          <img
                            className="img-circle"
                            alt="Cinque Terre"
                            width="50"
                            height="80"
                            src={author.authorImageURL}
                          />
                          <h6>{author.authorName}</h6>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <h4>Popular Vacations</h4>
              <div className="row">
                <div className="col-md-12">
                  <ul className="horizontal-slide">
                    {themes.map(theme => {
                      return (
                        <li className="col-md-5 ">
                          <img
                            className="img-rounded "
                            alt="Cinque Terre"
                            width="100"
                            height="60"
                            src={theme.themeImageURL}
                          />
                          <div>
                            <span>{theme.themeName.slice(0, 9)}</span>
                            <br />
                            <span>{theme.themeName.slice(9)}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <h4 className="text-center">Explore By Category</h4>
              <div className="row">
                <div className="col-md-12">
                  <ul className="horizontal-slide">
                    {category.map(category => {
                      return (
                        <li className="col-md-4">
                          <div
                            className="card img-fluid"
                            style={{ width: '250px' }}
                          >
                            <div className="card-img-overlay">
                              <h6 className="card-title text-center">
                                {category.categoryName}
                              </h6>
                            </div>
                            <img
                              className="card-img-top"
                              src={category.categoryImageURL}
                              alt="Card image"
                              style={{ width: '100%' }}
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    ) : null;
  }
}


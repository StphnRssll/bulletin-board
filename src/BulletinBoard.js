import React, { Component } from 'react';
import Post from './Post'

class BulletinBoard extends Component {
  render() {
    return (
      <div>
        <div className="steve" id="steve">
          <h3>Steve's posts!</h3>
          <div className="posts">
            <Post
              title="Interneting Is Hard"
              description="Helpful for understanding the basics of HTML and CSS!"
              link="https://www.internetingishard.com/"
            /><Post
              title="CSS Tricks"
              description="Very helpful guides for using CSS!"
              link="https://www.internetingishard.com/"
            />
          </div>
        </div>
        <div className="alice" id="alice">
          <h3>Alice's posts!</h3>
          <div className="posts">
            <Post
              title="React Docs"
              description="Very simple documentation with helpful examples"
              link="https://reactjs.org//"
            /><Post
              title="TraceCamp Resources Page"
              description="Full of design inspiration and resources"
              link="https://www.notion.so/Web-Resources-8ec50d83ca824867b819774fb2d7e6cb/"
            />
          </div>
        </div>
        <div className="bob" id="bob">
          <h3>Bob's posts!</h3>
          <div className="posts">
            <Post
              title="Interneting Is Hard"
              description="Helpful for understanding the basics of HTML and CSS!"
              link="https://www.internetingishard.com/"
            /><Post
              title="Interneting Is Hard"
              description="Helpful for understanding the basics of HTML and CSS!"
              link="https://www.internetingishard.com/"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BulletinBoard;

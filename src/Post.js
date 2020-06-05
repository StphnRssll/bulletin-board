import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default class Post extends Component {
  static defaultProps = {
    title: "Title",
    description: "Description",
    link: ""
  }
  render() {
    return (
      <div className="post">
        <Card bg="warning">
          <Card.Img />
          <h2>📌</h2>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button variant="primary" href={this.props.link}>Link</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

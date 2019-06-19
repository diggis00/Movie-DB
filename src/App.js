import React from "react";
import { Card, Row, Col, Pagination } from "antd";
import axios from "axios";

const { Meta } = Card;

export default class App extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=50`).then(res => {
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div>
        <Row>
          {this.state.persons.map((person, keys) => (
            <div key={keys}>
              <Col span={4}>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={<img alt="example" src={person.picture.large} />}
                >
                  <Meta
                    title={person.name.first + " " + person.name.last}
                    description={person.phone}
                  />
                </Card>
              </Col>
            </div>
          ))}
        </Row>
        <Pagination defaultCurrent={6} total={500} />
      </div>
    );
  }
}

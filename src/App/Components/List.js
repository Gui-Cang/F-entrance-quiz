import React from 'react';

const urlList = 'http://localhost:8080/students';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: {}
    };
  };

  componentDidMount() {
    this.getStudentList();
  }

  getStudentList = () => {
    fetch(urlList)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (<div>
      <h2>list from back-end</h2>
      {/*TODO GTB-知识点: - 在didMount中触发请求数据，而不是template*/}
      <p>{this.getStudentList()}</p>
    </div>);
  }
}

export default List;

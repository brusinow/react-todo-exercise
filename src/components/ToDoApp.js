import React from 'react';
import List from './List';
import Input from './Input';

class ToDoApp extends React.Component {

  componentWillMount(){
    this.setState({
      list: ['item1', 'item2', 'item3']
    })
  };
  onInputChange = (event) => {
  this.setState({ newToDo: event.target.value}); // updates state to new value when user changes the input value
  };

  render(){
    console.log('state', this.state)
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr/>
              <List listItems={this.state.list} />
              <Input/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoApp;
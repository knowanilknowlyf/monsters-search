import React, { Component } from 'react'
import CardList from './components/card-list/CardList.component.jsx';
import SearchBox from './components/search-box/SearchBox.jsx';
import './App.css';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchString: ''
    }
  }
  componentDidMount() {
    let data = []
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        data = users;
        this.setState(() => {
          return { users: users }
        })
      })
  }
  searchMonster = (e) => {
    this.setState(() => {
      return { searchString: e.target.value.toLowerCase() }
    })

  }
  render() {
    console.log('rendered')
    const {users,searchString}=this.state
    let dataU = users.filter(user => user.name.toLowerCase().includes(searchString))
    return (
      <div className="App">
       
        {/* {dataU.map((mon => <div key={mon.id}><h1 >{mon.name}</h1></div>))} */}
        <SearchBox onChangeHandler={this.searchMonster}/>
        <CardList users={dataU}/>
      </div>
    )
  }
}

export default App


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

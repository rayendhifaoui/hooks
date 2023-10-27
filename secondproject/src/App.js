import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    person: {
      fullName: "Oussama Rguez",
      bio: "nothing",
      imgSrc: logo,
      profession: "Network Adminstrator",
    },
    show: false,
    interval: 0,
    timer: null,
  };
  enzel = () => {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  };

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({ interval: this.state.interval + 1 });
      }, 1000),
    });
  }

  render() {
    return (
      <div className="App">
        <h2> The time since launch {this.state.interval}</h2>

        {this.state.show ? (
          <>
            <h2>Full name: {this.state.person.fullName}</h2>
            <h2>Bio: {this.state.person.bio}</h2>
            <img src={this.state.person.imgSrc} alt="n/a" width={80} />
            <h2>Profession: {this.state.person.profession}</h2>
            <button onClick={this.enzel}>Hide</button>
          </>
        ) : (
          <button onClick={this.enzel}>Show</button>
        )}
      </div>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import React from 'react';

// class App extends React.Component {
//   state={
//     person:{fullName: 'Oussama Rguez', bio: 'nothing', imgSrc: logo, profession: 'Network Adminstrator'},
//     show: false,
//     mountedTime: null,
//     intervalId: null
//   }

//   componentDidMount() {
//     const now = new Date().getTime();
//     const intervalId = setInterval(() => {
//       const mountedTime = new Date().getTime() - now;
//       this.setState({ mountedTime });
//     }, 1000);
//     this.setState({ mountedTime: 0, intervalId });
//   }

//   componentWillUnmount() {
//     clearInterval(this.state.intervalId);
//   }

//   toggleShow = () => {
//     this.setState(prevState => ({ show: !prevState.show }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <h2>Time since mounted: {this.state.mountedTime / 1000} seconds</h2>
//         {this.state.show ? (
//           <>
//             <h2>Full name: {this.state.person.fullName}</h2>
//             <h2>Bio: {this.state.person.bio}</h2>
//             <img src={this.state.person.imgSrc} alt="n/a" width={80} />
//             <h2>Profession: {this.state.person.profession}</h2>
//             <button onClick={this.toggleShow}>Hide</button>
//           </>
//         ) : (
//           <button onClick={this.toggleShow}>Show</button>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

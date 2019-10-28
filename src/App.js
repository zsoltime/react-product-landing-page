import React,{Component} from 'react';
import Navbar from  './components/Navbar/Navbar';
import SideBar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop';
import Main from './container/Main/Main';
import Footer from './components/Footer/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faBars, faTimes)

class App extends Component{
  state={
    isSideBarVisible : false
  }
  onHamburgerClick=()=>{
    this.setState(prev=>{
      return{
        isSideBarVisible:!prev.isSideBarVisible
      }
    }
    )
  }
  onCloseButtonClick = () => {
    this.setState({
      isSideBarVisible: false
    });
  };
  render(){
    return (
      <div>
        <Navbar onHamclick={this.onHamburgerClick}/>
        <SideBar
          show={this.state.isSideBarVisible}
          onCloseButtonClick={this.onCloseButtonClick}
        />
        {this.state.isSideBarVisible && (
          <Backdrop onclick={this.onCloseButtonClick} />
        )}
        <Main />
        <Footer />
      </div>
    );
  }
  
}

export default App;

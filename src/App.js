import React, { Component } from 'react';
import MenuKontak from './page/MenuKontak'
import MenuProduct from './page/MenuProduct'
import MenuTentangKami from './page/MenuTentangKami'
import MenuUtama from './page/MenuUtama'

const Header = () => {
  return(
    <h1>Ini Halaman Untuk Header</h1>
  )
}
const Footer = () => {
  return(
    <h1>Ini Halaman Untuk Footer</h1>
  )
}
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}

export default App;

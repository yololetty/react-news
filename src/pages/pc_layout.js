import React from 'react';
import PCHeader from '../components/pc_header';
import PCFooter from '../components/pc_footer';
export default class Layout extends React.Component {
  render() {
    return (
      <div className="pcContainer">
        <PCHeader></PCHeader>
        <PCFooter></PCFooter>
      </div>
    )
  }
}
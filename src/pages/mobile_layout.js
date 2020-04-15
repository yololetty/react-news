import React from 'react';
import MobileHeader from '../components/mobile_header';
import MobileFooter from '../components/mobile_footer';
export default class MobileLayout extends React.Component {
  render() {
    return (
      <div className="mobileContainer">
        <MobileHeader />
        <MobileFooter></MobileFooter>
      </div>
    )
  }
}
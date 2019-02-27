import React from 'react';
import style from '../../../style';

class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex', paddingTop: '15px' }}>
        {this.props.doodles[this.props.index + 4]}
        <div style={style.boldText}>{this.props.title}</div>
      </div>
      <div style={style.subText}>
        {
          this.props.rest[this.props.restFields[this.props.index]]
        }
      </div>
    </div>
    );
  }
}

export default RestaurantInfo;

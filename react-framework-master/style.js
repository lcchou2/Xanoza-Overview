const style = {
  boldText: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    paddingLeft: '5px',
  },
  subText: {
    display: 'flex',
    justifyContent: 'left',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    paddingLeft: '29px',
    fontFamily: 'Arial'
  },
  googleMap: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #d8d9db',
    borderRadius: '4px',
    padding: '.25rem .25rem .5rem',
  },
  padTop: {
    display: 'flex', 
    paddingTop: '15px'
  },
  viewMore: {
    display: 'flex',
    justifyContent: 'left',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    color: '#da3743',
    fontFamily: 'BlinkMacSystemFont',
    paddingTop: "15px",
    cursor: "pointer",
  },
  website: {
    //display: this.state.showMore ? 'flex' : 'none',
    justifyContent: 'left',
    fontSize: '14px',
    color: '#da3743',
    fontWeight: '400',
    lineHeight: '20px',
    paddingLeft: '29px',
    cursor: "pointer",
    // textDecoration: this.state.hoverWebsite ? 'underline' : 'none',

  },
  neighborhood: {
    display: 'flex',
    justifyContent: 'left',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    paddingLeft: '29px',
    cursor: "pointer",
    // textDecoration: this.state.hoverNeighbor ? 'underline' : 'none',
  },
  address: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    paddingLeft: '5px',
    color: '#da3743',
    fontFamily: 'BlinkMacSystemFont',
    // textDecoration: this.state.hover ? 'underline' : 'none',
  }
}

export default style
import React from 'react';

class AccordionCustom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      accordionHeight: 0,
    }

  }

  componentDidMount() {
    this.setState({isOpen: false, accordionHeight: 0})
   }

  toggle = () => {
    if(!this.state.isOpen) {
      this.setState({
        isOpen: true,
        accordionHeight: "8rem"
      });
    }
    else {
      this.setState({
        isOpen: false,
        accordionHeight: 0
      });
    }
  }

  render() {
    return (
      <div className="post">
      <div>
      <button className="post-head" onClick={this.toggle}>
      {this.props.title}
      </button>
        <div className="smooth" style={{height: this.state.accordionHeight}}>
          <div>
          {this.props.description.map(entry => {
            return <div> {entry} </div>
          })}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default AccordionCustom;

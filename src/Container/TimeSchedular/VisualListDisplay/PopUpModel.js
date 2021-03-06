import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap'
import Popover from 'react-simple-popover';
import './VisualListDisplay.css'

class PopUpModel extends Component {
    state = {
        open: false
      };
      handleClick(e) {
        this.setState({open: !this.state.open});
      }
     
      handleClose(e) {
        this.setState({open: false});
      }
    render(){

        return(
            <div>
                 <div className={this.props.appointclass} ref="target" onClick={this.handleClick.bind(this)} style={{backgroundColor:this.props.appointcolor}} onMouseOver={this.props.mouseover} onMouseOut={this.props.mouseout} >
                   {this.props.appointId}
        
                   </div>
        <Popover
          placement='bottom'
          style={{color:"black",width:"150%",height:"100px"}}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)}
          hideWithOutsideClick={this.state.open}>
                 
                    <Row>
                            <Col sm={6}>Activity Time:</Col><Col sm={4}>
                             {(this.props.appointinfo.timeSpan.startSpan.hour)%12}:{this.props.appointinfo.timeSpan.startSpan.minutes}{"  "}{(this.props.appointinfo.timeSpan.startSpan.hour)>=12 ? "PM":"AM"}
                                -
                                {(this.props.appointinfo.timeSpan.endSpan.hour)%12}:{this.props.appointinfo.timeSpan.endSpan.minutes}{"  "}{(this.props.appointinfo.timeSpan.endSpan.hour)>=12 ? "PM":"AM"}
                           </Col>
                    </Row>

        </Popover>
      </div>
        )


}
}
export default PopUpModel;
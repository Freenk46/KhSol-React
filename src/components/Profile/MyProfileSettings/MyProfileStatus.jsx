import React from "react";

class MyProfileStatus extends React.Component {

   state = {
      editMode: false
      ,
      status: this.props.status
   }
   activateEditMode = () => {
      this.setState({ editMode: true });
   }
   deActivateEditMode = (status) => {
      this.setState({ editMode: false });
      this.props.UpdateProfileStatus(this.state.status)
   }
   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      });
   }
   render() {
      return (
         <div>
            {!this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
               </div>
            }
         </div >
      );
   }
}
export default MyProfileStatus;
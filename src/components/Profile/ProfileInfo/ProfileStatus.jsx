import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({editMode:true}); //setState - async
    };
    deActivateEditMode = () => {
        this.setState({editMode:false}); //setState - async
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )
    };
}


export default ProfileStatus;
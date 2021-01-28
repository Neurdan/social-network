import React from 'react';

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    activateEditMode = () => {
        this.setState(
            {editMode: true}
        );
    }

    deactivateEditMode = () => {
        this.setState(
            {editMode: false}
        );
        this.props.updateUserStatus(this.state.status);
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status,
            })
    }

    render() {
        return <div>
            {!this.state.editMode
                ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                </div>
                :
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>}
        </div>
    }
}
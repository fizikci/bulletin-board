import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'

class Note extends Component {

    constructor(props){
        super(props)
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
    }

    edit(){
        alert('editing')
    }
    remove(){
        alert('removing')
    }

    render(){
        return (
            <div className="note">
                <p>Learn React</p>
                <span>
                    <button id="edit" onClick={this.edit}><FaPencil/></button>
                    <button id="remove" onClick={this.remove}><FaTrash/></button>
                </span>
            </div>
        )
    }

}

export default Note
import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component {

    constructor(props){
        super(props)
        this.state = {editing:false}
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.save = this.save.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderHtml = this.renderHtml.bind(this)
    }

    edit(){
        this.setState({editing:true})
    }
    save(){
        alert(this._newText.value)
        this.setState({editing:false})
    }
    remove(){
        alert('removing')
    }

    renderForm(){
        return (
            <div className="note">
                <form>
                    <textarea ref={input => this._newText = input}/>
                    <button id="save" onClick={this.save}><FaFloppyO/></button>
                </form>
            </div>
        )                
    }
    renderHtml(){
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button id="edit" onClick={this.edit}><FaPencil/></button>
                    <button id="remove" onClick={this.remove}><FaTrash/></button>
                </span>
            </div>
        )        
    }
    render(){
        return this.state.editing ? this.renderForm() : this.renderHtml()
    }

}

export default Note
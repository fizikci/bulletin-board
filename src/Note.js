import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'
import FaClose from 'react-icons/lib/fa/close'


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

    componentWillMount() {
		this.style = {
			right: this.randomBetween(0, window.innerWidth - 150, 'px'),
			top: this.randomBetween(0, window.innerHeight - 150, 'px'),
			transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
		}
	}

	randomBetween(x, y, s) {
		return x + Math.ceil(Math.random() * (y-x)) + s
	}

    componentDidUpdate() {
		if(this.state.editing) {
			this._newText.focus()
			this._newText.select()
		}

	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.children !== nextProps.children || this.state !== nextState
		)
	}

    edit(){
        this.setState({editing:true})
    }
    save(e){
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.id)
        this.setState({editing:false})
    }
    remove(){
        this.props.onRemove(this.props.id)
    }

    renderForm(){
        return (
            <div className="note" style={this.style}>
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newText = input} defaultValue={this.props.children}/>
                    <button id="save"><FaFloppyO/></button>
                    <button><FaClose/></button>
                </form>
            </div>
        )                
    }
    renderHtml(){
        return (
            <div className="note" style={this.style}>
                <p>{this.props.id}. {this.props.children}</p>
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
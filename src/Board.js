import React, {Component} from 'react'
import Note from './Note'

class Board extends Component{

    constructor(props){
        super(props)
        this.state = {
            notes: [
                {id:33, note:'Order printer ink'},
                {id:34, note:'Email John'},
                {id:35, note:'Start Givery project'}
            ]
        }
        this.eachNote = this.eachNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
        this.removeNote = this.removeNote.bind(this)
    }

    updateNote(newText, id){
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== id) ? note : {...note, note: newText}
			)
		}))
    }

    removeNote(id){
		this.setState(prevState => ({
			notes: prevState.notes.filter(note => note.id!==id)
		}))
    }

    eachNote(note){
        return (
            <Note key={note.id} id={note.id} onChange={this.updateNote} onRemove={this.removeNote}>{note.note}</Note>
        )
    }

    render(){
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }

}

export default Board
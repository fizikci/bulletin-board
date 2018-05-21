import React, {Component} from 'react'
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'

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
        this.addNote = this.addNote.bind(this)
    }

    addNote(){
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {id: prevState.notes.reduce((acc,curr) => Math.max(acc, curr.id),0)+1 , note:'New Note', editing:true}
            ]
        }))
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
                <button id="add" onClick={this.addNote}><FaPlus/></button>
            </div>
        )
    }

}

export default Board
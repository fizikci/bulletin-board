import React, {Component} from 'react'
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component{

    constructor(props){
        super(props)
        this.state = {
            notes: []
        }
        this.eachNote = this.eachNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
        this.removeNote = this.removeNote.bind(this)
        this.addNote = this.addNote.bind(this)
    }

    componentWillMount(){
        if(!this.props.count)
            return;

        var self = this;
        
        fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
            .then(res => res.json())
            .then(res => res[0]
                .split('. ')
                .forEach(s => self.addNote(s.substring(0,25))))
    }

    addNote(txt){
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {id: prevState.notes.reduce((acc,curr) => Math.max(acc, curr.id),0)+1 , note:txt||'New Note'}
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
			notes: prevState.notes.filter(note => note.id !== id)
		}))
    }

    eachNote(note){
        return (
            <Note 
                    key={note.id} 
                    id={note.id} 
                    onChange={this.updateNote} 
                    onRemove={this.removeNote}>
                {note.note}
            </Note>
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
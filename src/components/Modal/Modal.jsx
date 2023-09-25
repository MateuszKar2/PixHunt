import React,{Component} from "react"
import css from "./Modal.module.css"

class Modal extends Component {
     
    
    
    render() {
        return(
            <div class={css.overlay}>
                <div class={css.modal}>
                    <img src="" alt="" />
                </div>
            </div>
        )
     }
}

export default Modal
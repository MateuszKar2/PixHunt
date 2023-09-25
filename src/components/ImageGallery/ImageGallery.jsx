import React,{Component} from "react"
import css from "./ImageGallery.module.css"


class ImageGallery extends Component {

    render() {
        return(
            <ul class={css.gallery}>
            </ul>
        )
    }
}

export default ImageGallery;
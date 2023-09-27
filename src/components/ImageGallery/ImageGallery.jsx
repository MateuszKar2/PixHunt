import React,{Component} from "react";
import css from "./ImageGallery.module.css";
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem';


export class ImageGallery extends Component {
    onClickHandle = i => {
        return e => {
            e.preventDefault();
            this.props.stateUpdate('modalIndex', i);
        };
    };
    render() {
        return(
            <ul className={css.ImageGallery}>
                {this.props.gallery.map((img, i) => {
                    <ImageGalleryItem
                        key={nanoid()}
                        id={img.id}
                        miniature={img.miniature}
                        url={img.url}
                        alt={img.tags}
                        onClick={this.onClickHandle(i)}
                    />
                })}
            </ul>
        )
    }
}

ImageGallery.propTypes = {
    gallery: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            url: PropTypes.string,
            miniature: PropTypes.string,
            alt: PropTypes.string,
        })
    ).isRequired,
    stateUpdate: PropTypes.func.isRequired,
};
import React,{Component} from "react"
import css from "./Searchbar.module.css"


class Seachbar extends Component {
    render() {
        return(
<header class={css.searchbar}>
  <form class={css.form}>
    <button type="submit" class="button">
      <span class={css.buttonLabel}>Search</span>
    </button>

    <input
      class={css.input}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}

export default Seachbar
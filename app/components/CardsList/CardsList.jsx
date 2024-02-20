import Styles from './CardsList.module.css'
import {NewCardsListFragment} from './NewCardsListFragment'
import {PopularCardsFragment } from './PopularCardsFragment'

export const CardsList =function(props) {
    return ( 
      <section className={Styles['list-section']}>
      <h2 className={Styles['list-section__title']} id={props.id}>
      {props.id === "popular" && 'Популярные'}
      {props.id === "new" && 'Новинки'}        
      </h2>
      <ul className={Styles['cards-list']}>
      {props.id === "popular" && <PopularCardsFragment />}
      {props.id === "new" && <NewCardsListFragment />}

      </ul>
    </section>
    ) }
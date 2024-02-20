import Styles from './CardsList.module.css'
import {NewCardsListFragment} from './NewCardsListFragment'

export const NewCardsList = ()=> {
    return ( 
      <section className={Styles['list-section']}>
      <h2 className={Styles['list-section__title']} id="new">
        Новинки
      </h2>
      <ul className={Styles['cards-list']}>
<NewCardsListFragment />
      </ul>
    </section>
    ) }
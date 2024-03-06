import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App() {
   return (
      <>
         <section className='App'>
            <TwitterFollowCard name={'Freider Torres'} userName={'kyaro'} />
            <TwitterFollowCard name={'Esteban Barboza'} userName={'dro'} />
            <TwitterFollowCard name={'Jesús Barajas'} userName={'ngenko'} />
            <TwitterFollowCard name={'Melani Tirado'} userName={`melani`} />
         </section>
      </>
   )
}
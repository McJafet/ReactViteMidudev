import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App () {

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Durán',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pedro H',
            isFollowing: false
        },
        {
            userName: 'umihyu',
            name: 'Stephanie Sheryl',
            isFollowing: true
        },
        {
            userName: 'sandraskins',
            name: 'Sandra Skins',
            isFollowing: false
        }
    ]


    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}                            
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
            {/* <TwitterFollowCard  userName={'midudev'} initialIsFollowing={true}>
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard  isFollowing userName={"pheralb"}>
                Pedro Ralf
            </TwitterFollowCard> */}
        </section>
    )
}
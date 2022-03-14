
import Navbar from '../../components/navbar/navbar'
import "./stories.scss";
import StoriesComp from "../../components/storiesComponent/storiesComp";
interface Prop {
    name: string;
    description: string;
}
function Stories() {
    const stories: Array<Prop> = [{
        name: 'Sara', description: "Sara hart has a fulfilling job with the Website which provides emergency accommodation and support to women and children. Almost 20 years ago, Savita was hospitalised for three months after her then husband doused her in turpentine and set her on fire. She suffered horrific injuries – but it was in the hospital that she realised for the first time she could leave her abuser, thanks to the vigilance of this website. She says she received excellent support and that it is possible to find happiness after abuse"
    },
    {
        name: 'Rohita', description: 'Rohita Devi is the author of Carving A Piece of Heaven, which documents her leaving story after almost two decades of being physically and emotionally abused. Namgay now works voluntarily with the ShoutUp, to lobby the government for policies to speed up recovery for victims.It became possible only because of ShoutUp website which led the Druk in the right direction and gave her support',
    },

    {
        name: 'Aayushi', description: 'Ayushi Srivastava runs horse workshops for troubled Indigenous youth, where she teaches them to care for and interact with the animals, and learn to give and receive trust. She is now expanding the program and hopes to bring adults with addiction problems into the program. She began the horse therapy clinics after leaving a violent relationship with the help of ShoutUp',
    }]

    return (
        <div className='stories'>
            <Navbar />
            <div className='stories__container'>
                <div className="stories__container__title">Success Stories</div>
                <div className="stories__container__grid">
                    {stories.map((story, index) => {
                        return <StoriesComp key={index} name={story.name} description={story.description}></StoriesComp>
                    })}
                </div>
            </div>
        </div >
    )

}
export default Stories;
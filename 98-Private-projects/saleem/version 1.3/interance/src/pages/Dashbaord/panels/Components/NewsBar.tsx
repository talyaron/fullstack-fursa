import react from 'react'
import { useIntl } from 'react-intl';
import "./style/NewsBar.scss"

export function NewsBar(){
    let postsData = [{src:"https://shanghai-paper.com/wp-content/uploads/2020/06/Beer-in-China.jpg",
                        post:"Today we doing a beer break at 13:00",person:"john",time:"10 min ago"},
                        {src:"https://d39eazhratf38c.cloudfront.net/Pictures/1024x536/0/8/1/60081_155787_29801.jpg",
                        post:"Global meeting at conferrence room 5",person:"Boss",time:"yesterday"},
                        {src:"https://weelicious.com/imager/weelicious_com/wp-content/uploads/2015/09/School-Lunch-Inspiration_1b74faffbe944b0675f0e20473d3ad34.jpg",
                        post:"lunch invitiation today come and eat with us",person:"HR",time:"30 min ago"},
                        {src:"https://shanghai-paper.com/wp-content/uploads/2020/06/Beer-in-China.jpg",
                        post:"Today we doing a beer break at 13:00",person:"john",time:"10 min ago"},
                        {src:"https://d39eazhratf38c.cloudfront.net/Pictures/1024x536/0/8/1/60081_155787_29801.jpg",
                        post:"Global meeting at conferrence room 5",person:"Boss",time:"yesterday"},
                        ]
    return(
        <div className='news'>
            <div className='newTitle'>
                <h2>
               { useIntl().formatMessage({ id: 'Yourfriendshadposted' })}
                </h2>
            </div>
        <main>
  <div className="newscontainer">
    {postsData.map(function(item, i){
  console.log('test');
  return (
    <article className="card shadow">
    <div>
      <img src={item.src} alt="image"/>
    </div>

    <div>
      <p><strong>{item.post}</strong></p>
      <span>
        <i className="fab fa-instagram"></i>
         {item.person} -<time>{item.time}</time>
       </span>
    </div>
  </article>
  )
})}
    
    
  </div>
</main></div>
    
    )
}
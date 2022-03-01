const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('client/build'));
app.use(express.json());
//data
const Restaurants = [{
    "id": "1", "name": "shila-sharon cohen Kitchen & bar", "image": "https://media-cdn.tripadvisor.com/media/photo-s/03/7a/47/6d/shila.jpg", "booking": 27, "region": "Israel",
    "city": "TelAviv", "stars": 5, "category": "bar", "open": "4:00pm", "close": "2:00am",
    "description": "We feature fresh, innovated cuisine that is locally sourced when possible including grass-fed beef, and many gluten-free, vegetarian and vegan options.",
    "subCategory": ["Serves alcohol", "Dinner", "Casual", "Cash", "Credit Cards"],
    "photos": [
        "https://i.pinimg.com/736x/4b/06/c8/4b06c812537fc655c3c0bfaed6b37538.jpg",
        "https://baranowitz-goldberg.com/wp-content/uploads/2017/04/SHILA_REST_020.jpg"
    ]
},
{
    "id": "2", "name": "Cafe Popular", "image": "https://cdn.archilovers.com/projects/c_383_f83bb625-ff28-414b-a700-8e4bebde941b.jpg", "booking": 22,
    "region": "Israel", "city": "TelAviv", "stars": 4, "category": "cafe", "open": "12:00am", "close": "1:00am",
    "description": "Cafe Popular is a House of Fun. The place is spread over two floors in the Jacob Samuel boutique hotel, at the intersection of Dizengoff-Arlozorov streets.",
    "subCategory": ["Serves alcohol", "lunch", "Cash", "outdoor Seating", "Dinner", "Special Occasion"],
    "photos": [
        "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/be/4d/doun-stairvibe.jpg",
        "https://cdn.thespaces.com/wp-content/uploads/2018/12/claro-photo-by-afik-gbay-2-%D7%A2%D7%95%D7%AA%D7%A7.jpg"
    ]
},
{
    "id": "3", "name": "Taizu", "image": "https://bestrest.rest/wp-content/uploads/2019/05/TAIZU_017.jpg", "booking": 20, "region": "Israel", "city": "TelAviv",
    "stars": 5, "category": "bar", "open": "6:00pm", "close": "3:00am",
    "description": "Contemporary restaurant serving specialty cocktails & Southeast Asian street food with a twist.",
    "subCategory": ["Take Away", "Serves alcohol", "Sea Food", "indian Food", "Brunch", "Dinner"],
    "photos": [
        "https://d23qgbgns5g2dp.cloudfront.net/wp-content/uploads/2019/09/THUMB-Taizu.jpg",
        "https://eatintlv.com/wp-content/uploads/2017/07/taizu1.jpg"
    ]
},
{
    "id": "4", "name": "La Regence", "image": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/399693", "booking": 5,
    "region": "Israel", "city": "Jerusalem", "stars": 5, "category": "fine dining", "open": "1:00pm", "close": "11:00pm", "description": "",
    "subCategory": ["Dinner", "Serves alcohol", "Credit Cards", "Special Occasion", "Cash", "Credit Cards"],
    "photos": [
        "https://www.booster2success.com/wp-content/uploads/2020/09/Image-2-restaurant-caf%C3%A9-la-r%C3%A9gence.jpg",
        "https://media.timeout.com/images/105331194/750/422/image.jpg"
    ]
},
{
    "id": "5", "name": "Hakosem", "image": "https://cdn.istores.co.il/image/upload/if_ar_gt_2:1/c_fill,h_662,w_555/c_fill,h_662,w_555/if_else/c_fill,q_100,w_555/if_end/dpr_2/v1614106887/clients/109701/5e9b9717137eea988b88592d0861cc3a64d59fcd.jpg", "booking": 15,
    "region": "Israel", "city": "TelAviv", "stars": 4, "category": "fast food", "open": "9:00am", "close": "10:00pm",
    "description": "",
    "subCategory": [],
    "photos": [
        "https://media-cdn.tripadvisor.com/media/photo-s/12/c1/e3/f3/falafel-hakosem-tel-aviv.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/0f/91/a6/b4/caption.jpg"
    ]
},
{
    "id": "6", "name": "Scarlet Green", "image": "https://media-cdn.tripadvisor.com/media/photo-s/13/22/fb/b1/bar.jpg", "booking": 33,
    "region": "UK", "city": "London", "stars": 5, "category": "fast food", "open": "9:00am", "close": "12:00pm",
    "description": "Spend intimate evenings chatting and indulging in our ‘Scarlett Nights’ menu; our BBQ meat board featuring an HG Walter prime lamb tomahawk, 28 day dry aged onglet steak, our fennel, chilli and herb sausages, and smoky BBQ back ribs. Alternatively, our vegan board featuring a smoky BBQ tofu steak and fire roasted veg is also a huge hit! Alongside both comes an impressive Pornstar martini fountain, choice of two sides and our famous Melbourne Mars bar cheesecake ball.",
    "subCategory": ["Outdoor Seating", "Highchairs Available", "Serves", "Alcohol", "Bar", "Free Wifi"],
    "photos": [
        "https://f3e6t7k9.stackpathcdn.com/wp-content/uploads/2018/04/scarlettgreen-loti.jpg?x94640",
        "https://media-cdn.tripadvisor.com/media/photo-s/13/22/fc/63/downstairs-main-dining.jpg"
    ]
},
{
    "id": "7", "name": "Pizza Union Aldgate", "image": "https://media-cdn.tripadvisor.com/media/photo-s/16/c7/b8/09/street-view.jpg", "booking": 70,
    "region": "UK", "city": "London", "stars": 4, "category": "fast food", "open": "2:00pm", "close": "2:00am",
    "description": "Italian pizza bar serving fire-baked Roman-style thin & crispy 12 pizzas all day. Superfast pizzas made fresh to order. Eat-in or take-away from £4.2",
    "subCategory": ["Takeout", "Outdoor Seating", "Seating", "Wheelchair Accessible", "Serves Alcohol", "Free Wifi", "Credit Cards"],
    "photos": [
        "https://d1ralsognjng37.cloudfront.net/f8a75f03-7c69-4fc9-bb2c-1cfd40ed40fa.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMw5gdGiTN8pz2NOCHs2YB43OJb9DvRg_5BQ&usqp=CAU"
    ]
},
{
    "id": "8", "name": "Revolution Parsonage Gardens", "image": "https://media-cdn.tripadvisor.com/media/photo-s/0e/26/40/34/ocean-booths.jpg", "booking": 150,
    "region": "UK", "city": "Manchester", "stars": 5, "category": "Bar", "open": "10:30am", "close": "12:00pm",
    "description": "Revolution Parsonage Gardens is centrally located within the city, great for dining in the day or nights out in Manchester. With delicious cocktails and funky DJs, no wonder it’s one of Manchester’s best-loved cocktail bars and restaurants. Step inside and experience a bright, open-plan space with plush seating to sink into, plenty of bookable areas and a big dancefloor to get your groove on. It’s the perfect place to drink, dance or lunch with friends and colleagues.",
    "subCategory": ["Seating", "Highchairs Available", "Serves Alcohol", "Full Bar", "Free Wifi", "Credit Cards", "Table Service", "Live Music"],
    "photos": [
        "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Frevs1_2100490054.jpg&action=ProductDetail",
        "https://licklist.s3-eu-west-2.amazonaws.com/images/original/000/000/073/119/432-se4ytoujycz0o3ic.jpg"
    ]
}]

const Users = [{
    "id": "1", "email": "m.zmiro@hotmail.com", "fName": "mohamed", "lName": "zmiro", "password": "123123147", "phone": "0549074119", "region": "Israel"
}]

const Favorite = []
const Reservations = []
//gets

app.get('/get-all-restaurants', (req, res) => {
    try {
        if (Restaurants)
            res.send({ Restaurants })
        else res.send({ Restaurants: [] })
    } catch (error) {
        res.send({ error });
    }

})

app.get('/get-user', (req, res) => {
    try {
        if (Users) {
            const user = req.query
            const temp = Users.filter((u: any) => {
                if (user.email === u.email && user.password === u.password)
                    return u;
            })
            if (temp.length > 0)
                res.send({ "log": true, "user": temp[0] })
            else res.send({ "log": false })
        }
        else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }

})

app.get('/get-user-favorite', (req, res) => {
    try {
        if (Favorite) {
            const { user } = req.query
            const temp = Users.filter((u: any) => {
                if (user == u.id)
                    return u;
            })
            if (temp.length > 0) {
                const fav = Favorite.filter((f: any) => {
                    if (f.userId == user)
                        return f.restId
                })
                res.send({ "log": true, "favorite": fav })
            }
            else res.send({ "log": false })
        }
        else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }

})

app.get('/get-user-reservations', (req, res) => {
    try {
        if (Reservations) {
            const { userId } = req.query
            console.log(userId)
            const temp = Users.filter((u: any) => {
                if (userId === u.id)
                    return u;
            })
            if (temp.length > 0) {
                const reservation = Reservations.filter((reserve: any) => {
                    if (reserve.userId === userId)
                        return reserve
                })
                res.send({ "log": true, "reservations": reservation })
            }
            else res.send({ "log": false })
        }
        else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }

})


//posts

app.post('/sign-up', (req, res) => {
    try {
        const user = req.body
        const temp = Users.filter((u: any) => {
            if (user.email === u.email)
                return u;
        })
        if (temp.length > 0)
            res.send({ "log": false })
        else {
            Users.push(user)
            res.send({ "log": true, "user": user })
        }
    } catch (error) {
        res.send({ error });
    }

})

app.post('/add-user-favorite', (req, res) => {
    try {
        const { userId, restId } = req.body
        const temp = Users.filter((u: any) => {
            if (userId == u.id)
                return u;
        })
        if (temp.length == 0)
            res.send({ "log": false })
        else {
            Favorite.push({ "userId": userId, "restId": restId })
            const fav = Favorite.filter((f: any) => {
                if (f.userId == userId)
                    return f.restId
            })
            res.send({ "log": true, "favorite": fav })
        }
    } catch (error) {
        res.send({ error });
    }

})

app.post('/delete-user-favorite', (req, res) => {
    try {
        const { userId, restId } = req.body
        const temp = Users.filter((u: any) => {
            if (userId == u.id)
                return u;
        })
        if (temp.length == 0)
            res.send({ "log": false })
        else {
            //remove object from here
            const fav = Favorite.filter((f: any) => {
                if (f.userId == userId)
                    return f.restId
            })
            res.send({ "log": true, "favorite": fav })
        }
    } catch (error) {
        res.send({ error });
    }

})
app.post('/add-user-reservation', (req, res) => {
    try {
        if (Reservations) {
            const { userId, restId, hour, year, min, day, month } = req.body
            const temp = Users.filter((u: any) => {
                if (userId === u.id)
                    return u;
            })
            if (temp.length > 0) {
                Reservations.push({ "id": 1, "userId": userId, "restId": restId, "hour": hour, "year": year, "min": min, "day": day, "month": month + 1 })
                const reservation = Reservations.filter((reserve: any) => {
                    if (reserve.userId === userId)
                        return reserve
                })
                console.log(day)
                res.send({ "log": true, "reservations": reservation })
            }
            else res.send({ "log": false })
        }
        else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

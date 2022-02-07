enum category {
    Action = 0,
    Comedey= 1,
    Horror = 2,
    Scifi = 3,
}

interface movie {
    id:number,
    date:Date,
    category:category
    rating?:string
    setRating(rating:string);
}



const movie:movie = {
    id:101,
    date:new Date('03-12-2022'),
    category:category.Action,
    setRating:function(rating:string){
        try {
            if (!rating.includes('stars')) {
                throw new Error("Invalid rating")
            }else{
                this.rating = rating;
            }
        } catch (error) {
            
        }
    }
}

movie.setRating('5 stars');
console.log(movie);
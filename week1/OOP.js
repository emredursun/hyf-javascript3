class Movies {

    constructor(title) {

        this.title = title;
        this.stars = [];
        this.writers = [];
        this.director = [];
        this.rate = [];
    }
    validateProperties(title) {

        if (title === '') {
            throw new Error('Add a movie title!');
        }
        if (this.director === '') {
            throw new Error('Add a director name!');
        }
    }

    getTitle() {
        return this.title
    }
    getStars() {
        return this.stars
    }
    getWrites() {
        return this.writers
    }
    getDirector() {
        return this.director
    }
    getRating() {
        let rateAva = 0;
        for (let i = 0; i < this.rate.length; i++) {
            rateAva += this.rate[i];
        }
        return rateAva / this.rate.length;
    }

    set newStar(newStar) {
        this.stars.push(newStar)
    }
    set newWriter(newWriter) {
        this.writers.push(newWriter)
    }
    set newDirector(newDirector) {
        this.director.push(newDirector)
    }
    set newRate(newRate) {
        this.rate.push(newRate)
    }

}


class Staff {

    constructor(name, role, dob) {
        this.name = name;
        this.role = role;
        this.dob = new Date(dob);
        this.movies = [];

    }

    addMovie(movieInstance) {
        this.movies.push(movieInstance);
    }
    getName() {
        return this.name
    }
    getRole() {
        return this.role
    }
    getAge() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.dob.getFullYear();
    }

}


// The staff informations

const kimble = new Staff("Jonathan Kimble Simmons", "Actor", "1955-01-09");
kimble.addMovie("Counterpart");
kimble.addMovie("The Front Runner");
kimble.addMovie("Klaus");
kimble.addMovie("The Batman");

const harry = new Staff("Harry Lloyd", "Actor", "1983-10-17");
harry.addMovie("Counterpart");

const thomsen = new Staff("Ulrich Thomsen", "Actor", "1963-12-06");
thomsen.addMovie("Counterpart");

const alik = new Staff("Alik Sakharov", "Director", "1959-05-17");
alik.addMovie("Counterpart");

const morten = new Staff("Morten Tyldum", "Director", "1967-05-19");
morten.addMovie("Counterpart");

const justin = new Staff("Justin Marks", "Writer", "1976-08-27");
justin.addMovie("Counterpart");

const amy = new Staff("Amy Berg", "Writer", "1965-03-17");
amy.addMovie("Counterpart")

console.log(kimble);
// console.log(harry);
// console.log(thomsen);
// console.log(alik);
// console.log(morten);
// console.log(justin);
// console.log(amy);


// The information of the movie "Counterpart"

const counterpart = new Movies("Counterpart");
counterpart.newStar = kimble;
counterpart.newStar = harry;
counterpart.newStar = thomsen;
counterpart.newDirector = alik;
counterpart.newDirector = morten;
counterpart.newWriter = justin;
counterpart.newWriter = amy;
counterpart.newRate = 8.7;
counterpart.newRate = 7.5;
counterpart.newRate = 8.1;
counterpart.newRate = 8.3;

console.log(counterpart);
console.log(counterpart.getRating());

console.log(counterpart.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = counterpart.getDirector();
console.log(`Director: ${director.map(actor => `${actor.getName()}`)}`);

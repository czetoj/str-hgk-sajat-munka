function setYearToMovies() {
    const titles = ["Avatar", "Titanic", "Terminator", "E.T.", "Shark", "Ready player one", "Green Book", "Millionare baby", "Gran Torino", "Terminator 2"];
    const releaseYear = [1983, 1984, 1988, 1994, 1995, 1998, 2003, 2005, 2008, 2012];
    titles.forEach((item, index) => {
        db.movies.updateOne(
            { title: item },
            { $set: { releaseYear: releaseYear[index] } }
        )
    })
}
setYearToMovies();
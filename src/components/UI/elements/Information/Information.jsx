import styles from '../../Pages/MainPage.module.scss';
import Button from '../Button/Button';

function Information({movie}) {

    const addFavorite = (movieName)=> {
        let faivorites = localStorage.getItem("moviesAddFavorite")
        

        if(faivorites) {
            faivorites = JSON.parse(faivorites);
            localStorage.setItem("moviesAddFavorite", [...faivorites, movieName])
        }
    }
    return ( 
        <div className={styles.info}>
            <div className={styles.additional}>
                <span>{movie.year}</span>
                <span>{movie.limitAge}</span>
                <span>{movie.rating}</span>
                <span>{movie.duration}</span>
                <span>{movie.running_time}</span>
            </div>

            <div className={styles.description}>
                {movie.description}
            </div>

            <div className={styles.buttons}>
                <Button callback={() => console.log("Play video")}>
                    <i className="bx bx-play"></i>
                    <span>Play</span>
                </Button>
                <Button callback={addFavorite}>
                    <i className="bx bx-plus"></i>
                    <span>My list</span>
                </Button>
            </div>

        </div>
     );
}

export default Information;
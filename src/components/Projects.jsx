import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';


/* add github buttons*/
export default function Projects(props){
  useEffect(() => {
    const handleScroll = props.revealItem;
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [props.revealItem]);
    return(
        <section className="exp">
            <Container>
                <h1 className="reveal"><b>Projects</b></h1>
                <h4 className="reveal"><b>Spotify Companion</b></h4>
                <p className="reveal">
                    II developed a Spotify companion application utilizing Spotify's API through the Spotipy library. This app provides users with real-time updates on 
                    their currently playing track, including the lyrics (a feature available for Spotify Premium users). In addition to displaying the current track, the 
                    app enables users to search for tracks, view detailed information, and add them to their Spotify playlists. Users can also view their playlists and sort 
                    the songs using a variety of sorting algorithms.
                    <br/>
                    The frontend was crafted using HTML, CSS, and JavaScript, while Flask was employed to manage backend routing, all integrated through Jinja templates. This 
                    project highlights my technical proficiency in API integration, web development, and data analysis, alongside a strong focus on user-centric design and the 
                    practical application of programming knowledge.
                </p>
                <h4 className="reveal"><b>Harvard CS50x Course 2024</b></h4>
                <p className="reveal">
                    I successfully completed the CS50x course (Introduction to Computer Science) offered by Harvard University. 
                    Through this rigorous program, I gained proficiency in programming languages such as C and Python, developed skills 
                    in working with databases using SQL, and learned how to build dynamic websites, integrating them with back-end frameworks 
                    like Flask. The course went beyond teaching syntax; it instilled in me the ability to think and code efficiently like a professional developer. 
                    The interactive nature of the course, combined with challenging problem sets and Professor David J. Malan's exceptional teaching, 
                    significantly honed my programming skills and prepared me to tackle real-world applications.
                </p>
                <h4 className="reveal"><b>Recipe Management website</b></h4>
                <p className="reveal">
                    As part of a collaborative university project, We developed a comprehensive recipe management website featuring both user and administrative interfaces. 
                    The user interface allows for seamless browsing, searching, and viewing of recipes, while the administrative interface supports 
                    CRUD (Create, Read, Update, Delete) operations for managing recipes and categories.
                    We implemented the backend using vanilla Node.js, handling user authentication through login credential verification against an SQL database, managing routes, 
                    and executing SQL queries to manipulate recipe data. The frontend was designed and developed using HTML, CSS, and JavaScript, ensuring a responsive and user-friendly experience.
                    This project involved close team collaboration and demonstrated our ability to integrate frontend and backend technologies effectively, 
                    resulting in a fully functional and well-rounded recipe management system.
                </p>
            </Container>
        </section>
    )
}
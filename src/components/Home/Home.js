import home from './Home.module.css';

const Home = () => {
    return (
        <div className={home.container}>
            <h1 className={home.title}>
                Welcome to E-Commerce Home Page
            </h1>
        </div>
    )
}

export default Home;
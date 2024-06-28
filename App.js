import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';

const App = () => {
    const [videos, setVideos] = useState([]);

    const addVideo = (video) => {
        setVideos([...videos, { ...video, id: videos.length + 1 }]);
    };

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/nuevo-video">Nuevo Video</Link>
                </nav>
                <Switch>
                    <Route path="/" exact>
                        <Home videos={videos} setVideos={setVideos} />
                    </Route>
                    <Route path="/nuevo-video">
                        <NewVideo onAddVideo={addVideo} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;

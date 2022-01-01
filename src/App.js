import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './pages/home';
import view from './pages/view';
import { Container } from '@mui/material';
import Header from './Component/Common/Header';
import Footer from './Component/Common/Footer';
import AddPost from './pages/addPost';
import AllPost from './pages/allPost'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Container maxWidth='lg' style={{ marginTop: '10px' }}>
          <Header />
          <Route path='/post/:id' exact component={view} />
          <Route path='/post/add' exact component={AddPost} />
          <Route path='/post/edit/:id' exact component={AddPost} />
          <Route path='/allpost' exact component={AllPost} />
          <Route path='/' exact component={home} />
          <Footer />
        </Container>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { Header } from './Header';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <BusinessList />
        </div>
    );
}

export default App;

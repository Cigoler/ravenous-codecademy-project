import { Header } from './Header';
import BusinessList from '../BusinessList/BusinessList';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="p-6">
                <BusinessList />
            </div>
        </div>
    );
}

export default App;

import { Header } from './Header';
import BusinessList from '../BusinessList/BusinessList';

const business = {
    imageSrc:
        'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
};

const businessArray = [
    business,
    business,
    business,
    business,
    business,
    business,
    business,
];

function App() {
    return (
        <div className="App">
            <Header />
            <div className="p-6">
                <BusinessList businesses={businessArray} />
            </div>
        </div>
    );
}

export default App;

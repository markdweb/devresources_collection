// App.tsx
import Header from './components/Header';
import ImageFilter from './components/ImageFilter';

const App = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900">
            <Header />
            <ImageFilter />
        </div>
    );
};

export default App;

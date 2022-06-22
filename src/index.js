import ReactDOM from 'react-dom/client';
import Counter from './AppHooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = (<Counter />)
root.render(element);
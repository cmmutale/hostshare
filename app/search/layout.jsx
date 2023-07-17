import Header from '../components/header/Header';
// import { AnimatePresence, motion } from 'framer-motion';

function SearchLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default SearchLayout
import Header from '@/app/components/header/Header';
// import { AnimatePresence, motion } from 'framer-motion';

function ListingLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default ListingLayout
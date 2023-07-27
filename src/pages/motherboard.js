import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const motherboard = () => {
    return (
        <div>
            
        </div>
    );
};

export default motherboard;

motherboard.getLayout = function getLayout(page){
    return <RootLayout>{page}</RootLayout>
}
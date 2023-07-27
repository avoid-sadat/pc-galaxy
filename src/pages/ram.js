import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const ram = () => {
    return (
        <div>
            
        </div>
    );
};

export default ram;

ram.getLayout = function getLayout(page){
    return <RootLayout>{page}</RootLayout>
}
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const storage = () => {
    return (
        <div>
            
        </div>
    );
};

export default storage;

storage.getLayout = function getLayout(page){

    return <RootLayout>{page}</RootLayout>
}
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const power = () => {
    return (
        <div>
            
        </div>
    );
};

export default power;

power.getLayout = function getLayout(page){
    return <RootLayout>{page}</RootLayout>
}
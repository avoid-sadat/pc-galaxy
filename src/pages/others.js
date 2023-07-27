import RootLayout from "@/components/Layouts/RootLayout";

const others = () => {
    return (
        <div>
            
        </div>
    );
};

export default others;
others.getLayout = function getLayout (page){
    return <RootLayout>{page}</RootLayout>
}
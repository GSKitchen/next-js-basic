import {useRouter} from 'next/router';
import MyLayout from '../comps/MyLayout';


const Content = () => {
    const router = useRouter();
    return(
        <>
            <h1>{router.query.title}</h1>
            <p>This is blog post content for <i>{router.query.title}</i> post!</p>
        </>
    );
}
const Page = () => {
    const router = useRouter();

    return(
        <MyLayout>
            <Content />
        </MyLayout>
    )
}

export default Page;
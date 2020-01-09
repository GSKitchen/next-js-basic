import MyLayout from "../../comps/MyLayout";
import fetch from 'isomorphic-unfetch';

// import MyLayout from "../../comps/MyLayout";
// import { useRouter } from "next/router";

// const Post = () => {
//     const router = useRouter();
//     return ( 
//         <MyLayout>
//             <h1>{router.query.id}</h1>
//             <p>This is post content of <i>{router.query.id}</i> post!</p>
//         </MyLayout>
//      );
// }
 
// export default Post;

const Post = (props) => {
    return ( 
        <MyLayout>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
            {props.show.image ? <img src={props.show.image.medium} /> : null }
        </MyLayout>
     );
}

Post.getInitialProps = async (context) => {
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    console.log('show fetched: ' + show.name);

    return{show};
};
 
export default Post;
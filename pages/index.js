import MyLayout from "../comps/MyLayout";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';

// import MyLayout from "../comps/MyLayout";
// import Link from "next/link";

// // import Link from 'next/link';
// // import Header from '../comps/Header';

// // const Index = () => (
// //     <div>
// //         <Header />
// //       <p>Hello there!</p>
// //       <Link href="/about">About</Link>
// //     </div>
// //   );

// const PostLink = props => {
//     return (
//         <li>
//             <Link href="/p/[id]" as={`/p/${props.id}`}>
//                 <a>{props.id}</a>
//             </Link>
//         </li>
//     );
// }


// const Blog = () => {
//     return(
//         <MyLayout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink id="hello-next-js" />
//                 <PostLink id="learn-next" />
//                 <PostLink id="deploy-next" />
//             </ul>
//         </MyLayout>
//     )
// }

// export default Blog;


// const Index = () => (
//     <MyLayout>
//         <p>Hello theree!!!!</p>
//     </MyLayout>
// );
  
//   //export default Index;

const Index = (props) => {
    return ( 
        <MyLayout>
            <h1>Batman TV Shows</h1>
            <ul>
                {props.shows.map((show) =>{
                    return(
                        <li key={show.id}>
                            <Link href="/p/[id]" as={`/p/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </MyLayout>
     );
}

Index.getInitialProps = async () =>{
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log("fetchwd data:\n" + data.length);
    return{
        shows: data.map(entry => entry.show)
    };
};
 
export default Index;
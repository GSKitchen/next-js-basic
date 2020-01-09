import MyLayout from "../comps/MyLayout";

// import Link from "next/link";
// import Header from "../comps/Header";

// const About = () => {
//     return ( 
//         <div>
//             <Header />
//             <h3>About page</h3>
//             <p>This is About page</p>
//             <Link href="/index"><a title="About Home">Home</a></Link>
//         </div>
//      );
// }

const About = () => {
    return(
        <MyLayout>
            <p>From about page</p>
        </MyLayout>
    )
}
 
export default About;
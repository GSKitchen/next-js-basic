import Header from "./Header";
//import './styles.scss';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const MyLayout = (props) => {
    return ( 
        <div style={layoutStyle}>
            <Header />
            <hr />
            {props.children}
        </div>
     );
}
 
export default MyLayout;
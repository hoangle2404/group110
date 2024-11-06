import NavBar from "../components/navbar/NavBar";
import NewPostButton from "../components/post/NewPostButton";
import PostList from "../components/post/PostList";
import 'bootstrap/dist/css/bootstrap.min.css';

export const MyNewsFeed = () => {
    return (
        <div className="container-fluid" >
            <div className="navBar" 
                style={{ width: "100%", top: 0, position: "sticky", left: 0, right: 0, borderBottom:"2px solid black" }}>
                    <NavBar />
            </div>

            <div className="row mt-3">
                <div className="col-sm" style={{marginLeft: "15%", marginRight:"15%", paddingTop:"100px"}}>
                    <PostList />
                </div>
            </div>   

            <div className = "newPostButton" 
                style={{ top: 0, position: "sticky", left: 0, right: 0 }}>
                <NewPostButton />
            </div>         
        </div>
    );
};

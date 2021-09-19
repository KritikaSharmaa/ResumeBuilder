import NavBar from "./NavBar";

const UserProfile=()=>{
    return<>
        <NavBar type="Profile" />
        <div className="min-h-screen w-full bg-ProfileBackImg lg:bg-cover absolute top-0 z-m1">
        </div>
    </>
}
export default UserProfile;
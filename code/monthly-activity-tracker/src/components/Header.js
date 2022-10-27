function Header(){
    return(
        <>
        <div className="container">
            <h1 className="my-12 mx-auto text-center text-4xl text-blue-500 font-semibold">
                Monthly Activity Tracker!
            </h1>
            <fieldset className="flex">
                <input className="border mx-auto " type="text"  placeholder="e.g.Traveling"/>
                <input  className="btn bg-teal-300 text-white font-semibold" type="button" value="Add Activity" />
            </fieldset>
        </div>
        </>
    )
}
export default Header;
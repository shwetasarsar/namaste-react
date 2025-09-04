const Contact = () =>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact US Page</h1>
            <form className="p-4 m-4">
                <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="message"/>
                <button className="px-4 py-2 m-4 bg-gray-200 cursor-pointer rounded-lg text-gray-600 border-gray-500 border-1">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
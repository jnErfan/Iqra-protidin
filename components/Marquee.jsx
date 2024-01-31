const Marquee = ({ children }) => {

    return <marquee behavior="scroll" direction="left" scrollamount="7">
        {children}
    </marquee>

}

export default Marquee
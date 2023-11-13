const Footer = () => {
    const year = new Date().getFullYear();
    return <footer className="font-agbalumo text-center text-[#b3446c]"> 
        {`© ${year}  Aileena Xie. All Rights Reserved.`}
    </footer>
}

export default Footer;
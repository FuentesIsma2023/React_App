import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
            <a href='https://www.facebook.com/profile.php?id=100091467200677&mibextid=b06tZ0'>
                <img src='/img/facebook.png'alt='Facebook'/>
            </a>
            <a href='https://twitter.com/NajeraIsma?t=TX0taBJYO9lnV8PColFntQ&s=09'>
                <img src='/img/twitter.png'alt='twitter'/>
            </a>
            <a href='https://instagram.com/ismael_ftes?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'>
                <img src='/img/instagram.png'alt='instagram'/>
            </a>
        </div>
        <img src="/img/Logo.png" alt="org"/>
        <strong>Desarrollado por IsmaFuentes</strong>
    </footer>
}
export default Footer
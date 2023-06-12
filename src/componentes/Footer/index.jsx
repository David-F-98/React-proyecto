import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/davichechenco/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://github.com/David-F-98'>
                <img src="/img/github.png" alt='github' />
            </a>
            <a href='https://instagram.com/davichechenco?igshid=MzNlNGNkZWQ4Mg=='>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
            <a href='https://www.linkedin.com/in/david-rodr%C3%ADguez-freelancerprogramacion/'>
                <img src="/img/linkedin.png" alt='linkedin' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer
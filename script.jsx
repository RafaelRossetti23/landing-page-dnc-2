
function Header(){
    return (
    <header id="header">
        <div className="logo">
            <img 
                src="images/logo.svg"
                alt="DNC Logo"
            />
        </div>
         <div className="text">
            <h1>Dê os primeiros passos da<br/> sua carreira em Tecnologia</h1>
            <p>Inscreva-se no curso gratuito de Introdução à<br /> Tecnologia da DNC School e aprenda os principais<br /> fundamentos para construir experiências efetivas.</p>
         </div>
    </header>
    )
}
function ListProduct(){
    return (
        <div className="ListProducts">
            <div>
                <img 
                    src="images/icon-1.svg"
                />
                <p>
                    
                    Certificado de conclusão
                </p>
            </div>
            <div>
                <img 
                        src="images/icon-2.svg"
                    />
                <p>
                    
                    4 horas de conteúdo
                </p>
            </div>
            <div>
                <img 
                        src="images/icon-3.svg"
                    />
                <p>
                    
                    Aulas online gravadas
                </p>
            </div>
        </div>
    )
}
function Video(){
    return (
        <div className="VideoSession">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4M6Mfjz6noc?si=TYuWUvKFaFN1jLKj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div>
                <h1>Aprenda com especialistas e <br/>comece seu primeiro projeto</h1><br /><br />
                <p>Conheça o processo de desenvolvimento e entenda como utilizar <br/>os principais métodos e ferramentas da área para resolver <br />problemas complexos. <br/> <br/>Conquiste seu certificado e desenvolva um projeto prático<br /> para aplicar seus conhecimentos.</p>
            </div>
        </div>
    )
}
function Depoiments(){
    function NextAria(){
        const btnLeft = document.getElementById("arrow-left")
        const btnRight = document.getElementById("arrow-right")
        const bruna = document.getElementById("bruna")
        const leonardo = document.getElementById("leonardo")
        btnLeft.style.display = "inline-block"
        bruna.style.display = "inline-block"
        leonardo.style.display = "none"
        btnRight.style.display = "none"
       

    }
    function PreviousAria(){
        const btnLeft = document.getElementById("arrow-left")
        const btnRight = document.getElementById("arrow-right")
        const bruna = document.getElementById("bruna")
        const leonardo = document.getElementById("leonardo")
        btnLeft.style.display = "none"
        bruna.style.display = "none"
        leonardo.style.display = "inline-block"
        btnRight.style.display = "inline-block"
    }
    return (
        <div className="depoimentos">
        <h1>Mais de 500 alunos já iniciaram seus estudos</h1>
        <ul>
            <img 
                id="arrow-left" 
                onClick={PreviousAria}
                src="images/arrow-left.svg" 
                alt="" 
            />
            <li>
                <img id="leonardo"
                    src="images/leonardo.svg" 
                />
            </li>
            <li>
                <img 
                    src="images/samantha.svg" 
                />
            </li>
            <li>
                <img id="bruna"
                    src="images/bruna.svg" 
                />
            </li>
            <img 
                id="arrow-right"
                onClick={NextAria} 
                src="images/arrow-right.svg" 
                alt="" 
            />
        </ul>
        
        </div>
    )
}
function Form(){
    return (
        <div className="formulario">
            <h1>Comece agora mesmo e dê o próximo passo da sua carreira</h1>
            <form method="POST" action="https://api.sheetmonkey.io/form/qvyW9uLaii88FNeNGswCDY">
                <label for="nome"></label>
                <input type="text" name="Name" id="nome" placeholder="Nome" required/>
                <label for="email"></label>
                <input type="email" name="Email" id="email" placeholder="E-mail" required/>
                <label for="telefone"></label>
                <input type="number" name="Telefone" id="telefone" placeholder="Telefone" required/>
                <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
                <button type="submit">Acesse a ementa grátis</button>
            </form>
        </div>
    )
}
function HomePage(){
    return (
    <div>
    <Header />
    <ListProduct />
    <Video />
    <Depoiments />
    <Form />
    </div>
    )
}
ReactDOM.render(<HomePage />, app)
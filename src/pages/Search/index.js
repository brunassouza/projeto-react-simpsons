import React, {useState, useEffect} from 'react'
import './style.css'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

const Search = () => {
    const [personagens, setPersonagem] = useState([]) //renderiza os personagens na tela
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('') //useState é como começa

useEffect(()=> {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(resposta => resposta.json())
    .then(dados => setPersonagem(dados))

},[])


useEffect(()=>{
    setFiltroPersonagem(
        personagens.filter(personagem => {
            return personagem.name.includes(busca) //quero quw filtre o personagem que tem o nome que esteja incluso no termo digitado na busca, no target
        })
    )
}, [busca, personagens]) //acontece quando esas variaveis modificarem

return (
    <>
    <Menu />
    <input
    type="text"
    placeholder="Digite um personagem"
    onChange={e=>{setBusca(e.target.value)}}/>

    <ul className="personagens">
    {filtroPersonagem.map(personagem => {
        return <li className="persos">
        {personagem.name}
        <img className="images" src={personagem.image} alt={personagem.name}/>
        <p> Espécie: {personagem.species} </p><br></br>
        <p> Gênero: {personagem.gender}  </p><br></br>
        <p> Data de nascimento: {personagem.dateOfBirth}  </p><br></br>
        </li>
    })} </ul>
    <Footer />
    </>
    
)
}

export default Search
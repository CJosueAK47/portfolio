import './main.css';


function Body() {

  return (
  <>
    <div className='cabecalho'>
      <h1>Óticas Versa</h1>
      <h2> - Uma Nova Versão em Ótica -</h2>
      <ul className='elementos'>
        <li>
          <button>História</button>
        </li>
        <li>
          <button>Missão</button>
        </li>
        <li>
          <button>Equipe</button>
        </li>
        <li>
          <button>Comunidade</button>
        </li>
      </ul>
    </div>
    <div className='container'>
          <div className='historia'>
            <h2>- História -</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae fugit amet reprehenderit saepe assumenda veniam sunt sint facere eius ut tempore sed labore, vitae molestias dolorum aspernatur. Similique, sapiente!

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi dolorem ab error ipsum assumenda ut, accusamus pariatur a! Eveniet, consequuntur quisquam. Quisquam mollitia vel distinctio veritatis enim excepturi harum.
            </p>
          </div>
          
          <div className='equipe'>
            <h2> - Equipe -</h2>
            <section className='slider'>
              <div className='slider-content'>
                <input type="radio" name="btn-radio" id="radio1" />
                <input type="radio" name="btn-radio" id="radio2" />
                <input type="radio" name="btn-radio" id="radio3" />
                <input type="radio" name="btn-radio" id="radio4" />

                <div className='slide-box one'>
                  <img className='img-mobile' src="https://via.placeholder.com/300x300" alt="slide01" />
                  <img className='img-desktop' src="https://via.placeholder.com/1200x600" alt="slide01desktop" />
                  <div className='descricao'>
                    <h2>Carlos Josué</h2>
                    <h3>Agente de Marketing</h3>
                    <p>Universitário UFMA (e com orgulho) há 4 períodos, <b>programador Full-Stack e gestor de marketing</b>. Toco ukulelê nos momentos de lazer e até arisco uma cantoria, para mim música é terapia.</p>
                    <p>Obs: Nunca fui no Bambu </p>
                  </div>
                </div>
                <div className='slide-box'>
                  <img className='img-mobile' src="https://via.placeholder.com/290x300" alt="slide01" />
                  <img className='img-desktop' src="https://via.placeholder.com/1200x600" alt="slide01desktop" />
                  <div className='descricao'>
                    <h2>Steffane Nepomuceno</h2>
                    <h3>Agente de Marketing</h3>
                    <p>Universitário UFMA (e com orgulho) há 4 períodos, <b>programador Full-Stack e gestor de marketing</b>. Toco ukulelê nos momentos de lazer e até arisco uma cantoria, para mim música é terapia.</p>
                    <p>Obs: Nunca fui no Bambu </p>
                  </div>
                </div>
                <div className='slide-box'>
                  <img className='img-mobile' src="https://via.placeholder.com/280x300" alt="slide01" />
                  <img className='img-desktop' src="https://via.placeholder.com/1200x600" alt="slide01desktop" />
                  <div className='descricao'>
                    <h2>Carlos Herique</h2>
                    <h3>Agente de Marketing</h3>
                    <p>Universitário UFMA (e com orgulho) há 4 períodos, <b>programador Full-Stack e gestor de marketing</b>. Toco ukulelê nos momentos de lazer e até arisco uma cantoria, para mim música é terapia.</p>
                    <p>Obs: Nunca fui no Bambu </p>
                  </div>
                </div>
                <div className='slide-box'>
                  <img className='img-mobile' src="https://via.placeholder.com/289x300" alt="slide01" />
                  <img className='img-desktop' src="https://via.placeholder.com/1200x600" alt="slide01desktop" />
                  <div className='descricao'>
                    <h2>Adriana Barros</h2>
                    <h3>Agente de Marketing</h3>
                    <p>Universitário UFMA (e com orgulho) há 4 períodos, <b>programador Full-Stack e gestor de marketing</b>. Toco ukulelê nos momentos de lazer e até arisco uma cantoria, para mim música é terapia.</p>
                    <p>Obs: Nunca fui no Bambu </p>
                  </div>
                </div>
                <div className='nav-auto'>
                  <div className='auto-btn1'></div>
                  <div className='auto-btn2'></div>
                  <div className='auto-btn3'></div>
                  <div className='auto-btn4'></div>
                </div>

                <div className='nav-manual'>
                    <label htmlFor='radio1' className='manual-btn'></label>
                    <label htmlFor='radio2' className='manual-btn'></label>
                    <label htmlFor='radio3' className='manual-btn'></label>
                    <label htmlFor='radio4' className='manual-btn'></label>
                </div>

              </div>
            </section>
            
          </div>
          <div className='missao'>
              <h2>- Missão -</h2>
              <ul>
                <li>Suco de acerola ssimos, ex dolorum magni dicta ipsa pariatur delectus, ut</li>
                <li>Pao com lama</li>
                <li>Amendoin com batata doce</li>
              </ul>
          </div>
          <div className='atuacao'>
            <h2>- Atuação -</h2>
            <ul>
              <li>
                <img src="https://via.placeholder.com/200x200" alt="" />
                <p>  Ação Social vila palmeira</p>
              </li>
              <li>
                <img src="https://via.placeholder.com/200x200" alt="" />
                <p>  Ação Social vila palmeira</p>
              </li>
              <li>
                <img src="https://via.placeholder.com/200x200" alt="" />
                <p>  Ação Social vila palmeira</p>
              </li>
            </ul>
          </div>    

    </div>
    <footer> *** </footer>
  </>
  )
}

export default Body

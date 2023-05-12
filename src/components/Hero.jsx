import {images} from '../constants';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={images.logo} alt="medhi_logo" className="w-52 object-contain" />

        <button
          type="button"
          onClick={() => window.open('https://github.com/claymeers')}
          className='black_btn'
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Summarize any piece of text into concise, easy to digest content 
      so you can free yourself from information overload.
      </h2>
    </header>
  )
}

export default Hero
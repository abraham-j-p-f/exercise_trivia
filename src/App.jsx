import TriviaProvider from "./contexts/triviaContext";
import ActualStage from "./components"

const CreditLink = ({ children, link }) => {
  return(
    <div className="text-white w-full h-1/12 flex justify-center items-center">
    <a
      target="_blank"
      className="textcrt text-white"
      href={ link }
    >
      { children }
    </a>
  </div>
  )
};

export default function App() {
  return (
    <TriviaProvider>
      <div className="w-screen h-screen font-pstart bg-slate-900 p-4">
        <CreditLink link={ 'https://github.com/abraham-j-p-f' }>
          Hi, I'm Abe, GitHub here!
        </CreditLink>
        <div className="h-10/12 w-full flex justify-center">
          <div className="shadow-inner crt bg-neutral-900 px-4 overflow-hidden rounded-3xl relative h-full aspect-4/3 flex justify-center items-center">
            <div className="text-white w-3/4 h-full py-4">
              <ActualStage/>
            </div>
          </div>
        </div>
        <CreditLink link={ 'http://aleclownes.com/2017/02/01/crt-display.html' }>
          CRT EFFECT CREDIT
        </CreditLink>
      </div>
    </TriviaProvider>
  );
}
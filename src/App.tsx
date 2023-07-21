import Header from './components/Header';
import { GlobalStyle, Main, Settings } from './global';
import Sales from './pages/Sales';

function App() {
  return (
    <>
      <Main>
        <Header />
        <Settings>
          <Sales />
        </Settings>
      </Main>
      <GlobalStyle />
    </>
  )
}

export default App
